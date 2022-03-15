import React from "react";
import { isInCart } from "../store";

const ButtonCart = ({ itemId }) => {
	const buttonState = {
		isInCart: "В корзине",
		addToCart: "Добавить в корзину",
		updateCart: "Обновить корзину",
	};

	const state = isInCart(itemId) ? buttonState.isInCart : buttonState.addToCart;
	return <button>{state}</button>;
};

export default ButtonCart;

// text ? buttonState.isInCart : buttonState.addToCart;
