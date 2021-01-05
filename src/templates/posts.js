import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Card from '../components/Card'
import Container from '@material-ui/core/Container'
import Pagination from '../components/Pagination'
import SEO from '../components/SEO'
import { startCase } from 'lodash'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import { styled } from '@material-ui/core/styles'
import { makeStyles } from '@material-ui/core/styles'
import HomepageHero from '../components/homepage/Hero'

const LatestPostsHeading = styled(Typography)({
  fontSize: '1.7em',
})

const SecondaryPageGridContainer = styled(Grid)({
  marginTop: '1em',
})

const useStyles = makeStyles({
  card: {
    height: '100%',
  },
})

const Posts = ({ data, pageContext }) => {
  const posts = data.allContentfulPost.edges
  const { humanPageNumber, basePath } = pageContext
  const isFirstPage = humanPageNumber === 1
  let ogImage

  try {
    ogImage = posts[0].node.heroImage.ogimg.src
  } catch (error) {
    ogImage = null
  }

  const classes = useStyles()

  return (
    <Layout>
      <SEO title={startCase(basePath)} image={ogImage} />
      <Container>
        {isFirstPage ? (
          <div>
            <HomepageHero />
            <LatestPostsHeading variant="h5" component="h1">
              Latest Recipes
            </LatestPostsHeading>
            <Grid container spacing={3} alignItems="stretch">
              {posts.map(({ node: post }) => (
                <Grid item lg={4} md={4} sm={6} xs={12} key={post.id}>
                  <Card
                    basePath={basePath}
                    to={post.slug}
                    image={post.heroImage.fluid}
                    publishDate={post.publishDate}
                    title={post.title}
                    excerpt={post.metaDescription.childMarkdownRemark.excerpt}
                  />
                </Grid>
              ))}
            </Grid>
          </div>
        ) : (
          <div>
            <SecondaryPageGridContainer
              container
              spacing={3}
              alignItems="stretch"
            >
              <Grid item lg={12} md={12} sm={12} xs={12}>
                <Typography
                  variant="body1"
                  color="textSecondary"
                  component="h1"
                >{`Latest recipes page ${pageContext.humanPageNumber} of ${pageContext.numberOfPages}`}</Typography>
              </Grid>
              {posts.map(({ node: post }) => (
                <Grid item lg={4} md={4} sm={6} xs={12} key={post.id}>
                  <Card
                    basePath={basePath}
                    to={post.slug}
                    image={post.heroImage.fluid}
                    publishDate={post.publishDate}
                    title={post.title}
                    excerpt={post.metaDescription.childMarkdownRemark.excerpt}
                  />
                </Grid>
              ))}
            </SecondaryPageGridContainer>
          </div>
        )}
        <Pagination context={pageContext} />
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query($skip: Int!, $limit: Int!) {
    allContentfulPost(
      sort: { fields: [publishDate], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          title
          id
          slug
          publishDate(formatString: "MMMM DD, YYYY")
          totalTime
          recipeYield
          heroImage {
            title
            fluid(maxWidth: 400) {
              ...GatsbyContentfulFluid
            }
            ogimg: resize(width: 400) {
              src
            }
          }
          metaDescription {
            id
            childMarkdownRemark {
              excerpt
            }
          }
        }
      }
    }
  }
`

export default Posts
