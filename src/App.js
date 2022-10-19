import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./components/GlobalStyle";
import Login from "./components/Login/Login";
import Cadastro from "./components/Cadastro";
import Habitos from "./components/Habitos";



export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro/>}/>
        <Route path="/habitos" element={<Habitos/>}/>
      </Routes>
    </BrowserRouter>
  );
}
