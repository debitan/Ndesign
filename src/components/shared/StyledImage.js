import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'

const Image = styled(Img)`
    height: ${props => props.height}%;
    width: ${props => props.width}%;
`

const StyledImage = ({ fluid, alt, height, width }) => {
    return (
        <Image fluid={fluid} alt={alt} height={height} width={width} />
    )
}

StyledImage.propTypes = {
    height: PropTypes.number,
    width: PropTypes.number,
    fluid: PropTypes.node.isRequired,
    alt: PropTypes.string.isRequired
}

StyledImage.defaultProps = {
    height: 100,
    width: 100
}

export default StyledImage
