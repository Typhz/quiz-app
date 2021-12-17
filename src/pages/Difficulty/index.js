import React from "react";
import {AppContainer, Difficulty } from "./styles";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";

export default function App(){
  const navigate = useNavigate();
  async function DifficultySelect(difficulty){
    api.get('/questions', {
      params: {
        apiKey: "x5yYMkHgQ0xhz7Q7RD1CfTQESV5gXkBwlfcuNFed",
        difficulty: difficulty,
        limit: 10,
      }
    })
    .then(function (response) {
      // handle success
      localStorage.setItem("quiz",JSON.stringify(response));
      navigate('/quiz');
      console.log(response);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });  
  }
	return(
		<AppContainer>
			<h1>Selecione um nivel <br/>de dificuldade</h1>
      <div className="list-difficulty">
        <Difficulty onClick={() => DifficultySelect('easy')} active>Fácil</Difficulty>
        <Difficulty onClick={() => DifficultySelect('medium')} >Médio</Difficulty>
        <Difficulty onClick={() => DifficultySelect('hard')} >Dificil</Difficulty>
      </div>
		</AppContainer>
	);
}