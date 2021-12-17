import React from "react";
import { AppContainer } from "./styles";
export default function App(){
	return(
		<AppContainer>
			<h1>Seja <strong>bem vindo</strong>,<br/>Digite seu nome para começar</h1>
			<form>
			<input placeholder="ex: Linus Torvalds"/>
			</form>
		</AppContainer>
	);
	
}