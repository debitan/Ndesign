import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'

import App from '../components/App'
import FullWidthContainer from '../components/shared/FullWidthContainer'
import StyledImageContainer from '../components/shared/StyledImageContainer'
import StyledImage from '../components/shared/StyledImage'


const Banner = styled('div')`
    display: grid;
    grid-template-columns: 1fr;
    justify-content: center;
    align-items: center;
    background-color: #e0e8e3;
    height: 50px;

    div :not(:first-child) {
        display: none
    }

    div :not(:first-child) {
        border-left: solid 1px black;
    }

    @media (min-width: 900px) {
        grid-template-columns: 1fr 1fr 1fr;

        div :not(:first-child){
            display: block;
        }
    }
`

const BannerText = styled('div')`
    font-size: 16px;
    font-weight: 500;
`

const ImageText = styled('div')`
    font-size: 16px;
    font-weight: 600;

    @media (min-width: 900px) {
        font-size: 20px;
        line-height: 2;
        text-align: left;
    }
`

const ImageTextWrapper = styled('div')`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: rgba(255, 255, 255, 0.5);
    padding: 10px;
    width: 80%;

    @media (min-width: 900px) {
        padding: 40px;
        width: fit-content;
        transform: translate(0%, -50%);
        top: 50%;
        left: 0%;
        min-width: 20%;
    }
`

function Shop() {
    const data = useStaticQuery(graphql`
        query HomePageQuery {
            allSanityContent {
            edges {
                node {
                image {
                    asset {
                    fluid {
                        base64
                        aspectRatio
                        src
                        srcSet
                        srcWebp
                        srcSetWebp
                        sizes
                    }
                    }
                }
                }
            }
            }
        }
      `)

    const topImage = data.allSanityContent.edges[0].node.image.asset.fluid

    return (
        <App>
            <FullWidthContainer>
                <Banner>
                    <BannerText>送料　全国一律1,000円</BannerText>
                    <BannerText>オーダーメイドアイテムも承ります</BannerText>
                    <BannerText>ウェディング・イベント装花</BannerText>
                </Banner>
                <StyledImageContainer height={600}>
                    <StyledImage fluid={topImage} alt='Header image of flowers' height={100} width={100} />
                    <ImageTextWrapper>
                        <ImageText>
                            店舗を持たない花屋です<br/>
                            <br/>
                            生花、プリザーブドフラワー、<br/>
                            アーティフィシャルフラワーを駆使し<br/>
                            <br/>
                            それぞれの場面、空間、もの、ひと、に<br/>
                            ［花】を通してデザインを提案します
                        </ImageText>
                    </ImageTextWrapper>
                </StyledImageContainer>
            </FullWidthContainer>
        </App>
    )
}

export default Shop
