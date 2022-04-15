import { useSelector } from "react-redux";
import "./App.css";
import Card from "./components/Card";
import { selectProducts } from "./redux/selectors";

const App = () => {
	const products = useSelector(selectProducts);
	return (
		<div className="summary entry-summary position-relative">
			{products.map((product) => (
				<Card key={product.id} product={product} />
			))}
		</div>
	);
};

export default App;
