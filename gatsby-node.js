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

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions

    return new Promise((resolve, reject) => {
        const ProductPageTemplate = path.resolve('./src/templates/ProductPage.js')

        readJsonAsync(path.resolve(`src/mockProducts.json`)).then((data) => {
            data.forEach((product) => {
                createPage({
                    path: `/shop/${product.slug}`,
                    component: ProductPageTemplate,
                    context: product,
                })
            });
            resolve();
        });
    })
}

// exports.createPages = ({ actions }) => {
//     const { createPage } = actions
//     const ProductPageTemplate = path.resolve('./src/templates/ProductPage.js')
//     mockProducts.forEach(product => {
//         createPage({
//             path: `/products/${product.slug}`,
//             component: ProductPageTemplate,
//             context: {
//                 id: product.slug,
//             }
//         })
//     })
// }


