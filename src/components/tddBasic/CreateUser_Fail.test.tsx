import { fireEvent, render, screen } from "@testing-library/react";
import { CreateUser, initialOptions } from "./CreateUser";
import { tddServer } from "../../msw/server";

beforeAll(() => {
  tddServer.listen();
});

afterAll(() => {
  tddServer.close();
});
const setup = () => {
  const renderObject = render(<CreateUser options={initialOptions} />);
  const inputName = renderObject.getByTestId("creatuser-input-name");
  const selectGroup = renderObject.getByTestId(
    "create-select-group"
  ) as HTMLSelectElement;
  const submitBtn = renderObject.getByTestId("submit-btn");
  const resetBtn = renderObject.getByTestId("reset-btn");
  return { inputName, selectGroup, submitBtn, resetBtn };
};

describe("TEST: 유저생성 실패 테스트케이스", () => {
  it("CreateUser-003", async () => {
    const { submitBtn, resetBtn } = setup();
    fireEvent.click(submitBtn);
    expect(screen.getByText("모두 다 작성해 주세요")).toBeInTheDocument();
    fireEvent.click(resetBtn);
  });

  it("CreateUser-006", async () => {
    const { submitBtn, inputName } = setup();
    fireEvent.change(inputName, { target: { value: "Leejin" } });
    fireEvent.click(submitBtn);
    expect(screen.getByTestId("error-message")).toHaveTextContent(
      "모두 다 작성해 주세요"
    );
  });

  it("CreateUser-007", async () => {
    const { submitBtn, selectGroup } = setup();
    fireEvent.change(selectGroup, { target: { value: "TMS-group" } });
    fireEvent.click(submitBtn);
    expect(screen.getByTestId("error-message")).toHaveTextContent(
      "모두 다 작성해 주세요"
    );
  });

  it("CreateUser-004", async () => {
    const { submitBtn, selectGroup, inputName } = setup();
    fireEvent.change(inputName, { target: { value: "홍길동" } });
    fireEvent.change(selectGroup, { target: { value: "TMS-group" } });
    fireEvent.click(submitBtn);
    expect(
      screen.getByText("이름은 영문 20자 이내만 가능합니다")
    ).toBeInTheDocument();
  });

  it("CreateUser-005", async () => {
    const { submitBtn, selectGroup, inputName } = setup();
    fireEvent.change(inputName, { target: { value: "jane1294" } });
    fireEvent.change(selectGroup, { target: { value: "TMS-group" } });
    fireEvent.click(submitBtn);
    expect(
      screen.getByText("이름은 영문 20자 이내만 가능합니다")
    ).toBeInTheDocument();
  });
});
