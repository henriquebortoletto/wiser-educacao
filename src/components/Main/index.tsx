import * as S from "./styles";

import Background from "components/Background";
import Header from "components/Header";
import GroupInput from "components/Input";
import Button from "components/Button";

export default function Main() {
  return (
    <S.Wrapper>
      <Background />
      <S.FormWrapper>
        <S.formContainer>
          <Header />
          <GroupInput />
          <Button />
          <S.ResetPassword>
            Esqueceu seu login ou senha? <br />
            Clique <a href="#">aqui</a>
          </S.ResetPassword>
        </S.formContainer>
      </S.FormWrapper>
    </S.Wrapper>
  );
}
