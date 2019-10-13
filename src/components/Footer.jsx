import React from 'react'
import styled from 'styled-components'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'

const FooterWrapper = styled('footer')`
    background-color: #CDCBD7;
    padding: 20px;
    min-height: 200px;
`

const StyledNavbar = styled(Navbar)`
    background-color: #CDCBD7;
    padding: 20px;
`

const StyledLink = styled(Nav.Link)`
    margin: 10px;
    font-weight: bold;
    align-self: center;
`

const StyledBrand = styled(Navbar.Brand)`
    font-size: 26px;
`

const StyledP = styled('p')`
    padding: 50px 0 20px 50px;
`

const StyledContainer = styled(Container)`
  align-content: center;
`

function Footer() {
    return (
        <FooterWrapper>
            <StyledContainer>
                <StyledNavbar expand="lg" sticky="top">
                    <Nav className="flex-column">
                        <StyledBrand href="#home">±Ndesign</StyledBrand>
                        <StyledLink href="#shop">Shop</StyledLink>
                        <StyledLink href="#event">Events</StyledLink>
                        <StyledLink href="#event">Weddings</StyledLink>
                        <StyledLink href="#about">About</StyledLink>
                    </Nav>
                    <Nav className="flex-column">
                        <StyledLink href="#shop">オーダー・配達について</StyledLink>
                        <StyledLink href="#event">お花の取り扱い</StyledLink>
                        <StyledLink href="#about">問い合せ</StyledLink>
                    </Nav>
                </StyledNavbar>
                <StyledP>© Created for Plusminus Ndesign by Noinu ltd.</StyledP>
            </StyledContainer>
        </FooterWrapper>
    )
}

export default Footer
