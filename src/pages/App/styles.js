import styled from "styled-components";
import colors from '../../styles/colors'
export const AppContainer = styled.div`
	min-height: 100vh;
	font-size: 1.5rem;

	padding: 0 12rem;
	flex-direction: column;
	justify-content: center;
	display: flex;
	strong{
		color: ${colors.secondary};
	}
	input{
		width: 30%;
		height: 3rem;
		border: 1px solid gray;
		border-radius: 6px;
		padding: 0 0.8rem;
		margin: 1rem 0;
	}
`;

