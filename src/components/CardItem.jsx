import React from "react";

const CardItem = (props) => {
	const [qty, setQty] = React.useState(1);
	const [totalPrice, setTotalPrice] = React.useState(props.item.price);

	const addQty = () => {
		const newQty = qty + 1;
		const newTotal = newQty * props.item.price;
		setQty(newQty);
		setTotalPrice(newTotal);
	};

	const deleteQty = () => {
		if (qty > 1) {
			const newQty = qty - 1;
			const newTotal = newQty * props.item.price;
			setQty(newQty);
			setTotalPrice(newTotal);
		}
	};

	const addonsElements = props.item.addons.map((addon) => (
		<button key={addon.id}>{addon.title}</button>
	));

	const featuresElements = props.item.attributes.map((attribute) => (
		<li key={attribute.id}>
			{attribute.description}: {attribute.pivot.value} {attribute.unit}
		</li>
	));

	return (
		<article>
			<h3>{props.item.name}</h3>
			<p>Артикул: {props.item.sku}</p>
			<p>{totalPrice} р</p>
			<p>{props.item.description}</p>
			<ul>{featuresElements}</ul>
			<div>{addonsElements}</div>
			<div>
				<button onClick={addQty}>+</button>
				<input type="number" value={qty} />
				<button onClick={deleteQty}>-</button>
				<button>В корзину</button>
			</div>
		</article>
	);
};

export default CardItem;
