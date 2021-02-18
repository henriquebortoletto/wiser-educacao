import styled from "styled-components";

export const Wrapper = styled.main`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media (max-width: 568px) {
    grid-template-columns: 1fr;
  }
`;
export const Background = styled.section`
  background-image: url(/img/imagem.jpg);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 100%;
  position: relative;
  grid-column: 1/2;

  @media (max-width: 568px) {
    grid-column: auto;
  }
`;
export const BackgroundOverlay = styled.div`
  background-image: linear-gradient(to top, #130525, rgba(105, 57, 153, 0));
  display: block;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
`;
export const FormWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  grid-column: 2/3;
  padding: 20rem;

  @media (max-width: 568px) {
    grid-column: auto;
  }
`;
export const Title = styled.h1`
  font-size: 40px;
  font-weight: 400;
  line-height: 48px;
  color: #383e71;
  margin-bottom: 16px;
`;
export const Description = styled.p`
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
  color: #989fdb;
  margin-bottom: 60px;
`;
export const FormGroup = styled.div`
  margin-bottom: 30px;
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
`;
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
`;
export const ResetPassword = styled.p`
  font-size: 14px;
  font-weight: 600;
  text-align: center;
  line-height: 20px;
  color: #989fdb;
  max-width: 50%;
  margin-top: 30px;
`;
