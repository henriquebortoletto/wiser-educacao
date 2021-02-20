import { render } from "@testing-library/react";

import Button from "./index";

describe("<Button />", () => {
	it("should render text", () => {
		const { container } = render(<Button type="submit" label="entrar" />);
		expect(container.firstChild).toMatchSnapshot();
	});
});
