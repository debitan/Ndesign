import React from 'react'
import styled from 'styled-components'

const Container = styled('div')`
    text-align: center;
    padding: ${props => props.paddingTop}px ${props => props.paddingRight}px ${props => props.paddingBottom}px ${props => props.paddingLeft}px ;
    margin-left: calc(50% - 50vw);
    margin-right: calc(50% - 50vw);
`

const FullWidthContainer = ({paddingTop = 0, paddingRight = 0, paddingBottom = 0, paddingLeft = 0, children}) => {
    return (
    <Container
        paddingTop={paddingTop}
        paddingRight={paddingRight}
        paddingBottom={paddingBottom}
        paddingLeft={paddingLeft}
    >
        {children}
    </Container>
    )
}

export default FullWidthContainer
