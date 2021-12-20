import styled from "styled-components";
import colors from '../../styles/colors'
export const AppContainer = styled.div`
	min-height: 100vh;
	font-size: 1.5rem;
	padding: 0 2rem;
	flex-direction: column;
	justify-content: center;
	display: flex;
	strong{
		color: ${colors.secondary};
	}
	input{
		min-width: 30%;
		height: 3rem;
		border: 1px solid gray;
		border-radius: 6px;
		padding: 0 0.8rem;
		margin: 1rem 0;
	}
	input:focus{
		outline: none;
		border: 2px solid ${colors.secondary}
	}
	button{
		background: ${colors.secondary};
		color: white;
		min-width: 3rem;
		height: 3rem;
		margin-left: 1%;
		border: none;
		border-radius: 6px;
	}
`;

