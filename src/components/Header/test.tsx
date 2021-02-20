import { render, screen } from "@testing-library/react";

import Header from "./index";

describe("<Header />", () => {
	it("should render the title", () => {
		const { getByText, container } = render(
			<Header
				title="Olá, seja bem vindo!"
				description="Para acessar a plataforma, faça seu login."
			/>
		);
		expect(getByText("Olá, seja bem vindo!")).toBeVisible();
		expect(
			getByText("Para acessar a plataforma, faça seu login.")
		).toBeVisible();
		expect(container.firstChild).toMatchSnapshot();
	});
});
