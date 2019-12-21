import React from 'react'
import styled from 'styled-components'

import DividerTitle from './DividerTitle'

const DividerWrapper = styled('div')`
    display: flex;
    height: 100px;
    justify-content: center;
    align-content: center;
    margin: 10px 0;
`

const Line = styled('div')`
    height: 50%;
    border-bottom: 1px solid black;
    width: 100%;
    margin: 0 30px;
`

const Divider = ({title, line}) => {
    return (
        <DividerWrapper>
            {line && <Line />}
            <DividerTitle>{title}</DividerTitle>
            {line && <Line />}
        </DividerWrapper>
    )
}

export default Divider
