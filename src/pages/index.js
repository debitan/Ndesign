import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import App from '../components/App'
import FullWidthContainer from '../components/shared/FullWidthContainer'
import StyledImageContainer from '../components/shared/StyledImageContainer'
import StyledImage from '../components/shared/StyledImage'
import Divider from '../components/shared/Divider'
import DividerTitle from '../components/shared/DividerTitle'
import StyledAnchor from '../components/shared/StyledAnchor'
import Button from '../components/shared/Button'
import ProductCard from '../components/Shop/ProductCard'

import noriko from '../images/noriko.svg'
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

const ButtonWrapper = styled(IntroWrapper)`
    padding: 20px;
`

const TopPaddingFlexWrapper = styled(IntroWrapper)`
    padding: 10px 0 0 0;
`

const ShopContainer = styled('div')`
display: grid;
grid-template-columns: repeat(2, 1fr);
justify-items: center;

@media (min-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
}

@media (min-width: 900px) {
    display: grid;
    align-items: center;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
    justify-content: space-between;

    a:last-child {
        display: none;
    }
}
`

const EventContainer = styled('div')`
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;
    margin-left: calc(50% - 50vw);
    margin-right: calc(50% - 50vw);

    @media (min-width: 900px) {
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 20px;
        padding: 40px 0;
        margin-left: 0;
        margin-right: 0;
    }
`

const EventAnchor = styled(StyledAnchor)`
    width: 100%;
`

const InstagramAnchor = styled(EventAnchor)`
    justify-content: center;
    align-items: center;
    display: flex;
`

const EventImage = styled(Img)`
  width: 100%;

  @media (min-width: 1000px) {
    width: 350px;
    height: 350px;
  }

  @media (min-width: 1200px) {
    width: 500px;
    height: 500px;
  }
`

const EventDiv = styled('div')`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column;
    width: 100%;
    padding-bottom: 15px;

    @media (min-width: 900px) {
        padding-bottom: 0;
    }
`

const EventTitle = styled(DividerTitle)`
    font-size: 20px;
    padding-top: 15px;
    padding-bottom: 10px;
`

const EventTextWrapper = styled(IntroWrapper)`
    padding: 0 0 30px 0;

    @media (min-width: 900px) {
        padding: 0;
    }
`

const TextWithRule = styled('span')`
    color: #757474;
    font-size: 16px;
    border-top: 4px solid black;
    padding: 10px 0;
`

const InstagramTextWrapper = styled('div')`
    display: flex;
    justify-content: center;
    align-items: center;
`

const InstagramText = styled('span')`
    color: #757474;
    font-size: 16px;
`

const InstagramImageWrapper = styled('div')`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    grid-auto-rows: 0;
    justify-items: center;
    padding-top: 40px;
    margin-bottom: -30px;
    grid-gap: 20px;

    @media (min-width: 1000px) {
        grid-template-columns: repeat(5, 1fr);
        padding: 40px 0 10px 0;
        margin-left: 0;
        margin-right: 0;
        margin-bottom: 0;

        img {
            display: block;
        }
    }
`

function Shop() {
    const data = useStaticQuery(graphql`
        query HomePageQuery {
            allSanityContent {
                edges {
                  node {
                    title
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
            allSanityProduct(limit: 4, sort: {fields: _updatedAt, order: DESC}) {
                nodes {
                _rawBody
                slug {
                    current
                }
                variants {
                    price
                    size
                    sku
                }
                title
                images {
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
                colours
                flower
                type
                }
            }
            allInstaNode(sort: {fields: timestamp, order: DESC}, limit: 5) {
                edges {
                  node {
                    id
                    localFile {
                        childImageSharp {
                          fluid {
                            ...GatsbyImageSharpFluid
                          }
                        }
                      }
                  }
                }
            }
        }
      `)

    const topImage = data.allSanityContent.edges.find(edge => edge.node.title === 'メインページ').node.image.asset.fluid
    const eventImage = data.allSanityContent.edges.find(edge => edge.node.title === 'イベントページ').node.image.asset.fluid
    const weddingImage = data.allSanityContent.edges.find(edge => edge.node.title === 'ウエディングページ').node.image.asset.fluid
    const products = data.allSanityProduct.nodes
    const instaImages = data.allInstaNode.edges

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
                <Divider title='Shop' line={true} />
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
            <TopPaddingFlexWrapper>
                <SvgImage src={newItem} alt='新作' />
            </TopPaddingFlexWrapper>
            <ShopContainer>
                {products.map(product =>
                    <ProductCard
                        image={product.images[0].asset.fluid}
                        title={product.title}
                        flower={product.flower}
                        type={product.type}
                        price={product.variants[0].price}
                        url={`/shop/${product.slug.current}`}
                    />
                )}
            </ShopContainer>
            <ButtonWrapper>
                <Button href='/shop'>ショッピングアイテム一覧</Button>
            </ButtonWrapper>
            <FullWidthContainer>
                <Divider title='Event Flowers' line={true} />
            </FullWidthContainer>
            <EventTextWrapper>
                <Text>空間装飾、ウエディング装花、撮影プロップ、店舗ディスプレーデザイン、ギフトetc…短発、定期それぞれ承っています。</Text>
            </EventTextWrapper>
            <EventContainer>
                <EventAnchor href="/event">
                    <EventDiv>
                        <EventImage fluid={eventImage}/>
                        <EventTitle>Event Flowers</EventTitle>
                        <TextWithRule>
                            短発・定期装花
                        </TextWithRule>
                    </EventDiv>
                </EventAnchor>
                <EventAnchor href='/weddings'>
                    <EventDiv>
                        <EventImage fluid={weddingImage}/>
                        <EventTitle>Weddings</EventTitle>
                        <TextWithRule>
                            短発・定期装花
                        </TextWithRule>
                    </EventDiv>
                </EventAnchor>
            </EventContainer>
            <FullWidthContainer>
                <Divider title='Instagram' line={true} />
            </FullWidthContainer>
            <InstagramTextWrapper>
                <InstagramAnchor href={'https://www.instagram.com/plusorminus.ndesign/'} >
                    <InstagramText>@plusorminus.ndesign</InstagramText>
                </InstagramAnchor>
            </InstagramTextWrapper>
            <InstagramImageWrapper>
                {instaImages.map(post =>
                    <EventAnchor href={`https://www.instagram.com/p/${post.node.id}/`} >
                        <StyledImage fluid={post.node.localFile.childImageSharp.fluid} height={100} weight={100} />
                    </EventAnchor>
                )}
            </InstagramImageWrapper>
            <ButtonWrapper>
                <Button href='https://www.instagram.com/plusorminus.ndesign/'>インストグラム一覧</Button>
            </ButtonWrapper>
        </App>
    )
}

export default Shop
