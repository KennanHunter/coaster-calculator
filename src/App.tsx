import "./App.css";
import { Menu } from "./components/Menu";
import logo from "./logo.svg";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>Coaster Calculator </p>
				<a href="https://www.github.com/KennanHunter">
					By Kennan Hunter
				</a>
			</header>

			<Menu />
		</div>
	);
}

export default App;
