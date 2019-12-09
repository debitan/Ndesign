import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'

import StyledHr from '../shared/StyledHr'
import MobileHr from '../shared/MobileHr'

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

const StyledInfoRight = styled(StyledInfo)`
    justify-content: space-around;
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
    min-width: 200px;
`

function ConfirmationProduct({title, slug, price, flower, type, size, quantity, image}) {
    return(
    <>
    <Wrapper>
        <ImageWrapper>
            <Img fluid={image} alt={title} />
        </ImageWrapper>
        <div>
        <StyledInfo>
            <TitleText>
                <StyledAnchor href={`/shop/${slug}`}>
                    {title}
                </StyledAnchor>
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
        </StyledInfo>
        </div>
        <StyledInfoRight>
            <TitleText>
                <p>個数　{quantity}</p>
            </TitleText>
            <TitleText>
                <span>消費税込　￥{Number(quantity * price).toLocaleString('jp')}</span>
            </TitleText>
        </StyledInfoRight>
    </Wrapper>
    <StyledHr />
    <MobileHr />
    </>
    )
}

export default ConfirmationProduct
