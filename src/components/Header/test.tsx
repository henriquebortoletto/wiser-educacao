import { render, screen } from "@testing-library/react";

import Header from ".";

describe("<Header />", () => {
  it("should render the heading", () => {
    const { container } = render(<Header />);
    expect(
      screen.getByRole("heading", { name: /Olá, seja bem vindo!/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        name: /Para acessar a plataforma, faça seu login./i,
      })
    ).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });
});
