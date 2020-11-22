import React from 'react'
import styled from '@emotion/styled'
import { makeStyles } from '@material-ui/core/styles'
import { Button } from 'gatsby-theme-material-ui'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward'

const Wrapper = styled.div`
  margin: 2em 0 0 0;
  padding: 0 1.5em 2em;
`

const Box = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  width: 100%;
  max-width: ${props => props.theme.sizes.maxWidthCentered};
`

const PostLinks = props => {
  return (
    <Wrapper>
      <Box>
        {props.previous && (
          <Button
            color="primary"
            size="small"
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
            size="small"
            variant="contained"
            endIcon={<ArrowForwardIcon />}
            to={`${props.basePath}/${props.next.slug}/`}
          >
            Next
          </Button>
        )}
      </Box>
    </Wrapper>
  )
}

export default PostLinks
