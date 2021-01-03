import React from 'react'
import { navigate } from 'gatsby'
import { makeStyles } from '@material-ui/core/styles'
import Pagination from '@material-ui/lab/Pagination'

const useStyles = makeStyles({
  root: {
    margin: '2em auto',
    '& ul': {
      justifyContent: 'center',
    },
  },
})

const MUIPagination = props => {
  const classes = useStyles()
  const handleChange = (event, value) => {
    navigate(value !== 1 ? `/${value}` : `/`)
  }

  return (
    <Pagination
      className={classes.root}
      count={props.context.numberOfPages}
      siblingCount={0}
      color="primary"
      size="large"
      onChange={handleChange}
      page={props.context.humanPageNumber}
    />
  )
}

export default MUIPagination
