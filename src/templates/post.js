import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Container from '@material-ui/core/Container'
import PageBody from '../components/PageBody'
import PostLinks from '../components/PostLinks'
import PostSEO from '../components/PostSEO'
import About from '../components/about-section/About'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  recipeBody: {
    maxWidth: '700px',
    margin: 'auto auto 2em auto',
  },
})

const PostTemplate = ({ data, pageContext }) => {
  const classes = useStyles()
  const {
    title,
    slug,
    metaDescription,
    heroImage,
    body,
    publishDate,
    publishDateISO,
    recipeCuisine,
    recipeCategory,
    prepTime,
    cookTime,
    totalTime,
    keywords,
    recipeYield,
  } = data.contentfulPost

  const previous = pageContext.prev
  const next = pageContext.next
  const { basePath } = pageContext

  let ogImage
  try {
    ogImage = heroImage.ogimg.src
  } catch (error) {
    ogImage = null
  }

  return (
    <Layout>
      <PostSEO
        title={title}
        slug={slug}
        description={metaDescription.internal.content}
        image={ogImage}
        datePublished={publishDateISO}
        recipeCuisine={recipeCuisine}
        recipeCategory={recipeCategory}
        prepTime={prepTime}
        cookTime={cookTime}
        totalTime={totalTime}
        keywords={keywords}
        recipeYield={recipeYield}
      />

      <Container maxWidth="md">
        <Hero
          title={title}
          image={heroImage}
          height={'50vh'}
          date={publishDate}
          url={slug}
        />
        <div className={classes.recipeBody}>
          <About
            prepTime={prepTime}
            cookTime={cookTime}
            totalTime={totalTime}
            servings={recipeYield}
          />
          <PageBody body={body} />
          <PostLinks previous={previous} next={next} basePath={basePath} />
        </div>
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    contentfulPost(slug: { eq: $slug }) {
      title
      slug
      metaDescription {
        internal {
          content
        }
      }
      publishDate(formatString: "MMMM DD, YYYY")
      publishDateISO: publishDate(formatString: "YYYY-MM-DD")
      heroImage {
        title
        fluid(maxWidth: 920, quality: 100) {
          ...GatsbyContentfulFluid
        }
        ogimg: resize(width: 920, quality: 100) {
          src
        }
      }
      body {
        childMarkdownRemark {
          html
        }
      }
      recipeCuisine
      recipeCategory
      prepTime
      cookTime
      totalTime
      keywords
      recipeYield
    }
  }
`

export default PostTemplate
