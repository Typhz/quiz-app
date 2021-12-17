import React from "react";
import {Route, Routes, Navigate} from "react-router-dom";
import App from './pages/App';
import Quiz from './pages/Quiz'
import Difficulty from './pages/Difficulty'
import { storeQuiz } from "./services/auth";



export default function RoutesConfig() {
  function PrivateRoute({ children }) {
    const haveQuestions = storeQuiz();
    return haveQuestions ? children : <Navigate to="/" />;
  }
  console.log(storeQuiz())
	return (
      <Routes>
          <Route path="/" element={<App/>} />
          <Route path="/difficulty" element={<Difficulty/>} />
          <Route path="/quiz" element={
              <PrivateRoute>
                <Quiz />
              </PrivateRoute>
            }
          />
      </Routes>
	);
  }