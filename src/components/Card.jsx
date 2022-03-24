import React from "react";
import ButtonCart from "./Button";
import { addonsArr } from "../store";

const Card = ({ item }) => {
	const [qty, setQty] = React.useState(1);
	const [totalPrice, setTotalPrice] = React.useState(item.price);
	const [activeAddons, setActiveAddon] = React.useState(() => addonsArr(item.id));

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

	const onSelectAddon = (addonId) => {
		if (activeAddons.includes(addonId)) {
			setActiveAddon((prevActiveAddon) => prevActiveAddon.filter((addon) => addon !== addonId));
		} else {
			setActiveAddon([...activeAddons, addonId]);
		}
	};

	const addonsElements = item.addons.map((addon) => (
		<button onClick={() => onSelectAddon(addon.id)} key={addon.id}>
			{activeAddons.includes(addon.id) ? "Уже добавлен к товару" : addon.title}
		</button>
	));

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
