import React from 'react'
import Img from 'gatsby-image'
import styled from '@emotion/styled'

const Title = styled.h1`
  font-size: 3em;
  text-transform: uppercase;
  font-weight: 900;
  margin: 0.4em auto 0.8em auto;
`
const BgImg = styled(Img)`
  margin-bottom: 2em;
`

const Hero = props => (
  <div>
    <Title>{props.title}</Title>
    <BgImg fluid={props.image.fluid} />
  </div>
)

export default Hero
