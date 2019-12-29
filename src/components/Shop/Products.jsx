import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'

import ProductCard from './ProductCard'
import BilingualDivider from '../shared/BilingualDivider'

const StyledContainer = styled('div')`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-items: center;

    @media (min-width: 900px) {
        display: grid;
        align-items: center;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 20px;
        justify-content: space-between;
    }
`

function Products () {
    const { allSanityProduct } = useStaticQuery(graphql`
        query ProductQuery {
            allSanityProduct {
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
        }
    `)
    return (
        <>
            <BilingualDivider
                title="Bouquet"
                JPTitle="ブーケ"
            />
                <StyledContainer>
                    {allSanityProduct.nodes.map(product => product.type.jpCategory === 'ブーケ' ?
                        <ProductCard
                            image={product.images[0].asset.fluid}
                            title={product.title}
                            flower={product.flower}
                            type={product.type.jpCategory}
                            price={product.variants[0].price}
                            url={`/shop/${product.slug.current}`}
                        />
                    : null
                    )}
                </StyledContainer>
            <BilingualDivider
                title="Decoration"
                JPTitle="デコレーション"
            />
                <StyledContainer>
                    {allSanityProduct.nodes.map(product => product.type.jpCategory === 'デコレーション' ?
                        <ProductCard
                        image={product.images[0].asset.fluid}
                        title={product.title}
                        flower={product.flower}
                        type={product.type.jpCategory}
                        price={product.variants[0].price}
                        url={`/shop/${product.slug.current}`}
                        />
                    : null
                    )}
                </StyledContainer>
            <BilingualDivider
                title="Accessories"
                JPTitle="アクセサリー"
            />
                <StyledContainer>
                    {allSanityProduct.nodes.map(product => product.type.jpCategory === 'アクセサリー' ?
                        <ProductCard
                        image={product.images[0].asset.fluid}
                        title={product.title}
                        flower={product.flower}
                        type={product.type.jpCategory}
                        price={product.variants[0].price}
                        url={`/shop/${product.slug.current}`}
                        />
                    : null
                    )}
                </StyledContainer>
        </>
    )
}

export default Products
