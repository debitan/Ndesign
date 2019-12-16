import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'

import StyledAnchor from '../shared/StyledAnchor'

const Card = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 1rem;
  background-color: #fff;
  border-radius: 6px;
  width: 100%;
`

const TitleText = styled('p')`
  font-size: 16px;
  font-weight: 500;
  padding-top: 10px;

  @media (min-width: 480px) {
    font-size: 16px;
  }
`

const TypeText = styled('p')`
  font-size: 14px;
  color: grey;

  @media (min-width: 480px) {
    font-size: 16px;
  }
`

const StyledImage = styled(Img)`
  width: 140px;
  height: 140px;

  @media (min-width: 480px) {
    width: 200px;
    height: 200px;
  }

  @media (min-width: 1000px) {
    width: 250px;
    height: 250px;
  }

  @media (min-width: 1200px) {
    width: 300px;
    height: 300px;
  }
`

function ProductCard({ title, sku, flower, type, price, image, url }) {
    return (
      <StyledAnchor href={url}>
        <Card key={sku}>
          <StyledImage fluid={image} alt={title} />
          <TitleText>
            {title}
            <br />
            消費税込 ¥{price}
          </TitleText>
          <TypeText>
            花材：{flower}
            <br />
            タイプ：{type}
          </TypeText>
        </Card>
      </StyledAnchor>
    )
}

export default ProductCard
