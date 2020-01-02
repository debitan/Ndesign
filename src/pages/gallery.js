import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import App from '../components/App'
import ImageGallery from '../components/ImageGallery'

const Gallery = () => {
    const data = useStaticQuery(graphql`
    query GalleryQuery {
        sanityGalleryPage {
          galleryImages {
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

    return (
        <App>
            <ImageGallery
                itemsPerRow={3}
                images={data.sanityGalleryPage.galleryImages.map(image => image.asset.fluid)}
            />
        </App>
    )
}

export default Gallery
