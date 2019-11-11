import React from 'react'
import styled from 'styled-components'

const StyledContainer = styled('div')`
    display: flex;
    align-items: center;
    flex-direction: row;
    margin-bottom: 0;
`

const StyledDiv = styled('div')`
    min-width: fit-content;
    padding: 30px 30px 20px 30px;

    @media (min-width: 900px) {
        padding: 30px;
    }
`

const StyledHrWrapper = styled('div')`
    width: 100%;
`

const StyledHr = styled('hr')`
    display: none;
    border: none;
    height: 1px;
    background-color: black;
    color: black;

    @media (min-width: 900px) {
        display: block;
    }
`
const MobileHr = styled('hr')`
    display: block;
    border: none;
    margin-top: 0;
    width: 90%;
    height: 1px;
    background-color: black;
    color: black;

    @media (min-width: 900px) {
        display: none;
    }
`

const JPText = styled('h5')`
    color: grey;
`

function ShopDivider ({ ProductTypeEN, ProductTypeJP }) {
    return (
        <>
        <StyledContainer>
            <StyledDiv>
                <h1>{ProductTypeEN}</h1>
            </StyledDiv>
            <StyledDiv>
                <JPText>{ProductTypeJP}</JPText>
            </StyledDiv>
            <StyledHrWrapper>
                <StyledHr />
            </StyledHrWrapper>
        </StyledContainer>
        <MobileHr />
        </>
    )
}

export default ShopDivider
