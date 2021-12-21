import styled from "styled-components";
import colors from "../../styles/colors";
export const AppContainer = styled.section`
  height: 90vh;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  display: flex;
  progress {
    border: none;
    width: 100%;
    height: 6px;
    left: 0;
    top: 0;
    position: absolute;
  }
  progress::-webkit-progress-bar {
    background-color: transparent;
  }
  progress::-webkit-progress-value {
    background-color: #787af6;
  }
  progress::-moz-progress-bar {
    /* style rules */
  }
`;
export const ContainerQuiz = styled.div`
  justify-content: center;
  align-items: center;
  flex-direction: column;
  display: flex;
`;

export const QuizInfo = styled.div`
  background-color: ${colors.secondary};
  color: white;
  border-radius: 10rem;
  padding: 0.6rem 3rem;
  top: -14%;
  position: absolute;
`;

export const QuestionHeader = styled.div`
  background-color: white;
  width: 70vw;
  min-height: 20vh;
  padding: 0 2rem;
  border-radius: 6px;
  justify-content: center;
  align-items: center;
  display: flex;
  position: relative;
  @media only screen and (max-width: 950px) {
    padding: 2rem 2rem;
    position: initial;
  }
`;

export const Answers = styled.div`
  width: 70vw;
  height: 20vh;
  margin: 0.8rem 0;
  column-gap: 2rem;
  row-gap: 0.8rem;
  grid-template-columns: repeat(2, 1fr);
  display: grid;
  @media only screen and (max-width: 950px) {
    grid-template-columns: repeat(1, 1fr);
    grid-row-gap: 3%;
  }
`;

export const Answer = styled.button`
  background: ${(props) =>
    props.isTrue
      ? "#70AF85;"
      : props.checked === "selected"
      ? "#F05454;"
      : props.disabled
      ? "#dbdbdb;"
      : "white;"}
  color: ${(props) => (props.isTrue ? "white" : "black")};
  height: 5rem;
  padding: 2rem 2rem;
  border-radius: 6px;
  border: none;
  justify-content: center;
  align-items: center;
  display: flex;
  cursor: pointer;
`;
export const FinishModel = styled.div`
  background: white;
  min-width: 40%;
  min-height: 60%;
  padding: 0 1rem;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  display: flex;
  border-radius: 6px;
  position: absolute;
  button {
    background-color: ${colors.secondary};
    color: white;
    border-radius: 10rem;
    border: none;
    margin: 0.5rem 0;
    padding: 0.5rem 4rem;
    cursor: pointer;
  }
  span {
    color: gray;
    font-size: 0.8rem;
    cursor: pointer;
  }
`;

export const Skip = styled.button`
  background-color: ${colors.secondary};
  color: white;
  border: none;
  border-radius: 10rem;
  padding: 0.6rem 0.6rem;
  top: 0%;
  right: 0;
  cursor: pointer;
  position: absolute;
  @media only screen and (max-width: 950px) {
    top: 2%;
    right: 2%;
  }
`;
export const Back = styled.button`
  background-color: ${colors.secondary};
  color: white;
  border: none;
  border-radius: 10rem;
  padding: 0.6rem 0.6rem;
  cursor: pointer;
  top: -14%;
  left: 0;
  position: absolute;
  @media only screen and (max-width: 950px) {
    top: 2%;
    left: 2%;
  }
`;
