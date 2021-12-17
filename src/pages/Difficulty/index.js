import React from "react";
import {AppContainer, Difficulty } from "./styles";

export default function App(){
	return(
		<AppContainer>
			<h1>Selecione um nivel <br/>de dificuldade</h1>
      <div className="list-difficulty">
        <Difficulty active>Fácil</Difficulty>
        <Difficulty>Médio</Difficulty>
        <Difficulty>Dificil</Difficulty>
      </div>
		</AppContainer>
	);
}