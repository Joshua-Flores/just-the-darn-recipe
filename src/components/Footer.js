import React from 'react'
import { styled } from '@material-ui/core/styles'
import { Link } from 'gatsby-theme-material-ui'
import IconButton from '@material-ui/core/IconButton'
import TwitterIcon from '@material-ui/icons/Twitter'
import FacebookIcon from '@material-ui/icons/Facebook'
import InstagramIcon from '@material-ui/icons/Instagram'
import Divider from '@material-ui/core/Divider'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import grey from '@material-ui/core/colors/grey'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles({
  root: {
    backgroundColor: grey[200],
    padding: '1em 0 2em 0',
  },
  mainContent: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '0.4em',
    '@media (max-width: 575.98px)': {
      flexDirection: 'column',
      alignItems: 'baseline',
    },
  },
  footerLeft: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  footerRight: {
    '@media (max-width: 575.98px)': {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'baseline',
      'a:first-of-type': {
        marginTop: '1em',
      },
      a: {
        marginBottom: '1em',
      },
    },
  },
  socialLinks: {
    display: 'flex',
    alignItems: 'center',
  },
  copyright: {
    marginTop: '1em',
  },
})

const FooterLogo = styled(Link)({
  fontSize: '1.4em',
  fontWeight: 900,
  color: grey[900],
  textDecoration: 'none',
  marginRight: '2em',
  '&:hover': {
    textDecoration: 'none',
  },
})

const FooterLink = styled(Link)({
  fontWeight: 600,
  color: grey[900],
  textDecoration: 'none',
  '&:hover': {
    textDecoration: 'none',
  },
  margin: '0 2em .4em 0',
})

const Footer = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Container>
        <div className={classes.mainContent}>
          <div className={classes.footerLeft}>
            <FooterLogo to="/">JUST THE DARN RECIPE.</FooterLogo>
            <div className={classes.socialLinks}>
              <IconButton
                aria-label="twitter"
                href="https://twitter.com/TheDarnRecipe"
                target="_blank"
              >
                <TwitterIcon />
              </IconButton>
              <IconButton
                aria-label="facebook"
                href="https://facebook.com/TheDarnRecipe"
                target="_blank"
              >
                <FacebookIcon />
              </IconButton>
              <IconButton
                aria-label="instagram"
                href="https://instagram.com/TheDarnRecipe/"
                target="_blank"
              >
                <InstagramIcon />
              </IconButton>
            </div>
          </div>
          <div className={classes.footerRight}>
            <FooterLink to="/about">About</FooterLink>
            <FooterLink to="/contact">Contact</FooterLink>
          </div>
        </div>

        <Divider />
        <Typography
          variant="body2"
          color="textSecondary"
          className={classes.copyright}
        >
          © 2020 Just the Darn Recipe.
        </Typography>
      </Container>
    </div>
  )
}

export default Footer
