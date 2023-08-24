import { fireEvent, render, screen } from "@testing-library/react";
import { CreateUser, initialOptions } from "./CreateUser";
import { tddServer } from "../../msw/server";

beforeAll(() => {
  tddServer.listen();
});

afterAll(() => {
  tddServer.close();
});

describe("TEST: 유저생성 성공 테스트케이스", () => {
  it("CreateUser-009", async () => {
    const utils = render(<CreateUser options={initialOptions} />);
    const inputName = utils.getByTestId("creatuser-input-name");
    const groupSelect = utils.getByTestId(
      "create-select-group"
    ) as HTMLSelectElement;

    fireEvent.change(inputName, { target: { value: "LeeYunseo" } });
    fireEvent.change(groupSelect, { target: { value: "TMS-group" } });

    expect(inputName.getAttribute("value")).toBe("LeeYunseo");
    expect(groupSelect.value).toBe("TMS-group");
    //expect(inputName.getAttribute("value")).toMatch(/^[A-Za-z]{1,20}$/);
  });
});
