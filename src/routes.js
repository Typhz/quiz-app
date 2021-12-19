import React from "react";
import {Route, Routes, Navigate} from "react-router-dom";
import {App, Quiz, Difficulty} from "./pages"
import { storeQuiz } from "./services/auth";
export default function RoutesConfig() {
  function PrivateRoute({ children }) {
    const haveQuestions = storeQuiz();
    return haveQuestions ? children : <Navigate to="/" />;
  }
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