import { fireEvent, render } from "@testing-library/react";
import { UserForm } from "./UserForm";

const testEachParams = [
  ["userform-user-id", "otter0104", /^[a-z][a-z0-9_]{0,19}$/],
  ["test-user-name", "멍멍이귀여워", /^[a-zA-Z0-9ㄱ-ㅎㅏ-ㅣ가-힣\s_]{0,19}$/],
];

test.each(testEachParams)("initial render", (first, second, third) => {
  const utils = render(<UserForm />);
  const inputUserId = utils.getByTestId(first);
  fireEvent.change(inputUserId, {
    target: { value: second },
  });
  expect(inputUserId.getAttribute("value")).toMatch(third);
});
