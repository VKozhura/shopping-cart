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
			productId: productCart ? productCart.productId : productData.id,
			addons: productCart ? productCart.addons : [],
			qty: productCart ? productCart.qty : 1,
		},
	};
};

export const initialState = modifyDataToInitialState(window.product, []);
