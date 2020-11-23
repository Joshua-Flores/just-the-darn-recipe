import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import IconButton from '@material-ui/core/IconButton'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import SendTwoToneIcon from '@material-ui/icons/SendTwoTone'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import { CardActionArea } from 'gatsby-theme-material-ui'
import CardContent from '@material-ui/core/CardContent'
import InfoTwoToneIcon from '@material-ui/icons/InfoTwoTone'
import BrowseRecipesIcon from '../../static/images/browse-recipes-icon.svg'
import green from '@material-ui/core/colors/green'

const useStyles = makeStyles({
  head: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '4px 0 4px 16px',
    '@media (min-width:600px)': {
      padding: '8px 24px 8px 24px',
    },
  },
  menuHeading: {
    fontSize: '1.6em',
    fontWeight: 900,
    textDecoration: 'none',
  },
  drawer: {
    borderRadius: '10px 10px 0 0',
  },
  heroIcon: {
    width: '60px',
  },
  new: {
    backgroundColor: green['A400'],
    textTransform: 'uppercase',
    fontSize: '.8em',
    borderRadius: '4px',
    padding: '4px',
    marginLeft: '4px',
  },
  root: {
    height: '60vh',
  },
})

const NavDrawer = props => {
  const classes = useStyles()
  return (
    <SwipeableDrawer
      anchor="bottom"
      open={props.open}
      onOpen={props.handleOpen}
      onClose={props.handleClose}
      PaperProps={{ square: false, className: classes.drawer }}
    >
      <div className={classes.root}>
        <div className={classes.head}>
          <Typography variant="h5" className={classes.menuHeading}>
            JUST THE DARN MENU.
          </Typography>
          <IconButton aria-label="close" onClick={props.handleClose}>
            <KeyboardArrowDownIcon />
          </IconButton>
        </div>
        <Container>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <Card variant="outlined">
                <CardActionArea to="/browse">
                  <CardContent>
                    <img
                      src={BrowseRecipesIcon}
                      alt="browse recipes icon"
                      className={classes.heroIcon}
                    />
                    <Typography variant="body2">
                      <strong>
                        Browse all recipes{' '}
                        <span className={classes.new}>NEW</span>
                      </strong>
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={6}>
              <Card variant="outlined">
                <CardActionArea to="/about">
                  <CardContent>
                    <InfoTwoToneIcon color="secondary" />
                    <Typography variant="body2">
                      <strong>About</strong>
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={6}>
              <Card variant="outlined">
                <CardActionArea to="/contact">
                  <CardContent>
                    <SendTwoToneIcon color="secondary" />
                    <Typography variant="body2">
                      <strong>Contact</strong>
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </div>
    </SwipeableDrawer>
  )
}

export default NavDrawer
