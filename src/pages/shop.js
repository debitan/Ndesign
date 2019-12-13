import React from 'react'
import App from '../components/App'
import Products from '../components/Shop/Products'
import ShopHeader from '../components/Shop/ShopHeader'

function Shop() {
    return (
        <App>
            <ShopHeader />
            <Products />
        </App>
    )
}

export default Shop
