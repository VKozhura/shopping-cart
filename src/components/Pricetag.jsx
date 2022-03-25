import React from "react";

const total = ({state}) => {
    const addonsAmount = state.addons.reduce((acc, addon) => {
        return addon.selected ? acc + addon.price : acc;
    }, 0)

    return (state.productPrice + addonsAmount) * state.qty;
}

export const Pricetag = state => {
    return (
        <p>{total(state)} р</p>
    )
}



