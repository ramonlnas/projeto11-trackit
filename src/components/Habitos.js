import { Header } from "../constants/footer&header";
import usuario from "../constants/bob.png";
import styled from "styled-components";

export default function Habitos() {
  return (
    <>
      <Header>
        <h1>TrackIt</h1>
        <img src={usuario} alt="Usuario" />
      </Header>
      <Corpo>
        <NovoHabito>
            <h1>Meus hábitos</h1>
            <ion-icon name="add-circle-outline"></ion-icon>
        </NovoHabito>
      </Corpo>
    </>
  );
}

const Corpo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 70px 19px 70px 18px;
`;
const NovoHabito = styled.div`
  width: 330px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 28px;

  h1 {
    font-family: "Lexend Deca";
    font-size: 22.976px;
    line-height: 29px;
    color: #126ba5;
  }
`;
