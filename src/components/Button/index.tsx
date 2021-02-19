import * as S from "./styles";

interface ButtonProps {
	type: "submit";
	label: string;
}

const Button: React.FC<ButtonProps> = function ({ label, type, ...rest }) {
	return (
		<S.Button type={type} {...rest}>
			{label}
		</S.Button>
	);
};

export default Button;
