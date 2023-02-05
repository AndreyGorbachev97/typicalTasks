import { Parallel } from "./parallel";

(async () => {
  const jobs = [
    () => new Promise((resolve) => setTimeout(resolve, 10, 1)),
    () => new Promise((resolve) => setTimeout(resolve, 50, 2)),
    () => new Promise((resolve) => setTimeout(resolve, 20, 3)),
    () => new Promise((resolve) => setTimeout(resolve, 90, 4)),
    () => new Promise((resolve) => setTimeout(resolve, 30, 5)),
  ];

  console.log(await new Parallel(2).jobs(...jobs)); // [1, 3, 2, 5, 4];
})();
