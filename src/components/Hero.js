import React from 'react'
import Img from 'gatsby-image'
import PostDetails from '../components/PostDetails'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  title: {
    fontSize: '3em',
    textTransform: 'uppercase',
    fontWeight: 900,
    margin: '1em auto 0em auto',
  },
  heroImage: {
    marginBottom: '2em',
  },
})

const Hero = props => {
  const classes = useStyles()

  return (
    <div>
      <Typography variant="h1" className={classes.title}>
        {props.title}
      </Typography>
      <PostDetails date={props.date} url={props.url} />
      <Img
        className={classes.heroImage}
        fluid={props.image.fluid}
        loading="eager"
      />
    </div>
  )
}

export default Hero
