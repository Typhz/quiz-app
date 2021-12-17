import styled from "styled-components";
import colors from '../../styles/colors'
export const AppContainer = styled.div`
	min-height: 100vh;
  text-align: center;
	flex-direction: column;
  align-items: center;
	justify-content: center;
	display: flex;
  .list-difficulty{
    min-width: 15%;
    flex-direction: row;
    justify-content: center;
    display: flex;
  }
`;

export const Difficulty = styled.button`
    background-color: white;
    width: 100%;
    border: ${(props) => props.active ? `2px solid ${colors.secondary}` : 'none'};
    border-radius: 6px;
    padding: 1rem 2rem;
    margin: 1rem 0.4rem;
`