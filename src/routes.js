import React from "react";
import { useLocation, Route, Routes, Redirect} from "react-router-dom";
import App from './pages/App';
import Difficulty from './pages/Difficulty';
import Quiz from './pages/Quiz';
export default function RoutesConfig() {
	const location = useLocation();
	return (
		<Routes location={location}>
				<Route exact path="/" element={<App/>} />
				<Route exact path="/difficulty" element={<Difficulty/>} />
				<Route exact path="/quiz" element={<Quiz/>} />
		</Routes>
	);
  }