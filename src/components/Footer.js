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
import { Button } from 'gatsby-theme-material-ui'

const useStyles = makeStyles({
  root: {
    backgroundColor: grey[200],
    padding: '1em 0 2em 0',
    '@media (max-width: 575.98px)': {
      padding: '2em 0 1em 0',
    },
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
      marginLeft: '-12px',
    },
  },
  socialLinks: {
    display: 'flex',
    alignItems: 'center',
    '@media (max-width: 575.98px)': {
      marginLeft: '-12px',
    },
  },
  copyright: {
    marginTop: '1em',
  },
})

const FooterLogo = styled(Link)({
  fontSize: '1.6em',
  fontWeight: 900,
  color: grey[900],
  textDecoration: 'none',
  marginRight: '2em',
  '&:hover': {
    textDecoration: 'none',
  },
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
                rel="noreferrer"
              >
                <TwitterIcon />
              </IconButton>
              <IconButton
                aria-label="facebook"
                href="https://facebook.com/TheDarnRecipe"
                target="_blank"
                rel="noreferrer"
              >
                <FacebookIcon />
              </IconButton>
              <IconButton
                aria-label="instagram"
                href="https://instagram.com/TheDarnRecipe/"
                target="_blank"
                rel="noreferrer"
              >
                <InstagramIcon />
              </IconButton>
            </div>
          </div>
          <div className={classes.footerRight}>
            <Button to="/about" size="large">
              ABOUT
            </Button>
            <Button to="/contact" size="large">
              CONTACT
            </Button>
            <Button to="/privacy-policy" size="large">
              PRIVACY POLICY
            </Button>
          </div>
        </div>

        <Divider />
        <Typography variant="body2" className={classes.copyright}>
          © 2021 JUST THE DARN RECIPE.
        </Typography>
      </Container>
    </div>
  )
}

export default Footer
