import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'

import ShopDivider from './ShopDivider'
import ProductCard from './ProductCard'

import mockProducts from '../../mockProducts.json'
import product1 from '../../images/product1.jpg'

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
        query MyQuery {
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
                    type
                }
            }
        }
    `)
    return (
        <>
            <ShopDivider ProductTypeEN="Bouquet" ProductTypeJP="ブーケ" />
                <StyledContainer>
                    {allSanityProduct.nodes.map(product => product.type === 'ブーケ' ?
                        <ProductCard
                            image={product.images[0].asset.fluid}
                            title={product.title}
                            flower={product.flower}
                            type={product.type}
                            price={product.variants[0].price}
                            url={`/shop/${product.slug.current}`}
                        />
                    : null
                    )}
                </StyledContainer>
            <ShopDivider ProductTypeEN="Decoration" ProductTypeJP="デコレーション" />
                <StyledContainer>
                    {mockProducts.map(product => product.category === 'decoration' ?
                        <ProductCard
                            image={product1}
                            title={product.title}
                            flower={product.flower}
                            type={product.type}
                            price={product.price}
                            url={`/shop/${product.slug}`}
                        />
                    : null
                    )}
                </StyledContainer>
            <ShopDivider ProductTypeEN="Accessories" ProductTypeJP="アクセサリー" />
                <StyledContainer>
                    {mockProducts.map(product => product.category === 'accessory' ?
                        <ProductCard
                            image={product1}
                            title={product.title}
                            flower={product.flower}
                            type={product.type}
                            price={product.price}
                            url={`/shop/${product.slug}`}
                        />
                    : null
                    )}
                </StyledContainer>
        </>
    )
}

export default Products
