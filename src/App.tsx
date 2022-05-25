import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Menu } from "./Menu";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>Coaster Calculator </p>
				<a href="www.github.com/KennanHunter">By Kennan Hunter</a>
			</header>

			<Menu></Menu>
		</div>
	);
}

export default App;
