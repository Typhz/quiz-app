import React, { useState } from "react";
import {
  AppContainer,
  ContainerQuiz,
  QuizInfo,
  QuestionHeader,
  Answers,
  FinishModel,
  Answer,
  Skip,
  Back,
} from "./styles";
import { useNavigate } from "react-router-dom";
import winImg from "../../assets/win.svg";

function Quiz() {
  const navigate = useNavigate();
  const name = localStorage.getItem("name");
  const quiz = localStorage.getItem("quiz");
  const jsonQuiz = JSON.parse(quiz);
  const questions = jsonQuiz.data;
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [isFinish, setIsFinish] = useState(false);
  const [score, setScore] = useState(0);
  const [markedQuestion, setMarkedQuestion] = useState([]);
  const nextQuestion = currentQuestion + 1;
  const backQuestion = currentQuestion - 1;
  const skip = () => {
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
  const back = () => {
    if (nextQuestion <= questions.length) {
      setCurrentQuestion(backQuestion);
    } else {
      setShowScore(true);
    }
  };
  const handleRemakeTest = () => {
    navigate("/difficulty");
  };
  const handleAnswerOptionClick = (answer_) => {
    if (answer_ === jsonQuiz.data[currentQuestion].correct_answer) {
      setScore(score + 1);
    }
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
      let newElement = [answer_];
      setMarkedQuestion([...markedQuestion, newElement]);
    } else {
      setCurrentQuestion(nextQuestion);
      let newElement = [answer_];
      setMarkedQuestion([...markedQuestion, newElement]);
      setShowScore(true);
    }
  };
  function handleViewAnswer() {
    setScore(0);
    setShowScore(false);
    setCurrentQuestion(0);
    setIsFinish(true);
  }

  return (
    <AppContainer>
      <ContainerQuiz>
        {showScore ? (
          <FinishModel>
            <img src={winImg} width={200} alt="You Win" />
            <h2>Você completou o Quiz</h2>
            <h2>Acertou {score} de 10</h2>
            <button onClick={handleRemakeTest}>Refazer Teste</button>
            <span onClick={handleViewAnswer}>Gabarito</span>
          </FinishModel>
        ) : (
          <>
            <progress id="file" value={currentQuestion} max="9"></progress>
            <QuestionHeader>
              {isFinish ? <Back onClick={back}>Voltar</Back> : <></>}
              {isFinish ? <Skip onClick={skip}>Avançar</Skip> : <></>}
              <QuizInfo>
                <strong>{name}</strong>
                <span> {currentQuestion + 1} de 10</span>
              </QuizInfo>
              <h4>{jsonQuiz.data[currentQuestion].question}</h4>
            </QuestionHeader>
            <Answers>
              {Object.keys(jsonQuiz.data[currentQuestion].answers).map(
                (key, index) => {
                  if (jsonQuiz.data[currentQuestion].answers[key] != null) {
                    return (
                      <Answer
                        id={key}
                        key={index}
                        checked={
                          key == markedQuestion[currentQuestion]
                            ? "selected"
                            : "vaca"
                        }
                        onClick={() => handleAnswerOptionClick(key)}
                        disabled={isFinish}
                        isTrue={
                          key ===
                            jsonQuiz.data[currentQuestion].correct_answer &&
                          isFinish === true
                            ? true
                            : false
                        }
                      >
                        {jsonQuiz.data[currentQuestion].answers[key]}
                        <br />
                      </Answer>
                    );
                  }
                }
              )}
            </Answers>
          </>
        )}
      </ContainerQuiz>
    </AppContainer>
  );
}

export default Quiz;
