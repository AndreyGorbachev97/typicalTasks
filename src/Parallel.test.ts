import { Parallel } from "./Parallel";

describe("parallel", () => {
  it("is a class", () => {
    expect(Parallel).toBeInstanceOf(Function);
    expect(new Parallel(2)).toBeInstanceOf(Parallel);
  });

  it("runs all jobs", async () => {
    const jobs = [jest.fn(), jest.fn(), jest.fn()];
    await new Parallel(2).jobs(...jobs);
    jobs.forEach((job) => expect(job).toHaveBeenCalled());
  });

  // it("result jobs [1, 3, 2, 5, 4]", async () => {
  //   const jobs = [
  //     () => new Promise((resolve) => setTimeout(resolve, 10, 1)),
  //     () => new Promise((resolve) => setTimeout(resolve, 50, 2)),
  //     () => new Promise((resolve) => setTimeout(resolve, 20, 3)),
  //     () => new Promise((resolve) => setTimeout(resolve, 90, 4)),
  //     () => new Promise((resolve) => setTimeout(resolve, 30, 5)),
  //   ];
  //   const result = await new Parallel(2).jobs(...jobs);
  //   expect(result).toEqual([1, 3, 2, 5, 4]);
  // });
});
