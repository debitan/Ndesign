import React, { useState } from 'react'
import styled from 'styled-components'

import App from '../components/App'
import productImage from '../images/product1.jpg'
import Products from '../mockProducts.json'

const BuyButton = styled('button')`
    width: 400px;
    height: 75px;
    background-color: black;
    color: white;
    border-radius: 37.5px;
    font-size: 20px;
`

const ProductPage = ({ pageContext }) => {
    const [itemsInBasket, setItemsInBasket] = useState([]);

    const handleAddToBasketClick = slug => {
      setItemsInBasket(itemsInBasket => {
        const itemInBasket = itemsInBasket.find(item => item.slug === slug)

        // if item is already in Basket, update the quantity
        if (itemInBasket) {
          return itemsInBasket.map(item => {
            if (item.slug !== slug) return item;
            return { ...itemInBasket, quantity: item.quantity + 1 }
          })
        }

        // otherwise, add new item to Basket
        const item = Products.find(item => item.slug === slug)
        return [...itemsInBasket, { ...item, quantity: 1 }]
      })
    }

    return (
    <App>
        <div>
             <h1>{pageContext.title}</h1>
             <p>{pageContext.flower}</p>
             <p>{pageContext.type}</p>
             <p>{pageContext.price}</p>
             <p>{pageContext.category}</p>
             <p>{pageContext.slug}</p>
             <img src={productImage} style={{ width: "500px"}} />
             <BuyButton onClick={() => handleAddToBasketClick(pageContext.slug)}>
                 カートに入れる
             </BuyButton>
        </div>
    </App>
    )
}

export default ProductPage
