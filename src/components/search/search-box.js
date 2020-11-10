import React from "react"
import { connectSearchBox } from "react-instantsearch-dom"
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import {
  ThemeProvider,
  withStyles,
  makeStyles,
  createMuiTheme,
} from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: green,
  },
});

const CloseIconWhite = withStyles((theme) => ({
  root: {
    fill: 'white'
  }
}))(CloseIcon)

const SearchBar = withStyles((theme) => ({
  root: {
    backgroundColor: 'hsla(0,0%,20%,1)',
    padding: '0.4em 0em 0.4em 1em',
    color:'white',
  }
}))(Input)

export default connectSearchBox(
  ({ refine, currentRefinement, className, onFocus, closeSearch}) => (
    <form className={className} onSubmit={(e) => e.preventDefault()}>
    <ThemeProvider theme={theme}>
        <SearchBar 
          placeholder="Search"
          fullWidth 
          autoFocus
          onFocus={onFocus}
          onChange={e => refine(e.target.value)}
        value={currentRefinement}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="close search"
                onClick={() => closeSearch()}
              >
            <CloseIconWhite />
              </IconButton>
            </InputAdornment>
          }
          />
        </ThemeProvider>
    </form>
  )
)