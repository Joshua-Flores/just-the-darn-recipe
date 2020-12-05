import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import { CardActionArea } from 'gatsby-theme-material-ui'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import { styled } from '@material-ui/core/styles'
import Img from 'gatsby-image'
import TotalTime from './about-section/TotalTime'
import Servings from './about-section/Servings'

const useStyles = makeStyles({
  root: {
    height: '100%',
  },
  actionArea: {
    height: '100%',
  },
  defaultImage: {
    height: '260px',
    '@media (max-width:768px)': {
      height: '200px',
    },
  },
})

const HeroImage = styled(Img)({
  width: '100%',
  height: '400px',
  objectFit: 'cover',
  '@media (max-width:425px)': {
    height: '200px',
  },
  stats: {
    display: 'flex',
  },
})

const CardComponent = props => {
  const classes = useStyles()

  return (
    <Card basePath={props.basePath} variant="outlined" className={classes.root}>
      <CardActionArea to={`/${props.to}`} className={classes.actionArea}>
        {props.featuredHeroImage ? (
          <HeroImage fluid={props.featuredHeroImage} />
        ) : (
          <Img fluid={props.image} className={classes.defaultImage} />
        )}
        <CardContent>
          <Typography variant="overline" color="textSecondary">
            {props.publishDate}
          </Typography>
          <Typography variant="h5" component="h2" gutterBottom>
            {props.title}
          </Typography>
          <Typography variant="body2">{props.excerpt}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default CardComponent
