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
export const FormContainer = styled.div`
	max-width: 256px;
	height: 100%;
	margin-left: 110px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	border-radius: 8px;

	@media (max-width: 992px) {
		margin-left: 40px;
	}
	@media (max-width: 650px) {
		height: auto;
		max-width: 311px;
		margin-left: auto;
		margin-right: auto;
	}
`;
export const ContainerResponsive = styled.div`
	background: #faf5ff;
	@media (max-width: 650px) {
		padding: 28px 28px 50px;
		border-radius: 8px;
	}
`;
export const ResetPassword = styled.p`
	font-size: 14px;
	font-weight: 600;
	text-align: center;
	line-height: 20px;
	color: #989fdb;
	margin-top: 30px;
	@media (max-width: 650px) {
		font-weight: 400;
		color: #fff;
		margin-top: 24px;
		a {
			color: #fff;
		}
	}
`;
export const WrapperMessage = styled.div`
	margin-bottom: 30px;
`;
export const Error = styled.div`
	color: #df2935;
`;
export const ErrorAuth = styled.div`
	margin-bottom: 30px;
	text-align: center;
	color: #df2935;
`;
export const SuccessAuth = styled.div`
	margin-bottom: 30px;
	text-align: center;
	color: #7bae7f;
`;
