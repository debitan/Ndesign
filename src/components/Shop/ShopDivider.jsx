import React from 'react'
import styled from 'styled-components'

const StyledContainer = styled('div')`
    display: flex;
    align-items: center;
    flex-direction: row;

`

const StyledDiv = styled('div')`
    padding: 30px;
    min-width: fit-content;
`

const StyledHrWrapper = styled('div')`
    width: 100%;
`

const StyledHr = styled('hr')`
    border: none;
    height: 1px;
    background-color: black;
    color: black;
`

function ShopDivider ({ ProductTypeEN, ProductTypeJP }) {
    return (
        <StyledContainer>
            <StyledDiv>
                <h1>{ProductTypeEN}</h1>
            </StyledDiv>
            <StyledDiv>
                <h5>{ProductTypeJP}</h5>
            </StyledDiv>
            <StyledHrWrapper>
                <StyledHr />
            </StyledHrWrapper>
        </StyledContainer>
    )
}

export default ShopDivider
