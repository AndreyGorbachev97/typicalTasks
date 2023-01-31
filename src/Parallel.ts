export interface IParallel {
  runFn(fn: () => any, resolve: (arg: any) => void, args: Array<any>): void;
}

export class Parallel implements IParallel {
  private countStream: number;

  private freeCountStream: number;

  private count: number;

  private waitFunctions: Array<any>;

  private results: Array<any>;

  constructor(countStream: number) {
    this.countStream = countStream; // количество потоков
    this.freeCountStream = countStream; // количество свободных потоков
    this.waitFunctions = []; // функции которые попали в очередь
    this.count = 0; // счетчик выполненных операций
    this.results = []; // результирущий массив
  }

  public runFn(fn: any, resolve: (arg: any) => void, args: Array<any>) {
    console.log("FN", fn);
    fn()?.then((result: any) => {
      // результат функции пушим в результирующий массив, увеличиваем счетчик
      this.results.push(result);
      this.count++;

      // освободили 1н поток
      this.freeCountStream++;

      // проверяем стоит ли нам делать главный resolve
      if (this.count >= args.length) {
        resolve(this.results);
      }
      // если свободных потоков меньше чем доступных
      if (this.freeCountStream < this.countStream) {
        const extractedFn = this.waitFunctions.splice(0, 1);
        // запускаем раннер функции, которая была первая в очереди
        extractedFn[0] && this.runFn(extractedFn[0], resolve, args);
        // заняли поток
        this.freeCountStream--;
      }
    });
  }

  jobs(...args: any[]) {
    return new Promise((resolve, reject) => {
      args.forEach((fn) => {
        const resFn = new Promise((resolveFn) => {
          // если есть свободный поток резолвим функцию
          if (this.freeCountStream > 0) {
            this.freeCountStream--;
            resolveFn(fn);
          } else {
            // иначе пушим функцию в очередь
            this.waitFunctions.push(fn);
          }
        });

        resFn.then((fn) => {
          // если были свободные потоки, запускаем раннер функции, дополнительно передаем главный resolve и args
          this.runFn(fn, resolve, args);
        });
      });
    });
  }
}

// const runner = new Parallel(2);

// (async () => {
//   console.log(
//     await runner.jobs(
//       () => new Promise((resolve) => setTimeout(resolve, 10, 1)),
//       () => new Promise((resolve) => setTimeout(resolve, 50, 2)),
//       () => new Promise((resolve) => setTimeout(resolve, 20, 3)),
//       () => new Promise((resolve) => setTimeout(resolve, 90, 4)),
//       () => new Promise((resolve) => setTimeout(resolve, 30, 5))
//     )
//   ); // [1, 3, 2, 5, 4];
// })();
