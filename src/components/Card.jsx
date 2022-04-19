import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	addItemAC,
	removeItemAC,
	setQtyAC,
	toggleActiveAddonAC,
	updateCartFetchAC,
} from "../redux/product-reducer";

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

	const addItem = () => {
		dispatch(addItemAC(currentProductCard.qty));
	};

	const removeItem = () => {
		currentProductCard.qty > 1 && dispatch(removeItemAC(product.id));
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
				<div className="row mt-5">
					{addons.map(({ id, selected, title, addable_product }) => {
						return (
							<div key={id} className="col">
								<button
									onClick={() => toggleActiveAddon(id)}
									type="button"
									className={
										selected
											? "w-100 px-5 pt-3 btn btn-outline-dark btn-lg position-relative btn-success"
											: "w-100 px-5 pt-3 btn btn-outline-dark btn-lg position-relative"
									}
								>
									{title}
									<span className="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-danger">
										+ {Number(addable_product.price)} ₽
									</span>
								</button>
							</div>
						);
					})}
				</div>
			</div>

			<form
				encType="multipart/form-data"
				method="post"
				className="cart"
				action="https://svai.center/categories/1/products/shop-cart.html"
			>
				<hr />
				{/* убрала класс у дива ниже */}
				<div>
					<input
						type="button"
						className="minus text-color-hover-light bg-color-hover-secondary border-color-hover-primary"
						defaultValue="-"
						onClick={removeItem}
					/>
					<input
						type="number"
						className="input-text qty text"
						title="Qty"
						value={currentProductCard.qty}
						name="quantity"
						min="1"
						step="1"
						id="qty"
						onChange={onInputChange}
					/>
					<input
						type="button"
						className=" plus text-color-hover-light bg-color-hover-secondary border-color-hover-primary"
						defaultValue="+"
						onClick={addItem}
					/>
				</div>
				<button
					onClick={updateCart}
					id="addToCartButton"
					className="btn btn-warning btn-modern text-uppercase bg-color-hover-secondary border-color-hover-secondary text-dark text-hover-light"
				>
					{cartButtonName}
				</button>
			</form>
		</article>
	);
};

export default Card;
