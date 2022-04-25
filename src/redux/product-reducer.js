import { initialState } from "./initialState";

const productReducer = (state = initialState, action) => {
	switch (action.type) {
		case "INCREMENT_QTY": {
			return {
				...state,
				currentProductCard: {
					...state.currentProductCard,
					qty: state.currentProductCard.qty + 1,
				},
			};
		}
		case "DECREMENT_QTY": {
			return {
				...state,
				currentProductCard: {
					...state.currentProductCard,
					qty: state.currentProductCard.qty - 1,
				},
			};
		}
		case "SET_QTY": {
			return {
				...state,
				currentProductCard: {
					...state.currentProductCard,
					qty: action.payload.qty,
				},
			};
		}
        case "LOAD_CART": {
            const productCart = action.payload.find((productInCart) => window.product.id === productInCart.productId);

            return {
                ...state,
                cart: {
                    products: [...action.payload],
                },
                currentProductCard: {
                    productId: productCart ? productCart.productId : productData.id,
                    addons: productCart ? productCart.addons : [],
                    qty: productCart ? productCart.qty : 1,
                },
            };
        }
		case "TOGGLE_ACTIVE_ADDON": {
			const currentProductCard = state.currentProductCard;

			return {
				...state,
				currentProductCard: {
					...currentProductCard,
					addons: currentProductCard.addons.includes(action.payload.addonId)
						? currentProductCard.addons.filter((addon) => addon !== action.payload.addonId)
						: [...currentProductCard.addons, action.payload.addonId],
				},
			};
		}
		case "UPDATE_CART": {
			const currentProductCard = state.currentProductCard;
			const productCart = state.cart.products.find(
				(productInCart) => currentProductCard.productId === productInCart.productId
			);

			const newCartProducts = state.cart.products.map((product) => {
				if (product.productId === currentProductCard.productId) {
					return currentProductCard;
				}
				return product;
			});

			return {
				...state,
				cart: {
					...state.cart,
					products: productCart ? newCartProducts : [...state.cart.products, currentProductCard],
				},
			};
		}
		default:
			return state;
	}
};

export default productReducer;
