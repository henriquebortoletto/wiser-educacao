import styled from "styled-components";

export const Wrapper = styled.main`
	width: 100%;
	height: 100%;
	display: grid;
	grid-template-columns: repeat(2, 1fr);

	@media (max-width: 650px) {
		grid-template-columns: 1fr;
	}
`;
export const FormWrapper = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 100%;
	height: 100%;
	grid-column: 2/3;

	@media (max-width: 650px) {
		grid-column: auto;
	}
`;
export const formContainer = styled.div`
	max-width: 256px;
	height: 100%;
	margin-left: 110px;
	display: flex;
	flex-direction: column;
	justify-content: center;

	@media (max-width: 992px) {
		margin-left: 40px;
	}
	@media (max-width: 650px) {
		height: auto;
		max-width: 335px;
		background: #faf5ff;
		padding: 4rem;
		margin-left: auto;
		margin-right: auto;
	}
`;
export const ResetPassword = styled.p`
	font-size: 14px;
	font-weight: 600;
	text-align: center;
	line-height: 20px;
	color: #989fdb;
	margin-top: 30px;
`;
export const wrapperMessage = styled.div`
	margin-bottom: 30px;
`;
export const error = styled.div`
	color: red;
`;
