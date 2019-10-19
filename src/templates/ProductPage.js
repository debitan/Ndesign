import React from 'react'
import App from '../components/App'
import productImage from '../images/product1.jpg'

const ProductPage = ({ pageContext }) => {
    return (
    <App>
        <div>
             <h1>{pageContext.title}</h1>
             <p>{pageContext.flower}</p>
             <p>{pageContext.type}</p>
             <p>{pageContext.price}</p>
             <p>{pageContext.category}</p>
             <p>{pageContext.slug}</p>
             <img src={productImage} style={{ width: "600px", height: "400px" }} />
        </div>
    </App>
    )
}

export default ProductPage
