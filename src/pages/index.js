import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import BlockContent from '@sanity/block-content-to-react'

import App from '../components/App'
import FullWidthContainer from '../components/shared/FullWidthContainer'
import StyledImageContainer from '../components/shared/StyledImageContainer'
import StyledImage from '../components/shared/StyledImage'
import Divider from '../components/shared/Divider'
import DividerTitle from '../components/shared/DividerTitle'
import StyledAnchor from '../components/shared/StyledAnchor'
import Button from '../components/shared/Button'
import { SeasonalImageTextWrapper, SeasonalImageText } from '../components//shared/SeasonalImageText'
import ProductCard from '../components/Shop/ProductCard'
import serializers from '../serializers'

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
    background: rgba(255, 255, 255, 0.7);
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

    @media (min-width: 900px) {
        font-size: 20px;
        line-height: 2;
        text-align: left;
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
            sanityMainPage {
                topImage {
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
                eventImage {
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
                weddingImage {
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
                _rawIntroText
                _rawOverlayText
                subheader
                eventText
            }
            sanitySeasonal {
                _rawOverlayText
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
                type {
                    jpCategory
                    enCategory
                }
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

    const topImage = data.sanityMainPage.topImage.asset.fluid
    const eventImage = data.sanityMainPage.eventImage.asset.fluid
    const weddingImage = data.sanityMainPage.weddingImage.asset.fluid
    const products = data.allSanityProduct.nodes
    const instaImages = data.allInstaNode.edges

    return (
        <App>
            <FullWidthContainer>
                <Banner>
                    {data.sanityMainPage.subheader.map(subheader => <BannerText>{subheader}</BannerText>)}
                </Banner>
                <StyledImageContainer height={600}>
                    <StyledImage fluid={topImage} alt='Header image of flowers' height={100} width={100} />
                    <LeadImageTextWrapper>
                         <LeadImageText>
                            <BlockContent blocks={data.sanityMainPage._rawOverlayText} serializers={serializers} />
                         </LeadImageText>
                    </LeadImageTextWrapper>
                </StyledImageContainer>
            </FullWidthContainer>
            <IntroWrapper>
                <Text>
                   <BlockContent blocks={data.sanityMainPage._rawIntroText} serializers={serializers} />
                </Text>
                <SvgImage src={noriko} alt='のりこのサイン' />
            </IntroWrapper>
            <FullWidthContainer>
                <Divider title='Shop' line={true} />
                <StyledImageContainer height={300}>
                    <StyledImage fluid={data.sanitySeasonal.image.asset.fluid} alt='Seasonal flowers' height={100} width={100} />
                    <SeasonalImageTextWrapper>
                        <SeasonalImageText>
                            <BlockContent blocks={data.sanitySeasonal._rawOverlayText} serializers={serializers} />
                        </SeasonalImageText>
                    </SeasonalImageTextWrapper>
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
                        type={product.type.jpCategory}
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
                <Text>{data.sanityMainPage.eventText}</Text>
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
