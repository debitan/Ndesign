import React, { useState } from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'

import Form from 'react-bootstrap/Form'

const Wrapper = styled('div')`
    display: flex;
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

const ImageWrapper = styled('div')`
    margin: 10px 20px 10px 0;
    width: 200px;
`

function CartProduct({title, slug, price, flower, type, size, quantity, image}) {
    const [ checkoutQuantity, setCheckoutQuantity ] = useState(quantity)

    return(
    <Wrapper>
        <ImageWrapper>
            <Img style={{ width: '100%' }} fluid={image} alt={title}/>
        </ImageWrapper>
        <div>
            <StyledInfo>
                <TitleText>
                    <StyledAnchor href={`/shop/${slug}`}>
                        {title}
                    </StyledAnchor>
                </TitleText>
                <br />
                <TitleText>
                    <span>¥{Number(price).toLocaleString('jp')}</span>
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
            <TotalCost>商品合計　　消費税込　　￥{Number(quantity * price).toLocaleString('jp')}</TotalCost>
        </div>
    </Wrapper>
    )
}

export default CartProduct
