import * as S from "./styles";

export default function GroupInput() {
  return (
    <>
      <S.FormGroup>
        <S.Label>E-mail</S.Label>
        <S.Input placeholder="user.name@mail.com" />
      </S.FormGroup>
      <S.FormGroup>
        <S.Label>Senha</S.Label>
        <S.Input placeholder="*******" />
      </S.FormGroup>
    </>
  );
}
