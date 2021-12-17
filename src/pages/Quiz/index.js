import React from "react";
import {AppContainer, QuizInfo, QuestionHeader, Answers } from "./styles";
export default function App(){
  const name = localStorage.getItem("name");
	return(
		<AppContainer>
			<QuestionHeader>
			<QuizInfo>
				<strong>{name}</strong>
				<span> 1 de 10</span>
			</QuizInfo>
				<h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut atque beatae possimus, vero assumenda quia. Illum modi officia rerum ipsum dolorem tempore eaque atque reiciendis dolor veniam quidem, expedita esse?</h4>
			</QuestionHeader>
			<Answers>
        <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</div>
			</Answers>
		</AppContainer>
	);
	
}