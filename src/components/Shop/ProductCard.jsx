import React from 'react'
import styled from 'styled-components'
// import Img from 'gatsby-image'

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

function ProductCard({ title, sku, flower, type, price, image, url }) {
    return (
      <StyledAnchor href={url}>
        <Card key={sku}>
          <img style={{ width: '100%' }} src={image} />
          <h4>{title}</h4>
          <p>¥{price}</p>
          <p>花材：{flower}</p>
          <p>タイプ：{type}</p>
        </Card>
      </StyledAnchor>
    )
}

export default ProductCard
