import React from 'react'
import styled from 'styled-components'

import ShopHeaderImg from '../../images/ShopHeaderImg.jpg'

const StyledContainer = styled('div')`
    text-align: center;
    padding: 40px 0 40px 0;
    margin-left: calc(50% - 50vw);
    margin-right: calc(50% - 50vw);
`

const StyledImageContainer = styled('div')`
    height: 300px;
    position: relative;
`

const ImageText = styled('div')`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: transparent;
`

const StyledImage = styled('img')`
    width: 100%;
    height: 100%;
`

function ShopHeader () {
    return (
        <StyledContainer>
            <h1>Shop</h1>
            <br />
            <StyledImageContainer>
                <StyledImage source={ShopHeaderImg} />
                <ImageText>
                    <h4>
                    Mother's Day
                    </h4>
                    <h4>
                    母の日のプレゼント特集
                    </h4>
                    <br />
                    <p>
                        大切奈お母さんへ、
                    <br />
                        感謝の気持ちを届けます
                    </p>
                </ImageText>
            </StyledImageContainer>
        </StyledContainer>
    )
}

export default ShopHeader
