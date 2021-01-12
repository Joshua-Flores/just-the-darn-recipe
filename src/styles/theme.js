import { createMuiTheme } from '@material-ui/core/styles'
import grey from '@material-ui/core/colors/grey'
import green from '@material-ui/core/colors/green'

const theme = createMuiTheme({
  overrides: {
    MuiCssBaseline: {
      '@global': {
        body: {
          height: '100%',
        },
        html: {
          height: '100%',
        },
        '.ais-Highlight-highlighted': {
          backgroundColor: green['A200'],
        },
        a: {
          color: '#121212',
        },
      },
    },
  },
  palette: {
    primary: {
      main: grey[900],
    },
    secondary: {
      main: green[500],
    },
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    h5: {
      fontWeight: 700,
      lineHeight: '1.2em',
    },
  },
})

export default theme
