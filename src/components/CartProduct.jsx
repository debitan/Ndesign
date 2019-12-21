import React, { useState } from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'

import Form from 'react-bootstrap/Form'

import ProductImage from '../components/shared/ProductImage'

const Wrapper = styled('div')`
    display: flex;
    padding-top: 15px;
`

const StyledInfo = styled('div')`
    margin: 10px 20px 10px 0;
    display: flex;
    flex-flow: wrap;
    justify-content: space-between;
    width: inherit;

    @media (min-width: 518px) {
        max-width: 265px;
    }

    @media (min-width: 768px) {
        min-width: 450px;
    }
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

const CartProductImage = styled(ProductImage)`
    margin: 10px 20px 10px 0;
`

function CartProduct({title, slug, price, flower, type, size, quantity, image}) {
    const [ checkoutQuantity, setCheckoutQuantity ] = useState(quantity)

    return(
    <Wrapper>
        <CartProductImage fluid={image} alt={title}/>
        <div>
            <StyledInfo>
                <TitleText>
                    <StyledAnchor href={`/shop/${slug}`}>
                        title
                    </StyledAnchor>
                </TitleText>
                <br />
                <TitleText>
                    <span>¥{Number(price).toLocaleString('jp')}</span>
                </TitleText>
            </StyledInfo>
            <StyledInfo>
                <TypeText>
                    花材：flower
                    <br />
                    タイプ：type
                    <br />
                    サイズ: size
                </TypeText>
                <Form>
                    <Form.Control style={{width: '50px'}} type="number" defaultValue={checkoutQuantity} onChange={e => setCheckoutQuantity(e.target.value)}/>
                    <br />
                <StyledAnchor>削除</StyledAnchor>
                </Form>
            </StyledInfo>
        </div>
    </Wrapper>
    )
}

export default CartProduct
