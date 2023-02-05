const func = (a: number, b: number, c: number, d: number, e: number) =>
  a + b + c + d + e;

export const curry = (cb: (...a: number[]) => number) => {
  return function carried(...args: number[]) {
    if (args.length >= cb.length) {
      return cb(...args);
    }
    return carried.bind(this, ...args);
  };
};

const hof = curry(func);
console.log(hof(1, 2, 3, 4, 5));
