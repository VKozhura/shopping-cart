import React from "react";
import ButtonCart from "./Button";

const Card = ({ item }) => {
	const [qty, setQty] = React.useState(1);
	const [totalPrice, setTotalPrice] = React.useState(item.price);

	const addQty = () => {
		const newQty = qty + 1;
		const newTotal = newQty * item.price;
		setQty(newQty);
		setTotalPrice(newTotal);
	};

	const deleteQty = () => {
		if (qty > 1) {
			const newQty = qty - 1;
			const newTotal = newQty * item.price;
			setQty(newQty);
			setTotalPrice(newTotal);
		}
	};

	const onInputChange = (e) => {
		setQty(e.target.value);
		const newTotal = e.target.value * item.price;
		setTotalPrice(newTotal);
	};

	const addonsElements = item.addons.map((addon) => <button key={addon.id}>{addon.title}</button>);

	const featuresElements = item.attributes.map((attribute) => (
		<li key={attribute.id}>
			{attribute.description}: {attribute.pivot.value} {attribute.unit}
		</li>
	));

	return (
		<article id={item.id}>
			<h3>{item.name}</h3>
			<p>Артикул: {item.sku}</p>
			<p>{totalPrice} р</p>
			<p>{item.description}</p>
			<ul>{featuresElements}</ul>
			<div>{addonsElements}</div>
			<div>
				<button onClick={deleteQty}>-</button>
				<input type="number" value={qty} onChange={onInputChange} />
				<button onClick={addQty}>+</button>
				<ButtonCart itemId={item.id} />
			</div>
		</article>
	);
};

export default Card;
