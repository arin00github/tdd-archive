import { fireEvent, render, screen } from "@testing-library/react";
import { CreateUser, initialOptions } from "./CreateUser";
import { tddServer } from "../../msw/server";

beforeAll(() => {
  tddServer.listen();
});

afterAll(() => {
  tddServer.close();
});

describe("TEST: 유저생성 실패 테스트케이스", () => {
  it("CreateUser-003", async () => {
    const utils = render(<CreateUser options={initialOptions} />);
    const submitBtn = utils.getByTestId("submit-btn");
    fireEvent.click(submitBtn);
    expect(screen.getByText("모두 다 작성해 주세요")).toBeInTheDocument();
  });

  it("Error Message about Input", async () => {
    const utils = render(<CreateUser options={initialOptions} />);
    const submitBtn = utils.getByTestId("submit-btn");
    fireEvent.click(submitBtn);
    expect(screen.getByText("모두 다 작성해 주세요")).toBeInTheDocument();
  });
});
