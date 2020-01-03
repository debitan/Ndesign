import React from 'react'
import styled from 'styled-components'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import { Location } from '@reach/router'

import StyledAnchor from './shared/StyledAnchor'
import MyContext from './MyContext'
import BasketLink from './BasketLink'

const StyledNavbar = styled(Navbar)`
    background-color: #94b09f;

    button {
        border: none;
        :focus {
            outline: none;
        }
    }
`

const StyledLink = styled(StyledAnchor)`
    align-self: center;
    font-size: 18px;
    margin: 10px 15px;
    border-bottom: ${props => props.location === props.href ? '2px solid black' : 'none'};
`

const StyledBrand = styled(StyledLink)`
    font-size: 26px;
    font-weight: 200;
`

function NavBar () {
    return (
            <MyContext.Consumer>
                {context =>
                    <Location>
                        {({ location }) => {
                            return (
                                <StyledNavbar expand="lg" sticky="top">
                                    <Container>
                                        <StyledBrand href="/">±Ndesign</StyledBrand>
                                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                        <Navbar.Collapse id="basic-navbar-nav">
                                            <Nav className="ml-auto">
                                                <StyledLink href="/shop/" location={location.pathname}>Shop</StyledLink>
                                                <StyledLink href="/events/" location={location.pathname}>Event Flowers</StyledLink>
                                                <StyledLink href="/weddings/" location={location.pathname}>Weddings</StyledLink>
                                                <StyledLink href="/gallery/" location={location.pathname}>Gallery</StyledLink>
                                                <StyledLink href="/contact/" location={location.pathname}>Contact</StyledLink>
                                                <StyledLink href="/checkout/" location={location.pathname}>
                                                    <BasketLink quantity={context.quantityOfItemsInBasket()} />
                                                </StyledLink>
                                            </Nav>
                                        </Navbar.Collapse>
                                    </Container>
                                </StyledNavbar>
                            )
                        }}
                    </Location>
                }
            </MyContext.Consumer>
    )
}

export default NavBar
