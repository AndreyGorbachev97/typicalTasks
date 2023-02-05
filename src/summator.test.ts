import { sum } from "./summator";

describe("test summator", () => {
  let alertSpy;
  beforeEach(() => {
    jest.clearAllMocks();
    alertSpy = jest
      .spyOn(window, "alert")
      .mockImplementation((f) => f.toString());
  });

  it("base test summator s(1)(2)", () => {
    const s = sum();
    const res = window.alert(s(1)(2));
    expect(res).toBe(3);
  });
  it("base test summator s(3)(4)(5)", () => {
    const s = sum();
    const res = window.alert(s(3)(4)(5));
    expect(res).toBe(12);
  });
  it("base test summator sum(3), s(5)", () => {
    const s = sum(3);
    expect(window.alert(s(5))).toBe(8);
  });
  it("base test summator alert(sum())", () => {
    expect(window.alert(sum())).toBe(0);
  });
});
