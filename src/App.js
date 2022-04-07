import { useSelector } from "react-redux";
import "./App.css";
import Card from "./components/Card";
import { selectProducts } from "./redux/selectors";

// const App = ({ item }) => {
// 	return (
// 		<div className="App">
// 			<Card item={item} />
// 		</div>
// 	);
// };

const App = () => {
	const products = useSelector(selectProducts);
	return (
		<div className="App">
			{products.map((product) => (
				<Card key={product.id} product={product} />
			))}
		</div>
	);
};

export default App;
