import { render } from "@testing-library/react";
import { FixedSubTitle } from "./SubTitle";

test("Fixed Subtitle", () => {
  const renderContainer = render(<FixedSubTitle />);
  const title = renderContainer.getByTestId("fixed-title");
  expect(title).toBeInTheDocument();
});
