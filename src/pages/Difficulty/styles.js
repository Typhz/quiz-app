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

export const Loading = styled.div`
  background-color: white;
  width: 70%;
  height: 60%;
  border-radius: 6px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  display: flex;
  position: absolute;
  .loader {
    width: 60px;
    height: 60px;
    border: 16px solid #f3f3f3;
    border-top: 16px solid ${colors.secondary};
    border-radius: 50%;
    animation: spin 2s linear infinite;
  }
  h3{
    margin: 1rem 0;
  }
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;