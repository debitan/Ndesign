import React from 'react'
import styled from 'styled-components'

import DividerTitle from './DividerTitle'
import JPText from './JPText'

const DividerWrapper = styled('div')`
    display: flex;
    height: 100px;
    justify-content: center;
    align-content: center;
`

const Line = styled('div')`
    height: 50%;
    border-bottom: 1px solid black;
    width: 100%;
    margin-left: 30px;
`

const Divider = ({title, alt, JPTitle}) => {
    return (
        <DividerWrapper>
            <DividerTitle>{title}</DividerTitle>
            <JPText>{JPTitle}</JPText>
            <Line />
        </DividerWrapper>
    )
}

export default Divider

// img svgs need height of 36 here to be uniform
