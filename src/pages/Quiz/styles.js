import styled from "styled-components";
import colors from '../../styles/colors'
export const AppContainer = styled.div`
	color: ${colors.fg};
	min-height: 100vh;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	display: flex;
`;


export const QuizInfo = styled.div`
	background-color: ${colors.secondary};
	color: white;
	border-radius: 10rem;
	padding: 0.6rem 4rem;
	top: -15%;
	position: absolute
`

export const QuestionHeader = styled.div`
	background-color: white;
	width: 60%;
	height: 20vh;
	padding: 0 2rem;
	border-radius: 6px;
	justify-content: center;
	align-items: center;
	word-wrap: break-word;
	display: flex;
	position: relative;

`

export const Answers = styled.div`
	width: 60%;
	margin-top: 2%;
	min-height: auto;
	justify-content: center;
	grid-gap: 5%;
	grid-auto-rows: 100px;
	grid-template-columns: repeat(auto-fill, 47%);
	display: grid;

	div{
		background-color: white;
		margin: 1rem 0;
		border-radius: 6px;
		justify-content: center;
		align-items: center;
		display: flex;
		transition: 200ms;
	}
	div:hover{
		transform: scale(0.98);
	}

`