import React from 'react'
import styled from 'styled-components'

import StyledHr from '../shared/StyledHr'
import MobileHr from '../shared/MobileHr'
import ProductImage from '../shared/ProductImage'

const Wrapper = styled('div')`
    display: flex;
    flex-flow: row;

    @media (min-width: 900px) {
        flex-flow: row;
    }
`

const StyledInfo = styled('div')`
    display: flex;
    flex-flow: wrap;
    justify-content: space-between;
    width: fill-available;

    @media (min-width: 900px) {
        flex-flow: row;
        margin: 10px 20px 10px 0;
    }
`

const StyledInfoRight = styled(StyledInfo)`
    justify-content: space-around;
    flex: none;
    width: auto;
    flex-direction: column;

    @media (min-width: 900px) {
        justify-content: flex-start;

        p {
            padding-bottom: 20px;
        }
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

const ImageWrapper = styled('div')`
    margin-right: 20px;
    justify-content: center;
    align-items: center;
    display: flex;
`

const MobileWrapper = styled('div')`
    display: flex;
    flex-flow: column;
    width: fill-available;

    div:first-child {
        margin-top: 5px;
    }

    @media (min-width: 900px) {
        flex-flow: row;
    }
`

function ConfirmationProduct({title, slug, price, flower, type, size, quantity, image}) {
    return(
    <>
    <Wrapper>
        <ImageWrapper>
            <ProductImage fluid={image} alt={title} />
        </ImageWrapper>
        <MobileWrapper>
            <StyledInfo>
                <div>
                <TitleText>
                    <StyledAnchor href={`/shop/${slug}`}>
                        title
                    </StyledAnchor>
                </TitleText>
                <TypeText>
                    花材：{flower}
                    <br />
                    タイプ：{type}
                    <br />
                    サイズ: {size}
                </TypeText>
                </div>
            </StyledInfo>
            <StyledInfoRight>
                <TitleText>
                    個数　{quantity}
                </TitleText>
                <TitleText>
                    消費税込　￥{Number(quantity * price).toLocaleString('jp')}
                </TitleText>
            </StyledInfoRight>
        </MobileWrapper>
    </Wrapper>
    <StyledHr />
    <MobileHr />
    </>
    )
}

export default ConfirmationProduct
