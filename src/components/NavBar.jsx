import React from 'react'
import styled from 'styled-components'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'

import Basket from '../images/basket.svg'

const StyledNavbar = styled(Navbar)`
    background-color: #94b09f;
    padding: 20px;

    button {
        border: none;

        :focus {
            outline: none;
        }
    }
`

const StyledLink = styled(Nav.Link)`
    margin: auto;
    font-weight: bold;
    align-self: center;

    @media (min-width: 768px) {
        margin: 10px;
    }
`

const StyledImg = styled('img')`
    height: 22px;
    width: 22px;


    @media (min-width: 768px) {
    margin-bottom: 6px;
    }
`

const BasketLink = styled(StyledLink)`
    margin: 0;

    @media (min-width: 1090px) {
        margin-right: 30px;
    }
`

const StyledBrand = styled(Navbar.Brand)`
    font-size: 26px;
    font-weight: 300;
    margin-left: 18px;
`

const StyledContainer = styled(Container)`
  align-content: center;
`

function NavBar () {
    return (
        <StyledNavbar expand="lg" sticky="top">
            <StyledContainer>
                <StyledBrand href="/">±Ndesign</StyledBrand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <StyledLink href="#shop">Shop</StyledLink>
                        <StyledLink href="#event">Event Flowers</StyledLink>
                        <StyledLink href="#about">Weddings</StyledLink>
                        <StyledLink href="#about">Gallery</StyledLink>
                        <StyledLink href="#about">Contact</StyledLink>
                        <BasketLink href="/checkout">
                            <StyledImg src={Basket} alt="basket"/>
                        </BasketLink>
                    </Nav>
                </Navbar.Collapse>
            </StyledContainer>
        </StyledNavbar>
    )
}

export default NavBar
