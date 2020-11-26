import React, { useEffect } from 'react'
import Footer from '../components/Footer'
import { ThemeProvider } from '@material-ui/core/styles'
import theme from '../styles/theme'
import CssBaseline from '@material-ui/core/CssBaseline'
import NavBar from '../components/NavBar'
import { makeStyles } from '@material-ui/core/styles'
import CookieConsent from 'react-cookie-consent'
import green from '@material-ui/core/colors/green'
import red from '@material-ui/core/colors/red'

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
        <CookieConsent
          location="bottom"
          buttonText="I ACCEPT"
          enableDeclineButton
          declineButtonText="OPT OUT"
          cookieName="gatsby-gdpr-google-analytics"
          style={{ background: '#212121' }}
          declineButtonStyle={{ backgroundColor: red[500] }}
          buttonStyle={{ backgroundColor: green[500], color: 'white' }}
        >
          🍪
          <strong>
            &nbsp;ANOTHER DARN COOKIE NOTICE<br></br>
          </strong>
          This site uses cookies from Google Analytics to analyze traffic and
          improve the user experience.
        </CookieConsent>
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
