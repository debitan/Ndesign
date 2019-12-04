import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'

const Card = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  padding: 1rem;
  margin-bottom: 1rem;
  background-color: #fff;
  border-radius: 6px;
  max-width: 300px;
`

const StyledAnchor = styled('a')`
  color: black;
  text-decoration: none;

  :hover, :visited {
    color: black;
    text-decoration: none;
  }
`

const TitleText = styled('p')`
  font-size: 16px;
  font-weight: 500;
`

const TypeText = styled('p')`
  color: grey;
`

function ProductCard({ title, sku, flower, type, price, image, url }) {
    return (
      <StyledAnchor href={url}>
        <Card key={sku}>
          <Img style={{ width: '100%' }} fluid={image} alt={title} />
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
