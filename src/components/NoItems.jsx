import React from 'react'
import styled from 'styled-components'

import DividerTitle from './shared/DividerTitle'
import Button from './shared/Button'

import shoppingCartIcon from '../images/shoppingCartIcon.svg'

const StyledWrapper = styled('div')`
    padding: 100px 0;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
`

const FlexDiv = styled('div')`
    display: flex;
    justify-content: center;
    align-items: center;
`

const DividerWrapper = styled('div')`
    display: flex;
    height: 80px;
    justify-content: flex-start;
    align-content: center;
    background-color: ${props => props.background ? '#dde8e2' : 'none'};
    margin-left: -15px;
    margin-top: -15px;
    margin-right: -15px;
    padding: 15px 0 0 15px;
`

const Icon = styled('img')`
    align-self: center;
    height: 29px;
    padding: 0 8px 0 0;

    @media (min-width: 480px) {
        height: 37px;
        padding: 0 16px 0 0;
    }

    @media (min-width: 768px) {
        padding: 0 30px 0 0;
    }
`

const Title = styled('h3')`
    align-self: center;
    font-size: 21px;
    padding: 30px 0;
`

const ShopButton = styled(Button)`
    text-align: center;
    padding: 10px 50px;

    @media (min-width: 768px) {
        padding: 10px 0;
    }
`

const NoItems = () => {
    return (
        <StyledWrapper>
            <FlexDiv>
                <DividerWrapper>
                    <Icon src={shoppingCartIcon} />
                    <DividerTitle>Shopping Cart</DividerTitle>
                </DividerWrapper>
            </FlexDiv>
            <Title>カートに商品が入ってません</Title>
            <ShopButton href='/shop' >Shopに行く</ShopButton>
        </StyledWrapper>
    )
}

export default NoItems
