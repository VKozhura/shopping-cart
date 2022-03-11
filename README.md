# Endopoint cart

---
### Request preparation
Bebore you get information about cart's state first of all you have to get cookies header and all the rest headers (inc. CSRF) by sending request to root endpoint and then use them in further requests in a scope of the current browser session:
```javascript
const logHeaders = async (hostname) => {

    const config = {
        method: 'get',
        url: `http://${hostname}/`
    }

    const response = await axios(config)
    
    console.log(JSON.stringify(response.config.headers))
}
```

## Complete Request (axios)
```javascript
const getCart = async () => {

    const config = {
        method: 'get',
        url: '/'
    }

    const response = await axios(config)

    const cartConfig = {
        method: 'get',
        url: '/api/cart',
        headers: response.config.headers
    }

    const cartResponse = await axios(cartConfig)
    // console.log(cartResponse.data)

    return cartResponse.data;
}
```
## Response
```javascript
[
    {
        "productId": 1,
        "addons": [3,2],
        "qty": 1
    },
    {
        "productId": 39,
        "addons": [],
        "qty": 3
    }
]
```
---
## Get Product by ID (axios)
```javascript
const getProduct = async (id) => {

    const config = {
        method: 'get',
        url: `/api/get_product/${id}`
    }

    const response = await axios(config)

    return response.data;
}
```
## Response
```javascript
{
    "data": {
        "id": 1,
            "sku": "10001",
            "category_id": 2,
            "name": "Свая винтовая СВС-57, ∅57мм",
            "excerpt": "Идеальное решение для установки в составе фундамента для коттеджа, загородного дома, хозяйственной постройки или основы для откатных ворот",
            "description": "Идеальное решение для установки в составе фундамента для коттеджа, загородного дома, хозяйственной постройки или основы для откатных ворот",
            "longdescription": null,
            "image": "png",
            "price": "1050.00",
            "unit": "шт",
            "vendor_id": 1,
            "length": null,
            "width": null,
            "height": null,
            "mass": null,
            "status": "enabled",
            "available": 0,
            "deleted_at": null,
            "created_at": "2022-02-25T10:04:34.000000Z",
            "updated_at": "2022-03-09T11:54:10.000000Z",
            "polarity_id": null,
            "formfactor_id": null,
            "attributes": [
            {
                "id": 1,
                "category_id": 1,
                "name": "Диаметр ствола",
                "description": "Диаметр ствола",
                "unit": "мм",
                "deleted_at": null,
                "created_at": "2022-02-25T09:44:37.000000Z",
                "updated_at": "2022-02-25T09:46:51.000000Z",
                "sort_order": 1,
                "pivot": {
                    "product_id": 1,
                    "attribute_id": 1,
                    "value": "57"
                }
            },
            {
                "id": 2,
                "category_id": 1,
                "name": "Диаметр лопасти",
                "description": "Диаметр лопасти",
                "unit": "мм",
                "deleted_at": null,
                "created_at": "2022-02-25T09:45:53.000000Z",
                "updated_at": "2022-02-25T09:46:51.000000Z",
                "sort_order": 2,
                "pivot": {
                    "product_id": 1,
                    "attribute_id": 2,
                    "value": "200"
                }
            },
            {
                "id": 3,
                "category_id": 1,
                "name": "Толщина стенки",
                "description": "Толщина стенки",
                "unit": "мм",
                "deleted_at": null,
                "created_at": "2022-02-25T09:46:14.000000Z",
                "updated_at": "2022-02-25T09:46:51.000000Z",
                "sort_order": 3,
                "pivot": {
                    "product_id": 1,
                    "attribute_id": 3,
                    "value": "3.5"
                }
            },
            {
                "id": 4,
                "category_id": 1,
                "name": "Длина ствола",
                "description": "Длина ствола",
                "unit": "мм",
                "deleted_at": null,
                "created_at": "2022-02-25T09:46:30.000000Z",
                "updated_at": "2022-02-25T09:46:51.000000Z",
                "sort_order": 4,
                "pivot": {
                    "product_id": 1,
                    "attribute_id": 4,
                    "value": "1500"
                }
            }
        ],
            "vendor": {
            "id": 1,
                "name": "ООО «ГК ПВФ СТАЛЬ»",
                "company_name": "ООО «ГК ПВФ СТАЛЬ»",
                "inn": "7806297085",
                "address": "192289, г Санкт-Петербург, проезд Складской, дом 4 ЛИТЕР А, ОФИС 205.",
                "phone": null,
                "email": null,
                "deleted_at": null,
                "created_at": "2022-02-25T09:51:52.000000Z",
                "updated_at": "2022-02-25T09:51:52.000000Z"
        },
        "addons": [
            {
                "id": 2,
                "product_id": 1,
                "title": "С монтажом",
                "description": "Установим сваю",
                "addon_product_id": 3,
                "created_at": "2022-02-26T12:22:27.000000Z",
                "updated_at": "2022-02-26T12:22:27.000000Z",
                "addable_product": {
                    "id": 3,
                    "sku": "90003",
                    "category_id": 4,
                    "name": "Монтаж сваи 57 мм",
                    "excerpt": "Монтаж сваи 57 мм",
                    "description": "Монтаж сваи 57 мм",
                    "longdescription": null,
                    "image": "png",
                    "price": "2000.00",
                    "unit": "шт",
                    "vendor_id": 1,
                    "length": null,
                    "width": null,
                    "height": null,
                    "mass": null,
                    "status": "enabled",
                    "available": 0,
                    "deleted_at": null,
                    "created_at": "2022-02-26T12:21:30.000000Z",
                    "updated_at": "2022-03-09T11:54:10.000000Z",
                    "polarity_id": null,
                    "formfactor_id": null,
                    "attributes": [],
                    "vendor": {
                        "id": 1,
                        "name": "ООО «ГК ПВФ СТАЛЬ»",
                        "company_name": "ООО «ГК ПВФ СТАЛЬ»",
                        "inn": "7806297085",
                        "address": "192289, г Санкт-Петербург, проезд Складской, дом 4 ЛИТЕР А, ОФИС 205.",
                        "phone": null,
                        "email": null,
                        "deleted_at": null,
                        "created_at": "2022-02-25T09:51:52.000000Z",
                        "updated_at": "2022-02-25T09:51:52.000000Z"
                    },
                    "addons": []
                }
            },
            {
                "id": 3,
                "product_id": 1,
                "title": "С оголовком",
                "description": "Добавить оголовок для сваи",
                "addon_product_id": 2,
                "created_at": "2022-02-27T10:16:58.000000Z",
                "updated_at": "2022-02-27T10:16:58.000000Z",
                "addable_product": {
                    "id": 2,
                    "sku": "20002",
                    "category_id": 3,
                    "name": "Оголовок для сваи D=57 мм",
                    "excerpt": "Оголовок для сваи диаметром 57 мм",
                    "description": "Оголовок для сваи диаметром 57 мм",
                    "longdescription": null,
                    "image": "png",
                    "price": "200.00",
                    "unit": "шт",
                    "vendor_id": 1,
                    "length": null,
                    "width": null,
                    "height": null,
                    "mass": null,
                    "status": "enabled",
                    "available": 0,
                    "deleted_at": null,
                    "created_at": "2022-02-26T09:43:43.000000Z",
                    "updated_at": "2022-03-09T11:54:10.000000Z",
                    "polarity_id": null,
                    "formfactor_id": null,
                    "attributes": [
                        {
                            "id": 5,
                            "category_id": 3,
                            "name": "Диаметр посадочного места",
                            "description": "Диаметр посадочного места",
                            "unit": "мм",
                            "deleted_at": null,
                            "created_at": "2022-02-26T09:44:41.000000Z",
                            "updated_at": "2022-02-26T09:44:41.000000Z",
                            "sort_order": null,
                            "pivot": {
                                "product_id": 2,
                                "attribute_id": 5,
                                "value": "57"
                            }
                        }
                    ],
                    "vendor": {
                        "id": 1,
                        "name": "ООО «ГК ПВФ СТАЛЬ»",
                        "company_name": "ООО «ГК ПВФ СТАЛЬ»",
                        "inn": "7806297085",
                        "address": "192289, г Санкт-Петербург, проезд Складской, дом 4 ЛИТЕР А, ОФИС 205.",
                        "phone": null,
                        "email": null,
                        "deleted_at": null,
                        "created_at": "2022-02-25T09:51:52.000000Z",
                        "updated_at": "2022-02-25T09:51:52.000000Z"
                    },
                    "addons": []
                }
            }
        ]
    }
}
```

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
