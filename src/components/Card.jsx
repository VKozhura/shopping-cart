import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	incrementQtyAC,
	decrementQtyAC,
	setQtyAC,
	toggleActiveAddonAC,
	updateCartFetchAC,
} from "../redux/actions";

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

	const onIncrement = () => {
		dispatch(incrementQtyAC());
	};

	const onDecrement = () => {
		currentProductCard.qty > 1 && dispatch(decrementQtyAC());
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

	const updateCart = () => {
		const data = {
			productId: product.id,
		};
		dispatch(updateCartFetchAC(data));
	};

	return (
		<article id={product.id}>
			<h1 className="mb-0 font-weight-bold text-7">{product.name} </h1>
			<div className="pb-0 clearfix d-flex align-items-center">
				<div title="Rated 3 out of 5" className="float-start">
					<input
						type="text"
						className="d-none"
						value="3"
						title=""
						data-plugin-star-rating=""
						data-plugin-options="{&#39;displayOnly&#39;: true, &#39;color&#39;: &#39;primary&#39;, &#39;size&#39;:&#39;xs&#39;}"
						readOnly
					/>
				</div>
				<span className="count text-color-inherit" itemProp="ratingCount">
					Артикул: {product.sku}
				</span>
			</div>
			<div className="divider divider-small">
				<hr className="bg-color-grey-scale-4" />
			</div>

			<p className="price mb-3">
				<span className="sale text-color-dark" style={{ fontSize: "3em", padding: "0.3em 0" }}>
					{totalPrice} ₽
				</span>
			</p>

			<p className="text-3-5 mb-3">{product.description}</p>

			<div className="col">
				<ul className="list list-icons list-secondary">
					{product.attributes.map((attribute) => (
						<li key={attribute.id}>
							<i className="fas fa-check"></i>
							{attribute.description}:&nbsp;
							<strong className="text-color-dark">
								{attribute.pivot.value} {attribute.unit}
							</strong>
						</li>
					))}
				</ul>
				<div className="mt-5 row">
					{addons.map(({ id, selected, title, addable_product }) => {
						return (
                        <span key={id} className={selected ? 'col btn btn-success position-relative m-2' : 'col btn btn-outline-success position-relative m-2'} onClick={() => toggleActiveAddon(id)}>
                            {title} <span className="badge bg-secondary">+ {Number(addable_product.price).toLocaleString("ru-RU")} ₽</span>
                        </span>
						);
					})}
				</div>
			</div>

			<hr />
			{/* убрала класс у дива ниже */}
            <div className="row">
                <div className="col-lg-4 col-md-6 col-6">
                    <div className="input-group mb-3">
                        <button className="btn btn-outline-info" type="button" onClick={onDecrement}>-</button>
                        <input type="number" className="form-control text-center" value={currentProductCard.qty} onChange={onInputChange} />
                        <button className="btn btn-outline-danger" type="button" onClick={onIncrement}>+</button>
                    </div>
                </div>
                <div className="col-lg-8 col-md-6 col-6">
                    <button type="button" onClick={updateCart} id="addToCartButton" className="btn btn-warning text-dark w-100">
                        {cartButtonName}
                    </button>
                </div>
            </div>

		</article>
	);
};

export default Card;
