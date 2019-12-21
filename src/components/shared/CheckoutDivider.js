import React from 'react'
import styled from 'styled-components'

import DividerTitle from './DividerTitle'

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
    border-bottom: 1px solid #979797;
`

const Icon = styled('img')`
    align-self: center;
    height: 29px;
    padding: 0 8px 0 0;

    @media (min-width: 480px) {
        height: 37px;
        padding: 0 16px 0 16px;
    }

    @media (min-width: 768px) {
        padding: 0 30px 0 30px;
    }
`

const JPText = styled('h5')`
    color: grey;
    margin: 0 0 0 8px;
    min-width: fit-content;
    align-self: center;
    font-size: 16px;

    @media (min-width: 480px) {
        margin: 0 0 0 30px;
    }

    @media (min-width: 768px) {
        font-size: 20px;
    }
`

const Title = styled('h3')`
    align-self: center;
    line-height: 1;
    font-size: 24px;
`

const Divider = ({ icon, title, alt, JPTitle, singleTitle, background }) => {
    return (
        <>
        <DividerWrapper　background={background} >
            {icon && <Icon src={icon} alt={alt} />}
            {title && <DividerTitle>{title}</DividerTitle>}
            {JPTitle && <JPText>{JPTitle}</JPText>}
            {singleTitle && <Title>{singleTitle}</Title>}
        </DividerWrapper>
        </>
    )
}

export default Divider

// img svgs need height of 37 here to be uniform
