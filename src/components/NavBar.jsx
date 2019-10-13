import React from 'react'
import styled from 'styled-components'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

import Basket from '../images/basket.svg'

const StyledNavbar = styled(Navbar)`
    background-color: #CDCBD7;
    padding: 20px;
`

const StyledLink = styled(Nav.Link)`
    margin: 10px;
    font-weight: bold;
    align-self: center;
`

const StyledImg = styled('img')`
    height: 22px;
    width: 22px;
    margin-bottom: 6px;
`

const BasketLink = styled(StyledLink)`
    margin-right: 30px;
`

const StyledBrand = styled(Navbar.Brand)`
    font-size: 26px;
    margin-left: 18px;
`

function NavBar () {
    return (
        <StyledNavbar expand="lg" sticky="top">
            <StyledBrand href="#home">±Ndesign</StyledBrand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <StyledLink href="#shop">Shop</StyledLink>
                    <StyledLink href="#event">Event</StyledLink>
                    <StyledLink href="#about">About</StyledLink>
                    <BasketLink href="#basket">
                        <StyledImg src={Basket} alt="basket"/>
                    </BasketLink>
                </Nav>
            </Navbar.Collapse>
        </StyledNavbar>
    )
}

export default NavBar
