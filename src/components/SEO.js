import React from 'react'
import Helmet from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

const SEO = ({
  title,
  description,
  image,
  datePublished,
  recipeCuisine,
  recipeCategory,
  prepTime,
  cookTime,
  totalTime,
  keywords,
  recipeYield,
  slug,
}) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            image
            siteUrl
          }
        }
      }
    `
  )

  const defaultImage = site.siteMetadata.siteUrl + site.siteMetadata.image
  const metaDescription = description || site.siteMetadata.description
  const metaImage = 'https:' + image || defaultImage

  return (
    <Helmet
      htmlAttributes={{
        lang: `en`,
      }}
      title={title}
      defaultTitle={site.siteMetadata.title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
    >
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      {/* General tags */}
      <meta name="image" content={image} />
      <meta name="description" content={metaDescription} />s
      {/* OpenGraph tags */}
      <meta
        property="og:url"
        content={site.siteMetadata.siteUrl + '/' + slug}
      />
      <meta property="og:title" content={title} />
      <meta property="og:image" content={metaImage} />
      <meta property="og:description" content={metaDescription} />
      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:image" content={metaImage} />
      <meta name="twitter:description" content={metaDescription} />
    </Helmet>
  )
}

export default SEO
