export const sum = function(a = 0) { 
  let currentSum = a;

  function f(b: number) {
    currentSum += b;
    return f;
  }

  f.toString = function() {
    return currentSum;
  };

  return f;
};
