import React, { useState } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import { makeStyles } from '@material-ui/core/styles'
import { Link } from 'gatsby'
import grey from '@material-ui/core/colors/grey'
import IconButton from '@material-ui/core/IconButton'
import SearchIcon from '@material-ui/icons/Search'
import { ThemeProvider } from '@material-ui/core/styles'
import darkTheme from '../styles/darkTheme'
import Search from './search'

const searchIndices = [{ name: `Pages`, title: `Pages` }]

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexGrow: 1,
    alignItems: 'center',
  },
  toolbar: {
    width: '100%',
    maxWidth: '1280px',
    margin: 'auto',
    padding: '0px 24px',
    '@media (max-width:599.98px)': {
      padding: '0 16px',
    },
  },
  logo: {
    fontSize: '1.8em',
    fontWeight: 900,
    color: 'white',
    textDecoration: 'none',
    flexGrow: 1,
    '@media (max-width:767.98px)': {
      fontSize: '1.5em',
    },
  },
  menuLinksRight: {
    '@media (max-width:1023.98px)': {
      display: 'none',
    },
  },
  menuItem: {
    fontSize: '1.2em',
    color: grey[400],
    '&:hover': {
      color: 'white',
    },
    textDecoration: 'none',
    fontWeight: 700,
    marginRight: '2em',
    '.active': {
      color: 'white',
    },
  },
})

export default function NavBar() {
  const [searchActive, setSearchActive] = useState(false)
  const classes = useStyles()

  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar position="static" color="primary">
        <Toolbar className={classes.toolbar}>
          {!searchActive && (
            <div className={classes.root}>
              <Link to="/" className={classes.logo}>
                JUST THE DARN RECIPE.
              </Link>
              <div className={classes.menuLinksRight}>
                <Link
                  to="/about"
                  className={classes.menuItem}
                  activeStyle={{ color: 'white' }}
                >
                  About
                </Link>
                <Link
                  to="/contact"
                  className={classes.menuItem}
                  activeStyle={{ color: 'white' }}
                >
                  Contact
                </Link>
              </div>
              <IconButton
                aria-label="search"
                onClick={() => setSearchActive(true)}
              >
                <SearchIcon />
              </IconButton>
            </div>
          )}
          {searchActive && (
            <Search
              indices={searchIndices}
              closeSearch={() => setSearchActive(false)}
            />
          )}
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  )
}
