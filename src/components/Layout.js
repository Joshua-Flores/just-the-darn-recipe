import React, { useEffect } from 'react'
import Footer from '../components/Footer'
import { ThemeProvider } from '@material-ui/core/styles'
import theme from '../styles/theme'
import CssBaseline from '@material-ui/core/CssBaseline'
import NavBar from '../components/NavBar'
import { makeStyles } from '@material-ui/core/styles'
import CookieConsent, { Cookies } from 'react-cookie-consent'
import { useLocation } from '@reach/router'
import { initializeAndTrack } from 'gatsby-plugin-gdpr-cookies'
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
  cookieNoticeTextContainer: {
    '@media (min-width:600px)': {
      display: 'flex',
      paddingBottom: '16px',
    },
  },
  cookieNoticeTitle: {
    '@media (max-width:599.98px)': { display: 'block' },
    fontWeight: 900,
  },
  cookieNoticeText: {
    '@media (min-width:600px)': {
      marginLeft: '4px',
    },
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
          onAccept={() => {
            Cookies.set('gatsby-gdpr-google-analytics', true)
            initializeAndTrack(location)
          }}
          location="bottom"
          buttonText="ACCEPT"
          enableDeclineButton
          declineButtonText="DECLINE"
          style={{
            background: '#303030',
            boxShadow:
              '0px -2px 8px -1px rgba(0,0,0,0.2), 0px -4px 8px 0px rgba(0,0,0,0.14), 0px -1px 20px 0px rgba(0,0,0,0.12)',
          }}
          declineButtonStyle={{
            backgroundColor: 'hsla(0,0%,0%,0)',
            color: red[300],
            border: `1px solid ${red[300]}`,
            borderRadius: '4px',
            fontWeight: 600,
            marginLeft: '16px',
          }}
          buttonStyle={{
            backgroundColor: green['A400'],
            color: 'white',
            borderRadius: '4px',
            fontWeight: 600,
            color: '#303030',
            marginLeft: '0px',
          }}
          contentStyle={{ marginBottom: '0px' }}
        >
          <div className={classes.cookieNoticeTextContainer}>
            <span className={classes.cookieNoticeTitle}>
              🍪 &nbsp;ANOTHER DARN COOKIE NOTICE
            </span>
            <span className={classes.cookieNoticeText}>
              This site uses cookies for analytical purposes.
            </span>
          </div>
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
