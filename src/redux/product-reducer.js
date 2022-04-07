import { initialState } from "./initialState";

const itemsReducer = (state = initialState, action) => {
	switch (action.type) {
		case "ADD_QTY": {
			return {
				...state,
				currentProductCard: {
					...state.currentProductCard,
					qty: state.currentProductCard.qty + 1,
				},
			};
		}
		case "REMOVE_QTY": {
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
		case "TOGGLE_ACTIVE_ADDON": {
			const currentProductCard = state.currentProductCard;

			return {
				...state,
				currentProductCard: {
					...currentProductCard,
					selectedAddons: currentProductCard.selectedAddons.includes(action.payload.addonId)
						? currentProductCard.selectedAddons.filter((addon) => addon !== action.payload.addonId)
						: [...currentProductCard.selectedAddons, action.payload.addonId],
				},
			};
		}
		default:
			return state;
	}
};

export default itemsReducer;

export const addItemAC = (productId) => ({
	type: "ADD_QTY",
	payload: productId,
});

export const removeItemAC = (productId) => ({
	type: "REMOVE_QTY",
	payload: productId,
});

export const setQtyAC = ({ qty }) => ({
	type: "SET_QTY",
	payload: { qty },
});

export const toggleActiveAddonAC = ({ addonId }) => ({
	type: "TOGGLE_ACTIVE_ADDON",
	payload: { addonId },
});
