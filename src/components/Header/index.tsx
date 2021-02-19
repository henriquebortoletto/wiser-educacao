import * as S from "./styles";

interface HeaderProps {
	title: string;
	description: string;
}

const Header: React.FC<HeaderProps> = function ({ title, description }) {
	return (
		<>
			<S.Title>{title}</S.Title>
			<S.Description>{description}</S.Description>
		</>
	);
};

export default Header;
