import React from 'react'
import { Link } from 'gatsby'
import { makeStyles } from '@material-ui/core/styles'
import grey from '@material-ui/core/colors/grey'

const useStyles = makeStyles({
  root: {
    fontSize: '1.8em',
    fontWeight: 900,
    textDecoration: 'none',
    '@media (max-width:767.98px)': {
      fontSize: '1.2em',
    },
    color: props => (props.color === 'light' ? 'white' : grey[900]),
    flexGrow: props => props.flexGrow && 1,
  },
})

const Logo = props => {
  const classes = useStyles(props)
  return (
    <Link to="/" className={classes.root}>
      JUST THE DARN RECIPE.
    </Link>
  )
}

export default Logo
