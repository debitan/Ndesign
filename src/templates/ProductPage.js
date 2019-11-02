import React from 'react'
import styled from 'styled-components'

import App from '../components/App'
import MyContext from '../components/MyContext'

import productImage from '../images/product1.jpg'

const BuyButton = styled('button')`
    width: 400px;
    height: 75px;
    background-color: black;
    color: white;
    border-radius: 37.5px;
    font-size: 20px;
`

const ProductPage = ({ pageContext }) => {
    return (
    <App>
        <MyContext.Consumer>
            {( handleAddToBasketClick ) => (
                <div>
                    <h1>{pageContext.title}</h1>
                    <p>{pageContext.flower}</p>
                    <p>{pageContext.type}</p>
                    <p>{pageContext.price}</p>
                    <p>{pageContext.category}</p>
                    <p>{pageContext.slug}</p>
                    <img src={productImage} style={{ width: "500px"}} alt={pageContext.title} />
                    <BuyButton onClick={() => handleAddToBasketClick(pageContext.slug)}>
                        カートに入れる
                    </BuyButton>
                </div>)}
        </MyContext.Consumer>
    </App>
    )
}

export default ProductPage
