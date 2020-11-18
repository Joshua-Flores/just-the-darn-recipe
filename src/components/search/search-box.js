import React from 'react'
import { connectSearchBox } from 'react-instantsearch-dom'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import Input from '@material-ui/core/Input'
import InputAdornment from '@material-ui/core/InputAdornment'
import { styled } from '@material-ui/core/styles'
import grey from '@material-ui/core/colors/grey'

const SearchInput = styled(Input)({
  background: grey[800],
  padding: '.4em .4em .4em 1em',
})

export default connectSearchBox(
  ({ refine, currentRefinement, className, onFocus, closeSearch }) => (
    <form className={className} onSubmit={e => e.preventDefault()}>
      <SearchInput
        placeholder="Search"
        fullWidth
        color="secondary"
        autoFocus
        onFocus={onFocus}
        onChange={e => refine(e.target.value)}
        value={currentRefinement}
        endAdornment={
          <InputAdornment position="end">
            <IconButton aria-label="close search" onClick={() => closeSearch()}>
              <CloseIcon />
            </IconButton>
          </InputAdornment>
        }
      />
    </form>
  )
)
