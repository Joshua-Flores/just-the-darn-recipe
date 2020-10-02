import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import PageTitle from '../components/PageTitle'
import Container from '../components/Container'
import Layout from '../components/Layout'
import errorImage from '../../static/images/404.svg'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'

import SEO from '../components/SEO'

const Image = styled.img`
  width: 100%;
  margin-bottom: 64px;
`
const ContainerSmall = styled.div`
  max-width: 600px;
  margin: auto;
`

const Button = styled(Link)`
  background: ${props => props.theme.colors.primary};
  margin: auto;
  color: white;
  padding: 1em;
  border-radius: 2px;
  text-decoration: none;
  transition: 0.2s;
  &:hover {
    background: ${props => props.theme.colors.highlight};
    cursor: pointer;
  }
  svg {
    margin: auto 8px -6px auto;
  }
`

const NotFoundPage = ({ data }) => (
  <Layout>
    <SEO title="404" description="Page Not Found" />
    <Container>
      <ContainerSmall>
        <PageTitle>Oops! No recipe here.</PageTitle>
        <Image src={errorImage} alt="404 error" />
        <Button to="/">
          <ArrowBackIcon />
          Home
        </Button>
      </ContainerSmall>
    </Container>
  </Layout>
)

export default NotFoundPage
