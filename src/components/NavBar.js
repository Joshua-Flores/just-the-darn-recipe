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
import MenuIcon from '../../static/images/menu-icon.svg'
import Drawer from './Drawer'
import Logo from './Logo'

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
  menuIconButton: {
    margin: '0px 8px 0px -14px',
    '@media (min-width:1024px)': {
      display: 'none',
    },
  },
})

export default function NavBar() {
  const [searchActive, setSearchActive] = useState(false)
  const [drawerOpen, setDrawerOpen] = useState(false)
  const classes = useStyles()

  const handleDrawerOpen = () => setDrawerOpen(true)
  const handleDrawerClosed = () => setDrawerOpen(false)

  return (
    <React.Fragment>
      <ThemeProvider theme={darkTheme}>
        <AppBar position="static" color="primary">
          <Toolbar className={classes.toolbar}>
            {!searchActive && (
              <div className={classes.root}>
                <IconButton
                  aria-label="open menu"
                  className={classes.menuIconButton}
                  onClick={handleDrawerOpen}
                >
                  <img src={MenuIcon} alt="menu icon" />
                </IconButton>
                <Logo color="light" flexGrow />
                <div className={classes.menuLinksRight}>
                  <Link
                    to="/browse"
                    className={classes.menuItem}
                    activeStyle={{ color: 'white' }}
                  >
                    Browse All Recipes
                  </Link>
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
      <Drawer
        open={drawerOpen}
        handleClose={handleDrawerClosed}
        handleOpen={handleDrawerOpen}
      />
    </React.Fragment>
  )
}
