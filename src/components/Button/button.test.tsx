import { render, screen } from "@testing-library/react";
import { Button } from "./index";

const buttonText = "Кнопка";

test("render with label", async () => {
  render(<Button>{buttonText}</Button>);
  expect(screen.getByText(buttonText)).toBeInTheDocument();
});
