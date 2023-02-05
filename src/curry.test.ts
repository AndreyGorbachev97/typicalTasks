import { curry } from "./curry";

describe("test curry function", () => {
  const sum = (a: number, b: number, c: number, d: number, e: number) =>
    a + b + c + d + e;

  const multi = (a: number, b: number, c: number) => a * b * c;
  const hofSum = curry(sum);
  const hofMulti = curry(multi);

  it("hofSum(1)(2)(3)(4)(5)", () => {
    expect(hofSum(1, 2, 3, 4, 5)).toBe(15);
  });
  it("hofSum(2, 3, 4)(5, 6)", () => {
    expect(hofSum(2, 3, 4)(5, 6)).toBe(20);
  });
  it("hofSum(3, 4)(5, 6)(7)", () => {
    expect(hofSum(3, 4)(5, 6)(7)).toBe(25);
  });
  it("hofSum(4, 5)(6)(7, 8)", () => {
    expect(hofSum(4, 5)(6)(7, 8)).toBe(30);
  });
  it("hofSum(5)(6)(7)(8)(9)", () => {
    expect(hofSum(5)(6)(7)(8)(9)).toBe(35);
  });

  it("multiplication (2)(3)(5)", () => {
    expect(hofMulti(2)(3)(5)).toBe(30);
  });
  it("multiplication (5)(5)(5)", () => {
    expect(hofMulti(5)(5)(5)).toBe(125);
  });
});
