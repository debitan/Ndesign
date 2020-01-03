import React from 'react'
import styled from 'styled-components'

import Basket from '../images/basket.svg'
import Basket1 from '../images/basket1.svg'
import Basket2 from '../images/basket2.svg'
import Basket3 from '../images/basket3.svg'
import Basket4 from '../images/basket4.svg'
import Basket5 from '../images/basket5.svg'
import Basket6 from '../images/basket6.svg'
import Basket7 from '../images/basket7.svg'
import Basket8 from '../images/basket8.svg'
import Basket9 from '../images/basket9.svg'
import Basket9plus from '../images/basket9plus.svg'

const StyledImg = styled('img')`
    height: 22px;

    @media (min-width: 768px) {
    margin-bottom: 8px;
    }
`

const baskets = [{Basket}, {Basket1}, {Basket2}, {Basket3}, {Basket4}, {Basket5}, {Basket6}, {Basket7}, {Basket8}, {Basket9}, {Basket9plus}]

const BasketLink = (quantity) => {
    const number = Object.values(quantity)[0]

    const currentBasket = () => {
        if (number === 0) {
            return {Basket}
        }
        if (number > 9) {
            return {Basket9plus}
        }
        else return baskets.filter(basket => String(Object.keys(basket)) === `Basket${number}`)[0]
    }

    const basketSvg = Object.values(currentBasket())[0]

    return (
        <StyledImg src={basketSvg} alt="basket"/>
    )
}

export default BasketLink
