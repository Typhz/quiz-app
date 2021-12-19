import React, { useState } from "react";
import { AppContainer } from "./styles";
import { useNavigate } from "react-router-dom";

export default function App() {
  const [name, setName] = useState();
  const navigate = useNavigate();
  function onSubmit(e) {
    localStorage.setItem("name", name);
    navigate("/difficulty");
    e.preventDefault();
  }
  return (
    <AppContainer>
      <h1>
        Seja <strong>bem vindo</strong>,<br />
        Digite seu nome para começar
      </h1>
      <form onSubmit={onSubmit}>
        <input
          placeholder="ex: Linus Torvalds"
          onChange={(e) => setName(e.target.value)}
        />
      </form>
    </AppContainer>
  );
}
