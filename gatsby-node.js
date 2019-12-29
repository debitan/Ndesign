require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
  })

const fs = require('fs')
const path = require('path')

const readJsonAsync = (filepath, callback) => {
    return new Promise((resolve, reject) => {
        fs.readFile(filepath, 'utf-8', function(err, data) {
            if (err) {
                reject(err);
            } else {
                const result = JSON.parse(data);
                if (result) {
                    resolve(result);
                } else {
                    throw new Error("Json parse error");
                }
            }
        });
    });
}

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
                type {
                    jpCategory
                    enCategory
                }
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

    // return new Promise((resolve, reject) => {
    //     const ProductPageTemplate = path.resolve('./src/templates/ProductPage.js')

    //     readJsonAsync(path.resolve(`src/mockProducts.json`)).then((data) => {
    //         data.forEach((product) => {
    //             createPage({
    //                 path: `/shop/${product.slug}`,
    //                 component: ProductPageTemplate,
    //                 context: product,
    //             })
    //         });
    //         resolve();
    //     });
    // })
}
