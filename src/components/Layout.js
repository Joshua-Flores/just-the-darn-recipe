import React, { useEffect } from 'react'
import Footer from '../components/Footer'
import { ThemeProvider } from '@material-ui/core/styles'
import theme from '../styles/theme'
import CssBaseline from '@material-ui/core/CssBaseline'
import NavBar from '../components/NavBar'
import { makeStyles } from '@material-ui/core/styles'
import Helmet from 'react-helmet'

const useStyles = makeStyles({
  root: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
  },
  siteContent: {
    display: 'flex',
    flexDirection: 'column',
    flex: '1 0 auto',
  },
})

const Layout = props => {
  const classes = useStyles()

  function handleFirstTab(e) {
    if (e.keyCode === 9) {
      document.body.classList.add('user-is-tabbing')
    }
  }
  useEffect(() => window.addEventListener('keydown', handleFirstTab), [])

  return (
    <div className={classes.root}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Helmet>
          <script
            async
            defer
            data-domain="justthedarnrecipe.com"
            src="https://plausible.io/js/plausible.js"
          ></script>
        </Helmet>
        <div className={classes.siteContent}>
          <NavBar />
          <div id="main">{props.children}</div>
        </div>
        <Footer />
      </ThemeProvider>
    </div>
  )
}

export default Layout
