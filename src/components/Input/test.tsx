import { render, screen } from "@testing-library/react";

import GroupInput from ".";

describe("<GroupInput />", () => {
	it("should render the heading", () => {
		const { container } = render(<GroupInput />);
		expect(
			screen.getByRole("heading", { name: /Olá, seja bem vindo!/i })
		).toBeInTheDocument();
		expect(container.firstChild).toMatchSnapshot();
	});
});
