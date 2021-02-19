import { render, screen } from "@testing-library/react";

import Background from ".";

describe("<Background />", () => {
  it("should render the background image", () => {
    const { container } = render(<Background />);
    expect(container.firstChild).toHaveStyle(
      `background-image: url(/img/imagem.jpg)`
    );
  });
});
