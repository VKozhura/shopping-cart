import React, {useEffect} from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import {WrapperContainer} from "../../meole/components/container/WrapperContainer";


const getCart = async () => {
    const config = {
        method: 'get',
        url: `/`
    }

    const response = await axios(config)
    // console.log(JSON.stringify(response.config.headers))

    const cartConfig = {
        method: 'get',
        url: `/api/cart`,
        headers: response.config.headers
    }

    const cartResponse = await axios(cartConfig)

    console.log(cartResponse.data)

    store.dispatch({
        type: 'LOAD_CART',
        payload: cartResponse.data
    });
}

const Cart = () => {
    useEffect(() => {
        getCart();
    });

    return <App />;
}

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<Cart />
		</Provider>
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
