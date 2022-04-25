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

// Update cart
const updateCart = async (payload) => {
    const config = {
        method: 'get',
        url: `/`
    }

    const response = await axios(config)

    const data = {
        "payload": payload
    };

    const cartConfig = {
        method: 'post',
        url: `/api/add_to_cart`,
        headers: response.config.headers,
        data: data
    }

    const cartResponse = await axios(cartConfig)
}

export const updateCartFetchAC =
	({ productId }) =>
	(dispatch, getState) => {
		dispatch(updateCartAC(productId));
		const state = getState();
        const productCart = state.cart.products.find((productInCart) => window.product.id === productInCart.productId);
        updateCart(productCart)
		console.log(JSON.stringify(state.cart.products));
	};
