import styled from 'styled-components'
import Img from 'gatsby-image'

const ProductImage = styled(Img)`
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

export default ProductImage
