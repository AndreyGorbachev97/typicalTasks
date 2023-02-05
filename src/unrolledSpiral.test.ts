import { spiral } from "./unrolledSpiral";

describe("unrolled spiral", () => {
  it("typical case 1:", () => {
    expect(
      spiral([
        [0, 1, 2, 3, 4],
        [5, 6, 7, 8, 9],
        [10, 11, 12, 13, 14],
        [15, 16, 17, 18, 19],
      ])
    ).toEqual([
      0,
      1,
      2,
      3,
      4,
      9,
      14,
      19,
      18,
      17,
      16,
      15,
      10,
      5,
      6,
      7,
      8,
      13,
      12,
      11,
    ]);
  });
  it("border case 1:", () => {
    expect(spiral([[1], [3], [5]])).toEqual([1, 3, 5]);
  });
  it("border case 2:", () => {
    expect(spiral([[0]])).toEqual([0]);
  });
  it("border case 3:", () => {
    expect(spiral([])).toEqual([]);
  });
  it("border case 4:", () => {
    expect(spiral([[1, 2, 3, 4]])).toEqual([1, 2, 3, 4]);
  });
  it("border case 5:", () => {
    expect(
      spiral([
        [1, 2, 3, 4],
        [5, 6, 7, 8],
      ])
    ).toEqual([1, 2, 3, 4, 8, 7, 6, 5]);
  });
});
