import React from 'react'
import Layout from '../components/Layout'
import Container from '@material-ui/core/Container'
import PageTitle from '../components/PageTitle'
import ContactForm from '../components/ContactForm'
import SEO from '../components/SEO'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  root: {
    maxWidth: '700px',
    marginBottom: '4em',
  },
})

const Contact = ({ data }) => {
  const classes = useStyles()
  return (
    <Layout>
      <SEO title="Contact" description="Contact description goes here" />
      <Container className={classes.root}>
        <PageTitle>Contact</PageTitle>
        <ContactForm />
      </Container>
    </Layout>
  )
}

export default Contact
