import { fireEvent, render, screen } from "@testing-library/react";
import { CreateUser, initialOptions } from "./CreateUser";
import { tddServer } from "../../msw/server";

beforeAll(() => {
  tddServer.listen();
});

afterAll(() => {
  tddServer.close();
});

describe("Create User Component", () => {
  it("Input Component Rendering & Change Value", async () => {
    const utils = render(<CreateUser options={initialOptions} />);
    const inputName = utils.getByTestId("creatuser-input-name");

    expect(inputName).toBeInTheDocument();

    fireEvent.change(inputName, { target: { value: "LeeYunseo" } });

    expect(inputName.getAttribute("value")).toBe("LeeYunseo");
    expect(inputName.getAttribute("value")).toMatch(/^[A-Za-z]{1,20}$/);
  });

  it("Select Component Rendering & Change Value", async () => {
    const utils = render(<CreateUser options={initialOptions} />);
    const groupSelect = utils.getByTestId(
      "create-select-group"
    ) as HTMLSelectElement;
    expect(groupSelect).toBeInTheDocument();
    fireEvent.change(groupSelect, { target: { value: "TMS-group" } });
    expect(groupSelect.value).toBe("TMS-group");
    expect(groupSelect.childNodes.length).toEqual(initialOptions.length + 1);
  });

  it("Error Message about Input", async () => {
    const utils = render(<CreateUser options={initialOptions} />);
    const submitBtn = utils.getByTestId("submit-btn");
    fireEvent.click(submitBtn);
    expect(screen.getByText("모두 다 작성해 주세요")).toBeInTheDocument();
  });

  // options의 초기값 체크
  it("Check Initial Options", async () => {
    expect(initialOptions).toHaveLength(3);
    const newOptionArray = initialOptions.map((opt) => opt.label);
    expect(newOptionArray).toContain("TMS개발");
    expect(newOptionArray).not.toContain("DMS개발");
  });
});
