import "./App.css";
import Card from "./components/Card";

const App = ({ item }) => {
	return (
		<div className="App">
			<Card item={item} />
		</div>
	);
};

export default App;
