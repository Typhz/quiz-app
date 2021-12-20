import React, { useState } from "react";
import { AppContainer } from "./styles";
import { useNavigate } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
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
          required
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">
          <FiArrowRight/>
        </button>
      </form>
    </AppContainer>
  );
}
