import { Header, Footer } from "../constants/footer&header";
import usuario from "../constants/bob.png";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useState } from "react";
import styled from "styled-components";

export default function Habitos() {
  const [texto, setTexto] = useState("");
  const [cor, setCor] = useState("#ffffff");
  const [frequencia, setFrequencia] = useState([])

  const calendar = [
    { id: 0, dia: "D", selecionado: false },
    { id: 1, dia: "S", selecionado: false },
    { id: 2, dia: "T", selecionado: false },
    { id: 3, dia: "Q", selecionado: false },
    { id: 4, dia: "Q", selecionado: false },
    { id: 5, dia: "S", selecionado: false },
    { id: 6, dia: "S", selecionado: false },
  ];

  const [calendario, setCalendario] = useState(calendar);

  function selecionaDia(id) {
    const selecionarD = calendario.map((day) => {
      if(day.id === id) {
        day.selecionado = !day.selecionado
      } 
      return day      
    })
    setCalendario([...calendario]);

  }

  return (
    <>
      <Header>
        <h1>TrackIt</h1>
        <img src={usuario} alt="Usuario" />
      </Header>
      <Corpo>
        <NovoHabito>
          <h1>Meus hábitos</h1>
          <button>+</button>
        </NovoHabito>
        <Calendario>
          <form>
            <input
              type="text"
              placeholder="nome do hábito"
              value={texto}
              onChange={(e) => setTexto(e.target.value)}
              
            ></input>
            <DivSemana>
              {calendario.map((day) => {
                const { id, dia, selecionado } = day;
                return (
                  <Semana
                    key={id}
                    selecionado={selecionado}
                    onClick={() => selecionaDia(id)}
                  >
                    <button>{dia}</button>
                  </Semana>
                );
              })}
            </DivSemana>

            <DivBotoes>
              <p>Cancelar</p>
              <button>Salvar</button>
            </DivBotoes>
          </form>
        </Calendario>
      </Corpo>
      <Footer>
        <p>Hábitos</p>
        <div style={{ width: 91, height: 91 }}>
          <CircularProgressbar
            text="Hoje"
            value={66}
            background={true}
            styles={buildStyles({
              backgroundColor: "#52B6FF",
              textColor: "#ffffff",
              pathColor: "#ffffff",
              trailColor: "transparent",
              textSize: "18px",
            })}
          />
        </div>
        <p>Histórico</p>
      </Footer>
    </>
  );
}

const Corpo = styled.div`
  width: 375px;
  height: 527px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 70px 19px 70px 0px;
  padding: 0px 18px 0px 18px;
  background-color: #e5e5e5;
`;
const NovoHabito = styled.div`
  width: 100%;
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
  button {
    width: 35px;
    height: 35px;
    font-family: "Lexend Deca";
    font-size: 26.976px;
    line-height: 34px;
    color: #ffffff;
    background: #52b6ff;
    border-radius: 6px;
  }
`;

const Calendario = styled.div`
  width: 340px;
  height: 180px;
  background: #ffffff;
  border-radius: 5px;
  margin-top: 20px;
  padding: 18px 18px 0px 18px;

  input {
    width: 303px;
    height: 45px;
    background: #ffffff;
    border: 1px solid #d5d5d5;
    border-radius: 5px;
    padding: 9px 0px 11px 11px;
    font-family: "Lexend Deca";
    font-size: 19.976px;
    line-height: 25px;
    margin-bottom: 8px;
  }
`;

const DivSemana = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 238px;
`;

const Semana = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 8px;
  margin-bottom: 25px;

  button {
    width: 30px;
    height: 30px;
    background-color: ${props => props.selecionado ? "#CFCFCF;" : "#FFFFFF"};
    border: 1px solid #d5d5d5;
    border-radius: 5px;
    margin-right: 4px;
  }
`;

const DivBotoes = styled.div`
  display: flex;
  justify-content: flex-end;

  p {
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 15.976px;
    line-height: 20px;
    text-align: center;
    color: #52b6ff;
    margin-right: 23px;
  }

  button {
    width: 84px;
    height: 35px;
    background: #52b6ff;
    border-radius: 5px;
    font-family: "Lexend Deca";
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    color: #ffffff;
  }
`;
