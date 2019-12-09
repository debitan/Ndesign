// require("dotenv").config({
//     path: `.env.${process.env.NODE_ENV}`,
//   })

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions

    const result = await graphql(`
    {
        allSanityProduct(filter: {slug: {current: {ne: null}}}) {
            edges {
            node {
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
    }
    `)

    if (result.errors) {
        throw result.errors
    }

    const products = result.data.allSanityProduct.edges || []
    products.forEach((edge, index) => {
        const path = `/shop/${edge.node.slug.current}`

        createPage({
            path,
            component: require.resolve('./src/templates/ProductPage.js'),
            context: edge.node
        })
    })
}
