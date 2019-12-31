import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import BlockContent from '@sanity/block-content-to-react'

import FullWidthContainer from '../shared/FullWidthContainer'
import StyledImageContainer from '../shared/StyledImageContainer'
import StyledImage from '../shared/StyledImage'
import Divider from '../shared/Divider'
import { SeasonalImageTextWrapper, SeasonalImageText } from '../shared/SeasonalImageText'
import serializers from '../../serializers'

function ShopHeader () {
    const data = useStaticQuery(graphql`
        query ShopPageQuery {
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
        }
      `)

    const ShopHeaderImage = data.sanitySeasonal.image.asset.fluid

    return (
        <FullWidthContainer paddingTop={0} paddingBottom={40}>
            <Divider title='Shop' />
            <StyledImageContainer height={300}>
                <StyledImage fluid={ShopHeaderImage} alt={'Shop header image of flowers'} />
                <SeasonalImageTextWrapper>
                  <SeasonalImageText>
                    <BlockContent blocks={data.sanitySeasonal._rawOverlayText} serializers={serializers} />
                  </SeasonalImageText>
                </SeasonalImageTextWrapper>
            </StyledImageContainer>
        </FullWidthContainer>
    )
}

export default ShopHeader
