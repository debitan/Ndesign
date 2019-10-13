import React from 'react'
import styled from 'styled-components'

const StyledContainer = styled('div')`
    text-align: center;
    padding: 40px;
`

function ShopHeader () {
    return (
        <StyledContainer>
            <h1>Shop</h1>
            <br />
            <h5>全ての商品において、ご希望の色・お好みの花材に変更可能です。ご希望をお知らせください。</h5>
        </StyledContainer>
    )
}

export default ShopHeader
