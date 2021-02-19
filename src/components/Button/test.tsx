import { render, screen } from "@testing-library/react";

import Button from ".";

describe("<Button />", () => {
  it("should render text", () => {
    const { container } = render(<Button />);
    expect(screen.getByRole("heading", { name: /Entrar/i })).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });
});
