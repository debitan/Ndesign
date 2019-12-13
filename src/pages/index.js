import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'

import App from '../components/App'
import FullWidthContainer from '../components/shared/FullWidthContainer'
import StyledImageContainer from '../components/shared/StyledImageContainer'
import StyledImage from '../components/shared/StyledImage'
import Divider from '../components/shared/Divider'

import noriko from '../images/noriko.svg'
import shop from '../images/shop.svg'
import newItem from '../images/newItem.svg'


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

const Text = styled(BannerText)`
    font-size: 14px;

    @media (min-width: 900px) {
        font-size: 16px;
    }
`


const LeadImageTextWrapper = styled('div')`
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

const LeadImageText = styled('div')`
    font-size: 16px;
    font-weight: 600;

    @media (min-width: 900px) {
        font-size: 20px;
        line-height: 2;
        text-align: left;
    }
`

const ShopImageTextWrapper = styled('div')`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: rgba(255, 255, 255, 0.5);
    padding: 10px;
    height: 100%;
    min-width: 33%;
    width: fit-content;
`

const ShopImageText = styled('div')`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column;
    font-size: 16px;
    font-weight: 500;
    align-self: baseline;

    @media (min-width: 900px) {
        align-self: auto;
    }
`

const ShopImageTextTitle = styled('h3')`
    font-weight: 400;
`

const ShopImageSubText = styled('span')`
    display: none;

    @media (min-width: 900px) {
        display: block;
    }
`

const IntroWrapper = styled('div')`
        display: flex;
        flex-flow: column;
        justify-content: center;
        align-items: center;
        padding: 40px 40px 0px 40px;
        line-height: 2;
        text-align: center;
`

const SvgImage = styled('img')`
    padding: 30px 0;
`

const SeeMoreButton = styled('a')`
    width: 50%;
    border: 3px solid black;
    border-radius: 100em;
    color: black;
    text-decoration: none;
    padding: 5px;
    margin-bottom: 10px;

    :hover {
        text-decoration: none;
        color: black;
    }

    @media (min-width: 900px) {
        width: 25%;
    }
`

const ButtonWrapper = styled(IntroWrapper)`
    padding: 40px;
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
                    <LeadImageTextWrapper>
                        <LeadImageText>
                            店舗を持たない花屋です<br/>
                            <br/>
                            生花、プリザーブドフラワー、<br/>
                            アーティフィシャルフラワーを駆使し<br/>
                            <br/>
                            それぞれの場面、空間、もの、ひと、に<br/>
                            『花』を通してデザインを提案します
                        </LeadImageText>
                    </LeadImageTextWrapper>
                </StyledImageContainer>
            </FullWidthContainer>
            <IntroWrapper>
                <Text>
                    一人ひとりに合わせたオーダーメイドをつくりたくて<br />
                    （あなたの好み）±NDesignという名前をつけました。<br />
                    <br />
                    量産はせず、オーダーメイドで心を込めてお作ります。<br />
                    <br />
                    フラワーデサインの仕事に就いてから<br />
                    生活のどんなところにも花を混ぜ込んで行きたくて、<br />
                    ディスプレイからアクセサリーまで<br />
                    それぞれの場面、空間、もの、ひと、に『花』を通じて<br />
                    幅広く生活しています。<br />
                </Text>
                <SvgImage src={noriko} alt='のりこのサイン' />
            </IntroWrapper>
            <FullWidthContainer>
                <Divider title={shop} alt='Shop' line={true} />
                <StyledImageContainer height={300}>
                    <StyledImage fluid={topImage} alt='Header image of flowers' height={100} width={100} />
                    <ShopImageTextWrapper>
                        <ShopImageText>
                            <ShopImageTextTitle>
                                Mother's Day
                            </ShopImageTextTitle>
                            <h4>
                                母のひのプレゼント特集
                            </h4>
                            <h4>
                                受付中
                            </h4>
                            <br/>
                            <br/>
                            <ShopImageSubText>
                            大切なお母さんへ、<br/>
                            感謝の気持ちを届けます。
                            </ShopImageSubText>
                        </ShopImageText>
                    </ShopImageTextWrapper>
                </StyledImageContainer>
            </FullWidthContainer>
            <ButtonWrapper>
                <SeeMoreButton href='/shop'>もっと見る</SeeMoreButton>
                <SvgImage src={newItem} alt='新作' />
            </ButtonWrapper>
        </App>
    )
}

export default Shop
