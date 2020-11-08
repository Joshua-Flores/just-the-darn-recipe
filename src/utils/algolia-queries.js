const escapeStringRegexp = require("escape-string-regexp")

const indexName = `Pages`

const pageQuery = `{
    allContentfulPage {
      edges {
        node {
          id
          slug
          title
          body {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }`

function pageToAlgoliaRecord({ node: { id, slug, title, ...rest } }) {
  return {
    objectID: id,
    slug,
    title,
    ...rest,
  }
}

const postQuery = `{
    allContentfulPost {
      edges {
        node {
          id
          slug
          title
          recipeCategory
          recipeCuisine
          heroImage {
            fixed(width: 100, height:75) {
              base64
              tracedSVG
              aspectRatio
              srcWebp
              srcSetWebp
              src
            }
          }
          body {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }`

function postToAlgoliaRecord({ node: { id, slug, title, recipeCategory, recipeCuisine, heroImage, ...body } }) {
  return {
    objectID: id,
    slug,
    title,
    recipeCategory,
    recipeCuisine,
    heroImage,
    ...body
  }
}

const queries = [
  {
    query: pageQuery,
    transformer: ({ data }) => data.allContentfulPage.edges.map(pageToAlgoliaRecord),
    indexName
  },
  {
    query: postQuery,
    transformer: ({ data }) => data.allContentfulPost.edges.map(postToAlgoliaRecord),
    indexName
  },
]

module.exports = queries