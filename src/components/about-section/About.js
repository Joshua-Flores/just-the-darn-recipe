import React from 'react'
import PrepTime from './PrepTime'
import CookTime from './CookTime'
import TotalTime from './TotalTime'
import Servings from './Servings'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    margin: 'auto',
    justifyContent: 'space-between',
    '@media (max-width:767.98px)': {
      justifyContent: 'inherit',
    },
  },
})

const About = props => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <PrepTime prepTime={props.prepTime} className={classes.stat} />
      <CookTime cookTime={props.cookTime} />
      <TotalTime totalTime={props.totalTime} />
      <Servings servings={props.servings} />
    </div>
  )
}

export default About
