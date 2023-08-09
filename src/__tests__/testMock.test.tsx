// const add = (a: number, b: number) => {
//   return a + b;
// };

// const mockAdd = jest.fn(add);

// test("test jest.fn()", () => {
//   expect(mockAdd(2, 5)).toEqual(7);
//   mockAdd.mockReturnValue(10);
//   expect(mockAdd(2, 5)).toEqual(10);
//   //expect(mockAdd(5, 7)).toEqual(12); //Failure. Value is 10.
//   mockAdd.mockReset();
//   expect(mockAdd(2, 5)).toEqual(7);
// });

const mockAddUtils = jest.fn();
const mockUtils = jest.mock("../utils/addUtils.ts", () => ({
  addUtils: mockAddUtils,
}));

test("test jest.fn()", () => {
  expect(mockAddUtils(2, 5)).toBeUndefined();
  mockAddUtils.mockReturnValue(10);
  expect(mockAddUtils(2, 5)).toEqual(10);
  //expect(mockAdd(5, 7)).toEqual(12); //Failure. Value is 10.
  mockAddUtils.mockReset();
  expect(mockAddUtils(2, 5)).toBeUndefined();
  expect(mockAddUtils).toBeCalled();
});
