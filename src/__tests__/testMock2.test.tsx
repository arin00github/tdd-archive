import { calculator } from "../utils/calculator";

const spyFn = jest.spyOn(calculator, "add");

test("jest.spyOn", () => {
  const result = calculator.add(3, 4); //지켜봐 지는 중
  expect(spyFn).toBeCalledTimes(1);
  expect(spyFn).toBeCalledWith(3, 4);
  expect(result).toBe(7);
});
// const calculator = {
//   add: (a: number, b: number) => a + b,
// };
