import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItemAC, removeItemAC, setQtyAC, toggleActiveAddonAC } from "../redux/product-reducer";

import {
	selectTotalPrice,
	selectAddonsByProductId,
	selectCurrentProductCard,
	selectCartButtonName,
} from "../redux/selectors";

const Card = ({ product }) => {
	const dispatch = useDispatch();
	const totalPrice = useSelector(selectTotalPrice(product.id));
	const currentProductCard = useSelector(selectCurrentProductCard);
	const addons = useSelector(selectAddonsByProductId(product.id));
	const cartButtonName = useSelector(selectCartButtonName(product.id));

	const addItem = () => {
		dispatch(addItemAC(product.id));
	};

	const removeItem = () => {
		currentProductCard.qty > 1 && dispatch(removeItemAC(product.id));
	};

	const onInputChange = (e) => {
		const data = {
			productId: product.id,
			qty: Number(e.target.value),
		};
		dispatch(setQtyAC(data));
	};

	const toggleActiveAddon = (id) => {
		const data = {
			addonId: id,
		};
		dispatch(toggleActiveAddonAC(data));
	};

	return (
		<article id={product.id}>
			<h3>{product.name}</h3>
			<p>Артикул: {product.sku}</p>
			<p>{totalPrice} ₽ </p>
			<p>{product.description}</p>
			<ul>
				{product.attributes.map((attribute) => (
					<li key={attribute.id}>
						{attribute.description}: {attribute.pivot.value} {attribute.unit}
					</li>
				))}
			</ul>
			<div>
				{addons.map(({ id, selected, title }) => {
					return (
						<button onClick={() => toggleActiveAddon(id)} key={id}>
							{selected ? "Уже добавлен к товару" : "Добавить"} - {title}
						</button>
					);
				})}
			</div>
			<div>
				<button onClick={removeItem}>-</button>
				<input type="number" value={currentProductCard.qty} onChange={onInputChange} />
				<button onClick={addItem}>+</button>
				<button>{cartButtonName}</button>
			</div>
		</article>
	);
};

export default Card;
