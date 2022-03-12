import "./App.css";
import CardItem from "./components/CardItem";

function App(props) {
	return (
		<div className="App">
			<CardItem item={props.item} />
		</div>
	);
}

export default App;
