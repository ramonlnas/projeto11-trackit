import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../Login/logo.png";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  function fazerLogin(event) {
    event.preventDefault()
    const promise = axios.post(
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login",
      {
        email: email,
        password: password,
      }
    );

    promise.then((res) => {
      console.log(res.data)
      alert("Login realizado com sucesso!");
    });
    promise.catch((err) => alert("Algo deu errado, tente novamente"));
  }

  return (
    <Conteiner>
      <img src={logo} alt="Logo" />
      <DivLogin>
        <form onSubmit={fazerLogin}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="senha"
            required 
          />
          <button type="submit">
            Entrar
          </button>
        </form>
      </DivLogin>
      <Link to={"/cadastro"}>
        <p>Não tem uma conta? Cadastre-se!</p>
      </Link>
    </Conteiner>
  );
}

const Conteiner = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 180px;
    height: 178.38px;
    margin-top: 68px;
  }
  p {
    font-family: "Lexend Deca";
    font-size: 13.976px;
    line-height: 17px;
    text-align: center;
    text-decoration-line: underline;
    color: #52b6ff;
    margin-top: 25px;
  }
`;
const DivLogin = styled.div`
  max-width: 303px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  input {
    width: 303px;
    height: 45px;
    background: #ffffff;
    border: 1px solid #d5d5d5;
    border-radius: 5px;
    margin-bottom: 8px;
  }

  button {
    width: 310px;
    height: 45px;
    background: #52b6ff;
    border-radius: 4.8px;
    font-family: "Lexend Deca";
    font-size: 20.976px;
    line-height: 26px;
    text-align: center;
    color: #ffffff;
  }
`;
