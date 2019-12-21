import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'

import FullWidthContainer from '../shared/FullWidthContainer'
import StyledImageContainer from '../shared/StyledImageContainer'
import StyledImage from '../shared/StyledImage'
import Divider from '../shared/Divider'

const ImageText = styled('div')`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: transparent;
`

function ShopHeader () {
    const data = useStaticQuery(graphql`
        query ShopPageQuery {
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

    const ShopHeaderImage = data.allSanityContent.edges[0].node.image.asset.fluid

    return (
        <FullWidthContainer paddingTop={0} paddingBottom={40}>
            <Divider title='Shop' />
            <StyledImageContainer height={300}>
                <StyledImage fluid={ShopHeaderImage} alt={'Shop header image of flowers'} />
                <ImageText>
                    <h4>
                    Mother's Day
                    </h4>
                    <h4>
                    母の日のプレゼント特集
                    </h4>
                    <br />
                    <p>
                        大切奈お母さんへ、
                    <br />
                        感謝の気持ちを届けます
                    </p>
                </ImageText>
            </StyledImageContainer>
        </FullWidthContainer>
    )
}

export default ShopHeader
