import React from 'react'
import styled from 'styled-components'
import Container from 'react-bootstrap/Container'
import { Location } from '@reach/router'

import StyledAnchor from '../components/shared/StyledAnchor'

const FooterWrapper = styled('footer')`
    background-color: #94b09f;
    padding: 20px;
`

const FlexColumn = styled('div')`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-flow: column;
`

const StyledLink = styled(StyledAnchor)`
    margin: 10px 0;
    border-bottom: ${props => props.location === props.href ? '2px solid black' : 'none'};
`

function Footer() {
    return (
        <Location>
            {({ location }) => {
                    return (
                        <FooterWrapper>
                            <Container>
                                <FlexColumn>
                                    <StyledLink href="/" location={location.pathname}>Home</StyledLink>
                                    <StyledLink href="/shop/" location={location.pathname}>Shop</StyledLink>
                                    <StyledLink href="/events/" location={location.pathname}>Event Flowers</StyledLink>
                                    <StyledLink href="/weddings/" location={location.pathname}>Weddings</StyledLink>
                                    <StyledLink href="/gallery/" location={location.pathname}>Gallery</StyledLink>
                                    <StyledLink href="/contact/" location={location.pathname}>Contact</StyledLink>
                                    <StyledLink href="/delivery/" location={location.pathname}>オーダー・配達について</StyledLink>
                                    <p>© Created for Plusminus Ndesign by Noinu ltd.</p>
                                </FlexColumn>
                            </Container>
                        </FooterWrapper>
                    )
            }}
        </Location>
    )
}

export default Footer
