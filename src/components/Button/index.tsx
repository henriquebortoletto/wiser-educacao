import * as S from "./styles";
import axios from "../../services/api";

export default function Button() {
  async function handleClick() {
    try {
      // const response = await axios.post("/wiser", {
      //   email: "bortolettohenrique@gmail.com",
      //   password: "1234567",
      // });
      const response = await axios.get("/wiser").then((response) => {
        console.log(response.data);
      });
      console.log(response);
    } catch (error) {
      alert("Erro ao tentar logar! Tente mais tarde");
    }
  }

  return <S.Button onClick={() => handleClick()}>Entrar</S.Button>;
}
