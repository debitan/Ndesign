import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const ImageContainer = styled('div')`
    height: ${props => props.height / 2}px;
    position: relative;

    @media (min-width: 900px) {
        height: ${props => props.height}px;
    }

    @media (min-width: 1200px) {
        max-width: 1200px;
        margin-left: auto;
        margin-right: auto;
    }
`

const StyledImageContainer = ({ height, children }) => {
    return (
        <ImageContainer height={height}>
            {children}
        </ImageContainer>
    )
}

StyledImageContainer.propTypes = {
    height: PropTypes.number.isRequired,
    children: PropTypes.node
}

StyledImageContainer.defaultProps = {
    children: null
}

export default StyledImageContainer
