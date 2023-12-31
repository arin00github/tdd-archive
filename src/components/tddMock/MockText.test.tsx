import { render, screen } from "@testing-library/react";
import { MockText } from "./MockText";
import { addUtils } from "../../utils/addUtils";

/** //SUCCESS 성공 코드
 * 컴포넌트 안에 사용한 함수를 직접 테스트코드 파일에 import
 */
// jest.mock("../../utils/addUtils.ts", () => ({
//   addUtils: jest.fn().mockReturnValue(8), //여기서 return 값까지 설정해야 한다.
// }));

// test("Component Test", () => {
//   render(<MockText />);
//   //expect(screen.getByTestId("mock-text")).toBeInTheDocument();
//   expect(screen.getByTestId("mock-text").textContent).toBe("8");
//   expect(addUtils).toHaveBeenCalled();
//   expect(addUtils).toHaveBeenCalledWith(3, 6);
//   //   screen.debug();
// });

/** //FAIL 실패 코드
 *
 */
// const mockAddUtils = jest.fn();
// jest.mock("../../utils/addUtils.ts", () => ({
//   addUtils: mockAddUtils,
// }));

// test("Component Test", () => {
//   mockAddUtils.mockReturnValue(8);
//   //여기서 부른 mockAddUtils는 컴포넌트 안의 addUtils와 아무 관련이 없음.
//   //위에 jest.mock부분에서 addUtils: mockAddUtils는 addUtils: jest.fn() 만 의미할 뿐.
//   render(<MockText />);
//   expect(screen.getByTestId("mock-text").textContent).toBe("9");
//   expect(addUtils).toHaveBeenCalled();
//   expect(addUtils).toHaveBeenCalledWith(3, 6);
// });

/** //FAIL 실패 코드
 *
 */

// test("Component Test", () => {
//   render(<MockText />);
//   expect(screen.getByTestId("mock-text").textContent).toBe("9"); // 여기까지는 통과.
//   expect(addUtils).toHaveBeenCalled();
//   //expect안에 들어갈 수 있는 함수는 모킹되어 있거나, spyOn 되어 있는 함수만 가능하다.
//   expect(addUtils).toHaveBeenCalledWith(3, 6);
// });

/** //FAIL 실패 코드
 * mockImplementation 방법을 활용
 */
jest.mock("../../utils/addUtils.ts", () => ({
  addUtils: jest.fn(), //여기서 return 값까지 설정해야 한다.
}));

test("Component Test", () => {
  (addUtils as jest.Mock).mockImplementation((a, b) => a * b);
  render(<MockText />);
  //expect(screen.getByTestId("mock-text")).toBeInTheDocument();
  expect(screen.getByTestId("mock-text").textContent).toBe("8");
  expect(addUtils).toHaveBeenCalled();
  expect(addUtils).toHaveBeenCalledWith(3, 6);
  //   screen.debug();
});
