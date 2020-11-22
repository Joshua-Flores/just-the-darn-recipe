import React from 'react'
import { navigate } from 'gatsby'
import styled from '@emotion/styled'
import InputLabel from '@material-ui/core/InputLabel'
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
  nextButton: {
    marginLeft: '1em',
  },
})

const Wrapper = styled.div`
  width: 100%;
  margin: 2em auto 2em auto;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
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
          <div>
            {props.context.previousPagePath && (
              <Button
                color="primary"
                size="small"
                variant="contained"
                startIcon={<ArrowBackIcon />}
                to={`${props.context.previousPagePath}`}
              >
                PREV
              </Button>
            )}
            {props.context.nextPagePath && (
              <Button
                color="primary"
                size="small"
                variant="contained"
                endIcon={<ArrowForwardIcon />}
                to={`${props.context.nextPagePath}`}
                className={classes.nextButton}
              >
                Next
              </Button>
            )}
          </div>
        </Wrapper>
      )}
    </div>
  )
}

export default Pagination
