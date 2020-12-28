import React from 'react'
import { navigate } from 'gatsby'
import styled from '@emotion/styled'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import { makeStyles } from '@material-ui/core/styles'
import { Button } from 'gatsby-theme-material-ui'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward'

const useStyles = makeStyles({
  formControl: {
    minWidth: 60,
  },
})

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  margin: 2em auto;
`

const Pagination = props => {
  function changePage(e) {
    navigate(
      e.target.value
        ? `${props.context.paginationPath}/${e.target.value}`
        : `${props.context.paginationPath}/`
    )
  }

  const classes = useStyles()

  return (
    <div>
      {props.context.numberOfPages > 1 && (
        <Wrapper>
          {props.context.previousPagePath && (
            <Button
              color="primary"
              variant="contained"
              startIcon={<ArrowBackIcon />}
              to={`${props.context.previousPagePath}`}
            >
              PREV
            </Button>
          )}
          <FormControl className={classes.formControl}>
            <Select
              native
              value={props.context.humanPageNumber}
              onChange={changePage}
              label="Page"
              color="secondary"
            >
              {Array.from({ length: props.context.numberOfPages }, (_, i) => (
                <option value={`${i === 0 ? `` : i + 1}`} key={`page${i + 1}`}>
                  {`Page ${i + 1} of ${props.context.numberOfPages}`}
                </option>
              ))}
            </Select>
          </FormControl>
          {props.context.nextPagePath && (
            <Button
              color="primary"
              variant="contained"
              endIcon={<ArrowForwardIcon />}
              to={`${props.context.nextPagePath}`}
            >
              Next
            </Button>
          )}
        </Wrapper>
      )}
    </div>
  )
}

export default Pagination
