import React from 'react'
import styled from '@emotion/styled'
import PageTitle from '../components/PageTitle'
import Container from '@material-ui/core/Container'
import Layout from '../components/Layout'
import errorImage from '../../static/images/404.svg'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import { Button } from 'gatsby-theme-material-ui'
import SEO from '../components/SEO'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  root: {
    textAlign: 'center',
  },
  button: {
    margin: 'auto',
  },
})

const Image = styled.img`
  width: 100%;
  margin: 4em auto 1em auto;
`

const NotFoundPage = ({ data }) => {
  const classes = useStyles()
  return (
    <Layout>
      <SEO title="404" description="Page Not Found" />
      <Container className={classes.root}>
        <Image src={errorImage} alt="404 error" />
        <PageTitle>Oops! No recipe here.</PageTitle>
        <Button
          className={classes.button}
          color="primary"
          size="large"
          variant="contained"
          startIcon={<ArrowBackIcon />}
          to="/"
        >
          HOME
        </Button>
      </Container>
    </Layout>
  )
}

export default NotFoundPage
