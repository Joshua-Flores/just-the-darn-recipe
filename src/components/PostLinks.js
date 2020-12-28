import React from 'react'
import styled from '@emotion/styled'
import { makeStyles } from '@material-ui/core/styles'
import { Button } from 'gatsby-theme-material-ui'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward'

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: props => (props.previous ? 'space-between' : 'flex-end'),
    margin: '2em auto auto auto',
    width: '100%',
  },
})

const PostLinks = props => {
  const classes = useStyles(props)
  return (
    <div className={classes.root}>
      {props.previous && (
        <Button
          color="primary"
          variant="contained"
          startIcon={<ArrowBackIcon />}
          to={`${props.basePath}/${props.previous.slug}/`}
        >
          PREV
        </Button>
      )}
      {props.next && (
        <Button
          color="primary"
          variant="contained"
          endIcon={<ArrowForwardIcon />}
          to={`${props.basePath}/${props.next.slug}/`}
        >
          Next
        </Button>
      )}
    </div>
  )
}

export default PostLinks
