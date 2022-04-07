export const selectProducts = (state) => {
	return Object.values(state.products);
};

export const selectProductById = (productId) => (state) => {
	return state.products[productId];
};

export const selectCartProductById = (productId) => (state) => {
	return state.cart.products.find((product) => product.productId === productId);
};

export const selectCurrentProductCard = (state) => {
	return state.currentProductCard;
};

export const selectAddonPriceByProductId = (productId) => (state) => {
	const product = selectProductById(productId)(state);
	let addonsPrice = {};
	product.addons.forEach((addon) => {
		return (addonsPrice[addon.id] = Number(addon.addable_product.price));
	});
	return addonsPrice;
};

export const selectTotalPrice = (productId) => (state) => {
	const product = selectProductById(productId)(state);
	const productPrice = Number(product.price);
	const currentProductCard = selectCurrentProductCard(state);

	if (currentProductCard) {
		const addonsPrice = selectAddonPriceByProductId(productId)(state);
		let selectedAddonsPrice = 0;
		for (const addonId of currentProductCard.selectedAddons) {
			selectedAddonsPrice += addonsPrice[addonId];
		}
		const productQty = currentProductCard.qty;
		return (productPrice + selectedAddonsPrice) * productQty;
	} else {
		return Number(product.price);
	}
};

export const selectAddonsByProductId = (productId) => (state) => {
	const product = selectProductById(productId)(state);
	const currentProductCard = selectCurrentProductCard(state);
	if (currentProductCard) {
		const selectedAddons = currentProductCard.selectedAddons;
		return product.addons.map((addon) => ({
			...addon,
			selected: selectedAddons.includes(addon.id),
		}));
	} else {
		return product.addons;
	}
};

export const selectCartButtonName = (productId) => (state) => {
	const productCart = selectCartProductById(productId)(state);
	const currentProductCard = selectCurrentProductCard(state);
	if (!productCart) {
		return "Добавить в корзину";
	}
	if (JSON.stringify(productCart) !== JSON.stringify(currentProductCard)) {
		return "Обновить корзину";
	} else {
		return "В корзине";
	}
};
