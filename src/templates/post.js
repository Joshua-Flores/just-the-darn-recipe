import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Container from '../components/Container'
import PageBody from '../components/PageBody'
import TagList from '../components/TagList'
import PostLinks from '../components/PostLinks'
import PostDetails from '../components/PostDetails'
import SEO from '../components/SEO'

const PostTemplate = ({ data, pageContext }) => {
  const {
    title,
    slug,
    metaDescription,
    heroImage,
    body,
    publishDate,
    publishDateISO,
    tags,
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
      <SEO
        title={title}
        slug={slug}
        description={
          metaDescription
            ? metaDescription.internal.content
            : body.childMarkdownRemark.excerpt
        }
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

      <Container>
        {tags && <TagList tags={tags} basePath={basePath} />}
        <Hero title={title} image={heroImage} height={'50vh'} />
        <PostDetails date={publishDate} />
        <PageBody body={body} />
      </Container>
      <PostLinks previous={previous} next={next} basePath={basePath} />
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
      tags {
        title
        id
        slug
      }
      heroImage {
        title
        fluid(maxWidth: 1800) {
          ...GatsbyContentfulFluid
        }
        ogimg: resize(width: 1800) {
          src
        }
      }
      body {
        childMarkdownRemark {
          html
          excerpt(pruneLength: 320)
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
