import React from 'react'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import { Button } from 'gatsby-theme-material-ui'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward'
import Divider from '@material-ui/core/Divider'

const useStyles = makeStyles({
  headingMain: {
    fontSize: '3em',
    fontWeight: 900,
    marginTop: '1em',
  },
  subheading: {
    lineHeight: '1.4em',
    fontWeight: 500,
    margin: '.2em 0 1em 0',
    '@media (max-width: 575.98px)': {
      margin: '.6em 0 1em 0',
    },
  },
  button: {
    marginBottom: '2em',
  },
})

const Hero = () => {
  const classes = useStyles()

  return (
    <div>
      <Typography variant="h1" className={classes.headingMain}>
        A DIFFERENT KIND OF RECIPE WEBSITE
      </Typography>
      <Typography
        variant="h6"
        className={classes.subheading}
        color="textSecondary"
      >
        No long-winded stories, no scrolling forever - just the darn recipe!
      </Typography>
      <Button
        color="primary"
        variant="contained"
        endIcon={<ArrowForwardIcon />}
        to={`/browse`}
        size="large"
        className={classes.button}
      >
        BROWSE RECIPES
      </Button>
      <Divider />
    </div>
  )
}

export default Hero
