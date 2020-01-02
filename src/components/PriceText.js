import React from 'react'
import styled, { keyframes } from 'styled-components'

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const Text = styled('span')`
    font-size: 24px;
    font-weight: 500;
    animation: ${fadeIn} 1s linear;
`

const PriceText = ({ price }) => {
    return (
        <Text key={price} >
            ¥{price}
        </Text>
    )
}

export default PriceText
