// This will be the shop page, but just starting here first

import React from 'react'
import App from '../components/App'
import ShopHeader from '../components/Shop/ShopHeader'
import ShopDivider from '../components/Shop/ShopDivider'

function Shop() {
    return (
        <App>
            <ShopHeader />
            <ShopDivider ProductTypeEN="Bouquet" ProductTypeJP="ブーケ" />
            <ShopDivider ProductTypeEN="Decoration" ProductTypeJP="デコレーション" />
            <ShopDivider ProductTypeEN="Accessories" ProductTypeJP="アクセサリー" />
        </App>
    )
}

export default Shop
