export const incrementQtyAC = () => ({
	type: "INCREMENT_QTY",
});

export const decrementQtyAC = () => ({
	type: "DECREMENT_QTY",
});

export const setQtyAC = ({ qty }) => ({
	type: "SET_QTY",
	payload: { qty },
});

export const toggleActiveAddonAC = ({ addonId }) => ({
	type: "TOGGLE_ACTIVE_ADDON",
	payload: { addonId },
});

export const updateCartAC = ({ productId }) => ({
	type: "UPDATE_CART",
	payload: { productId },
});

export const updateCartFetchAC =
	({ productId }) =>
	(dispatch, getState) => {
		dispatch(updateCartAC(productId));
		const state = getState();
		console.log(JSON.stringify(state.cart.products));
	};
