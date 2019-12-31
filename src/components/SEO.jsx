/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({ lang }) {
  const data = useStaticQuery(graphql`
    query SettingsQuery {
      sanitySiteSettings {
        description
        keywords
      }
      site {
        siteMetadata {
          title
          author
        }
      }
    }
  `)

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={data.site.siteMetadata.title}
      titleTemplate={`%s | ${data.site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: data.sanitySiteSettings.description,
        },
        {
          property: `og:title`,
          content: data.site.siteMetadata.title,
        },
        {
          property: `og:description`,
          content: data.sanitySiteSettings.description,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: data.site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: data.site.siteMetadata.title,
        },
        {
          name: `twitter:description`,
          content: data.sanitySiteSettings.description,
        },
        {
          name: `keywords`,
          content: data.sanitySiteSettings.keywords.map(keyword => `${keyword}`)
        }
      ]}
    />
  )
}

SEO.defaultProps = {
  lang: `ja`,
}

SEO.propTypes = {
  lang: PropTypes.string,
}

export default SEO
