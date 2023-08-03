import { MarkDownWrapper } from "../../components/common";

const markdown = `

# Here is some JavaScript code

\`\`\`typescript
import { fireEvent, render, screen } from "@testing-library/react";
import { CreateUser2, initialOptions } from "./CreateUser2";

describe("Create User Component", () => {
  // options의 초기값 체크
  it("Check Initial Options", async () => {
    expect(initialOptions).toHaveLength(3);
    const newOptionArray = initialOptions.map((opt) => opt.label);
    expect(newOptionArray).toContain("TMS개발");
    expect(newOptionArray).not.toContain("DMS개발");
  });

  it("Input Component Rendering & Change Value", async () => {
    const utils = render(<CreateUser2 options={initialOptions} />);
    const inputName = utils.getByTestId("creatuser-input-name-2");
    expect(inputName).toBeInTheDocument();
    fireEvent.change(inputName, { target: { value: "LeeYunseo" } });
    expect(inputName.getAttribute("value")).toBe("LeeYunseo");
  });

  it("Select Component Rendering & Change Value", async () => {
    const utils = render(<CreateUser2 options={initialOptions} />);
    const groupSelect = utils.getByTestId(
      "create-select-group-2"
    ) as HTMLSelectElement;
    expect(groupSelect).toBeInTheDocument();
    fireEvent.change(groupSelect, { target: { value: "TMS-group" } });
    expect(groupSelect.value).toBe("TMS-group");
    expect(groupSelect.childNodes.length).toEqual(initialOptions.length + 1);
  });

  it("Error Message about Input", async () => {
    const utils = render(<CreateUser2 options={initialOptions} />);
    const submitBtn = utils.getByTestId("submit-btn");
    fireEvent.click(submitBtn);
    expect(screen.getByText("모두 다 작성해 주세요")).toBeInTheDocument();
  });
});
\`\`\`


`;

export const CodeDescription = () => {
  return <MarkDownWrapper>{markdown}</MarkDownWrapper>;
};
