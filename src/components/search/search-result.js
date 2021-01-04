import { Link } from 'gatsby'
import { default as React } from 'react'
import {
  connectStateResults,
  Highlight,
  Hits,
  Index,
  PoweredBy,
} from 'react-instantsearch-dom'
import Img from 'gatsby-image'
import styled from '@emotion/styled'
import Typography from '@material-ui/core/Typography'

const Thumbnail = styled(Img)`
  width: 100px;
  height: 75px;
  object-fit: cover;
  margin-right: 8px;
  flex-shrink: 0;
`
const HitContainer = styled.div`
  display: flex;
  div:first-of-type {
    width: 100px;
    height: 75px;
  }

  p {
    color: black;
  }
`

const HitCount = connectStateResults(({ searchResults }) => {
  const hitCount = searchResults && searchResults.nbHits
  return hitCount > 0 ? (
    <div className="HitCount">
      {hitCount} result{hitCount !== 1 ? `s` : ``}
    </div>
  ) : null
})

const PageHit = ({ hit }) => (
  <HitContainer>
    {hit.heroImage && <Thumbnail fixed={hit.heroImage.fixed} />}
    <div>
      <Link to={`/${hit.slug}`}>
        <h4>
          <Highlight attribute="title" hit={hit} tagName="mark" />
        </h4>
      </Link>
      {hit.recipeCategory && (
        <p>
          <strong>Category: </strong>
          <Highlight attribute="recipeCategory" hit={hit} tagName="mark" />
        </p>
      )}
      {hit.recipeCuisine && (
        <p>
          <strong>Cuisine: </strong>
          <Highlight attribute="recipeCuisine" hit={hit} tagName="mark" />
        </p>
      )}
    </div>
  </HitContainer>
)

const HitsInIndex = ({ index }) => (
  <Index indexName={index.name}>
    <HitCount />
    <Hits className="Hits" hitComponent={PageHit} />
  </Index>
)

const SearchResult = ({ indices, className }) => (
  <div className={className}>
    {indices.map(index => (
      <HitsInIndex index={index} key={index.name} />
    ))}
    <PoweredBy />
  </div>
)

export default SearchResult
