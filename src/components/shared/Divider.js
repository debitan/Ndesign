import React from 'react'
import styled from 'styled-components'

const DividerText = styled('img')`

`

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
    margin: 0 30px;
`

const Divider = ({title, alt, line}) => {
    return (
        <DividerWrapper>
            {line && <Line />}
            <DividerText src={title} alt={alt}/>
            {line && <Line />}
        </DividerWrapper>
    )
}

export default Divider
