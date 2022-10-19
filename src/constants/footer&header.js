import styled from "styled-components";

export const Header = styled.div`
  width: 375px;
  height: 70px;
  position: fixed;
  top: 0;
  left: 0;
  background: #126ba5;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    font-family: "Playball";
    font-size: 38.982px;
    line-height: 49px;
    color: #ffffff;
    margin-left:18px;
  }

  img {
    width: 51px;
    height: 51px;
    border-radius: 98.5px;
    margin-right: 18px;
  }
`;

export const Footer = styled.div `
width: 375px;
height: 70px;
display: flex;
justify-content: space-around;
`
