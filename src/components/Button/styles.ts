import styled from "styled-components";

export const Button = styled.button`
	font-size: 16px;
	font-weight: 600;
	text-transform: uppercase;
	background: none;
	border: none;
	background-image: linear-gradient(to right, #383e71, #9d25b0);
	border-radius: 8px;
	color: #fff;
	width: 256px;
	height: 48px;
	cursor: pointer;
	outline: 0;
	box-shadow: 0px 10px 25px #cf99db;
	@media (max-width: 650px) {
		width: 168px;
		position: relative;
		top: calc(-48px / 2);
		left: calc(50% - 84px);
		box-shadow: none;
	}
`;
