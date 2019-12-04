import React, { useState } from 'react'
import styled from 'styled-components'

import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import ProductImage from '../images/product1.jpg'

const Wrapper = styled('div')`
    display: flex;
`

const StyledImage = styled('img')`
    margin: 10px 20px 10px 0;
    height: 200px;
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

const TotalCost = styled(StyledInfo)`
    justify-content: flex-end;
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

function CartProduct({title, slug, price, flower, type, size, quantity}) {
    const [ checkoutQuantity, setCheckoutQuantity ] = useState(quantity)

    return(
    <Wrapper>
        <StyledImage src={ProductImage} alt={title} />
        <div>
        <StyledInfo>
            <TitleText>
                <StyledAnchor href={`/shop/${slug}`}>
                    {title}
                </StyledAnchor>
            </TitleText>
            <br />
            <TitleText>
                <span>¥{price}</span>
            </TitleText>
        </StyledInfo>
        <StyledInfo>
            <TypeText>
                花材：{flower}
                <br />
                タイプ：{type}
                <br />
                サイズ: {size}
            </TypeText>
            <Form>
                <Form.Control style={{width: '50px'}} type="number" defaultValue={checkoutQuantity} onChange={e => setCheckoutQuantity(e.target.value)}/>
                <br />
            <StyledAnchor>削除</StyledAnchor>
            </Form>
        </StyledInfo>
    <TotalCost>商品合計　　消費税込　　￥{quantity * price}</TotalCost>
        </div>
    </Wrapper>
    )
}

export default CartProduct
