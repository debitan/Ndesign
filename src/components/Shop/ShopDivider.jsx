import React from 'react'
import styled from 'styled-components'

import JPText from '../shared/JPText'
import MobileHr from '../shared/MobileHr'
import StyledContainer from '../shared/StyledContainer'
import StyledHr from '../shared/StyledHr'

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
