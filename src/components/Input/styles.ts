import styled from "styled-components";

export const FormGroup = styled.div`
	margin-bottom: 5px;
`;
export const Label = styled.label`
	font-size: 10px;
	font-weight: 400;
	text-transform: uppercase;
	color: #383e71;
	display: block;
	margin-bottom: 5px;
`;
export const Input = styled.input`
	width: 256px;
	padding: 17px;
	border: none;
	border: 1px solid #989fdb;
	background-color: #faf5ff;
	border-radius: 8px;
	outline: 0;
	::placeholder {
		font-size: 10px;
		font-weight: 400;
		color: #989fdb;
	}
	:focus {
		border-color: #9d25b0;
	}
	@media (max-width: 650px) {
		width: 100%;
	}
`;
