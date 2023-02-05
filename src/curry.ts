export const curry = (cb: (...a: number[]) => number) => {
  return function carried(...args: number[]) {
    if (args.length >= cb.length) {
      return cb(...args);
    }
    return carried.bind(this, ...args);
  };
};
