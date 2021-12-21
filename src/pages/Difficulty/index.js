import React, { useState } from "react";
import { AppContainer, Difficulty, Loading } from "./styles";
import getQuestion from "../../services/getQuestions";
import { useNavigate } from "react-router-dom";

function DifficultySelect() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  function DifficultySelect(difficulty) {
    (async (difficulty) => {
      setIsLoading(true);
      await getQuestion(difficulty);
      navigate("/quiz")
    })();
  }
  return (
    <AppContainer>
      {isLoading ? (
        <Loading>
          <div className="loader"></div>
          <h3>Carregando</h3>
        </Loading>
      ) : null}
      <h1>
        Selecione um nivel <br />
        de dificuldade
      </h1>
      <div className="list-difficulty">
        <Difficulty onClick={() => DifficultySelect("easy")} active>
          Fácil
        </Difficulty>
        <Difficulty onClick={() => DifficultySelect("medium")}>
          Médio
        </Difficulty>
        <Difficulty onClick={() => DifficultySelect("hard")}>
          Dificil
        </Difficulty>
      </div>
    </AppContainer>
  );
}

export default DifficultySelect;