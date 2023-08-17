import { render, screen, fireEvent, waitFor } from "@testing-library/react";

import { Sample1 } from "./Sample1";

test("OFF button is enable initially", () => {
  render(<Sample1 />);
  const button = screen.getByRole("button");
  expect(button).toHaveTextContent("OFF");
  expect(button).toBeEnabled();
});

test("button is disabled once clicked (fail)", () => {
  render(<Sample1 />);
  const button = screen.getByRole("button");
  fireEvent.click(button);
  expect(screen.getByRole("button")).toBeDisabled(); //diabled가 true로 처음 바뀐값을 감지하지 못함.
});

test("ON button is enabled when clicked ", async () => {
  render(<Sample1 />);
  fireEvent.click(screen.getByRole("button"));
  const button = await waitFor(() =>
    screen.getByRole("button", {
      name: /on/i,
    })
  );
  expect(button).toBeInTheDocument();
  expect(button).toBeEnabled();
});

test("ON button is enabled when clicked", async () => {
  render(<Sample1 />);

  fireEvent.click(screen.getByRole("button"));
  const button = await screen.findByRole("button", {
    name: /ON/i,
  });

  expect(button).toBeInTheDocument();
  expect(button).toBeEnabled();
});
