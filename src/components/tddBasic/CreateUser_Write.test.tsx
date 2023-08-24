import { fireEvent, render } from "@testing-library/react";
import { CreateUser, initialOptions } from "./CreateUser";
import { tddServer } from "../../msw/server";

beforeAll(() => {
  tddServer.listen();
});

afterAll(() => {
  tddServer.close();
});

describe("TEST: 유저생성 입력 테스트케이스", () => {
  it("CreateUser-001", async () => {
    const utils = render(<CreateUser options={initialOptions} />);
    const inputName = utils.getByTestId("creatuser-input-name");

    expect(inputName).toBeInTheDocument();

    fireEvent.change(inputName, { target: { value: "LeeYunseo" } });

    expect(inputName.getAttribute("value")).toBe("LeeYunseo");
  });

  it("CreateUser-002", async () => {
    const utils = render(<CreateUser options={initialOptions} />);
    const groupSelect = utils.getByTestId(
      "create-select-group"
    ) as HTMLSelectElement;
    expect(groupSelect).toBeInTheDocument();
    fireEvent.change(groupSelect, { target: { value: "TMS-group" } });
    expect(groupSelect.value).toBe("TMS-group");
  });
});
