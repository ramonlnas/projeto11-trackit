import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../components/Login/logo.png";



export default function Cadastro() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [password, setPassword] = useState("");

  function fazerCadastro() {
    const promise = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up", {
      email: email,
      name: name,
      image: image,
      password: password
    })

    promise.then((res) => {
      console.log(res)
      alert("Cadastro realizado!")
    })
    promise.catch((err) => alert(err.response.data))
  }

  return (
    <Conteiner>
      <img src={logo} alt="Logo" />
      <DivLogin>
        <form onSubmit={fazerCadastro}>
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
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="nome"
            required
          />
          <input
            type="url"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            placeholder="foto"
            required
          />
          <button type="submit">Cadastrar</button>
        </form>
      </DivLogin>
      <Link to={"/"}>
      <p>Já tem uma conta? Faça login!</p>
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
    font-size: 17px;
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
    border-radius: 4.7px;
    font-family: "Lexend Deca";
    font-size: 20.976px;
    line-height: 26px;
    text-align: center;
    color: #ffffff;
  }
`;
