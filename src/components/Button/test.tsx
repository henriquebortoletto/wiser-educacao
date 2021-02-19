import { render, screen } from "@testing-library/react";

import Button from ".";

// describe("<Main />", () => {
//   it("should render the heading", () => {
//     const { container } = render(<Main />);
//     expect(
//       screen.getByRole("heading", { name: /react avançado/i })
//     ).toBeInTheDocument();
//     expect(container.firstChild).toMatchSnapshot();
//   });
// });

describe("<Button />", () => {
  it("should render text", () => {
    const { container } = render(<Button />);
    expect(
      screen.getByRole("heading", { name: /Entrar/i })
    ).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });
});
