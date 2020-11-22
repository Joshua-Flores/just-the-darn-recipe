import React from 'react'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  root: {
    fontSize: '3em',
    fontWeight: 900,
    textAlign: 'center',
    textTransform: 'uppercase',
    margin: '0 0 1em 0',
  },
})

const PageTitle = props => {
  const classes = useStyles()
  return (
    <Typography variant="h1" className={classes.root}>
      {props.children}
    </Typography>
  )
}

export default PageTitle
