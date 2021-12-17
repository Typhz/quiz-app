import React from "react";
import { useLocation, Route, Routes, Redirect} from "react-router-dom";
import App from './pages/App';
import Difficulty from './pages/Difficulty'
export default function RoutesConfig() {
	const location = useLocation();
	return (
		<Routes location={location}>
				<Route exact path="/" element={<App/>} />
				<Route exact path="/difficulty" element={<Difficulty/>} />
		</Routes>
	);
  }