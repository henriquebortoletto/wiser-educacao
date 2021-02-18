import * as S from "./styles";

const Main = () => (
  <S.Wrapper>
    <S.Background>
      <S.BackgroundOverlay />
    </S.Background>
    <S.FormWrapper>
      <S.Title>
        Olá, seja
        <br /> bem vindo!
      </S.Title>
      <S.Description>
        Para acessar a plataforma,
        <br /> faça seu login.
      </S.Description>
      <S.FormGroup>
        <S.Label>E-mail</S.Label>
        <S.Input placeholder="user.name@mail.com" />
      </S.FormGroup>
      <S.FormGroup>
        <S.Label>Senha</S.Label>
        <S.Input placeholder="*******" />
      </S.FormGroup>
      <S.Button
        onClick={() => {
          console.log("clicando");
        }}
      >
        Entrar
      </S.Button>
      <S.ResetPassword>
        Esqueceu seu login ou senha? <br />
        Clique <a href="#">aqui</a>
      </S.ResetPassword>
    </S.FormWrapper>
  </S.Wrapper>
);

export default Main;
