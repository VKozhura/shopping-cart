const modifyDataToInitialState = (productData, cartData) => {
	const productCart = cartData.find((productInCart) => productData.id === productInCart.productId);
	return {
		products: {
			[productData.id]: productData,
		},
		cart: {
			products: cartData,
		},
		currentProductCard: {
			productId: productCart.productId,
			selectedAddons: productCart.addons,
			qty: productCart.qty,
		},
	};
};

export const initialState = modifyDataToInitialState(window.product, window.cart);
