import { act, fireEvent, screen, waitFor } from "@testing-library/react";
import ReactDOM from "react-dom/client";
import { CreateUser, initialOptions } from "./CreateUser";

let container: HTMLDivElement;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container.innerHTML = "";
});

describe("Create User Component", () => {
  // options의 초기값 체크
  it("Check Initial Options", async () => {
    expect(initialOptions).toHaveLength(3);
    const newOptionArray = initialOptions.map((opt) => opt.label);
    expect(newOptionArray).toContain("TMS개발");
    expect(newOptionArray).not.toContain("DMS개발");
  });

  it("Input Component Rendering & Change Value", async () => {
    act(() => {
      ReactDOM.createRoot(container).render(
        <CreateUser options={initialOptions} />
      );
    });

    const inputName = screen.getByTestId("creatuser-input-name");

    expect(inputName).toBeInTheDocument();

    act(() => {
      // inputName.dispatchEvent(new MouseEvent('click', ))
      fireEvent.change(inputName, { target: { value: "LeeYunseo" } });
    });

    await waitFor(() => {
      expect(inputName.getAttribute("value")).toBe("LeeYunseo");
    });
  });

  it("Select Component Rendering & Change Value", async () => {
    act(() => {
      ReactDOM.createRoot(container).render(
        <CreateUser options={initialOptions} />
      );
    });

    const groupSelect = screen.getByTestId(
      "create-select-group"
    ) as HTMLSelectElement;

    expect(groupSelect).toBeInTheDocument();

    act(() => {
      fireEvent.change(groupSelect, { target: { value: "TMS-group" } });
    });

    expect(groupSelect.value).toBe("TMS-group");
    expect(groupSelect.childNodes.length).toEqual(initialOptions.length);
  });

  it("Error Message about Input", async () => {
    act(() => {
      ReactDOM.createRoot(container).render(
        <CreateUser options={initialOptions} />
      );
    });
    const submitBtn = screen.getByTestId("submit-btn");

    act(() => fireEvent.click(submitBtn));

    await waitFor(() => {
      expect(screen.getByText("Please input your name")).toBeInTheDocument();
    });
  });
});
