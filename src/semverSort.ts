export const semverSort = (arr: string[]) => {
  let maxElement = 0;

  arr.forEach((item) => {
    const countPoint = item.match(/[.]/g)?.length || 0;
    if (countPoint > maxElement) {
      maxElement = countPoint;
    }
  });

  return arr
    .map((item) => {
      const countPoint = item.match(/[.]/g)?.length || 0;
      const toArr = item.split(".");
      let lastArr = [];
      if (countPoint < maxElement) {
        lastArr = new Array(maxElement - countPoint).fill("0");
      }

      const res = [...toArr, ...lastArr];

      return {
        str: item,
        arr: res,
      };
    })
    .sort((a, b) => {
      for (let i = 0; i < a.arr.length; i++) {
        if (+a.arr[i] < +b.arr[i]) {
          return -1;
        }
        if (+b.arr[i] < +a.arr[i]) {
          return 1;
        }
      }
      return 0;
    })
    .map((item) => item.str);
};
