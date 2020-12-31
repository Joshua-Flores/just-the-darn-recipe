import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import PageTitle from '../components/PageTitle'
import Container from '@material-ui/core/Container'
import SEO from '../components/SEO'
import { makeStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Card from '@material-ui/core/Card'
import { CardActionArea } from 'gatsby-theme-material-ui'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import Img from 'gatsby-image'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles({
  main: {
    marginBottom: '2em',
  },
  tabs: {
    marginBottom: '2em',
  },
  cardImage: {
    height: '160px',
    width: '100%',
    objectFit: 'cover',
    '@media (max-width:600px)': {
      height: '100px',
    },
  },
  cardContent: {
    padding: '.8em',
  },
  cardTitle: {
    lineHeight: '1.4em',
    '@media (max-width:600px)': {
      fontSize: '1em',
    },
  },
})

function TabPanel(props) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && children}
    </div>
  )
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
}

const a11yProps = index => {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  }
}

const BrowseAllRecipes = ({ data }) => {
  const recipes = data.allContentfulPost.edges
  const classes = useStyles()
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  const renderRecipes = recipeCategory =>
    recipes
      .filter(recipe => recipe.node.recipeCategory === recipeCategory)
      .map(recipe => (
        <Grid item xs={6} sm={4} md={3} lg={3} xl={3} key={recipe.node.id}>
          <Card variant="outlined">
            <CardActionArea to={`/${recipe.node.slug}`}>
              <Img
                fluid={recipe.node.heroImage.fluid}
                className={classes.cardImage}
                loading="eager"
              />
              <CardContent className={classes.cardContent}>
                <Typography variant="subtitle1" className={classes.cardTitle}>
                  <strong>{recipe.node.title}</strong>
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      ))

  return (
    <Layout>
      <SEO
        title="Browse All Recipes"
        description="Browse al recipes from justthedarnrecipe.com."
      />
      <Container className={classes.main}>
        <PageTitle>BROWSE ALL RECIPES</PageTitle>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
          className={classes.tabs}
        >
          <Tab label="Breakfast" {...a11yProps(0)} />
          <Tab label="Appetizers" {...a11yProps(1)} />
          <Tab label="Soups" {...a11yProps(2)} />
          <Tab label="Salads" {...a11yProps(3)} />
          <Tab label="Main Courses" {...a11yProps(4)} />
          <Tab label="Sides" {...a11yProps(5)} />
          <Tab label="Desserts" {...a11yProps(6)} />
          <Tab label="Drinks" {...a11yProps(7)} />
        </Tabs>
        <TabPanel value={value} index={0}>
          <Grid container spacing={2}>
            {renderRecipes('Breakfast')}
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Grid container spacing={2}>
            {renderRecipes('Appetizer')}
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Grid container spacing={2}>
            {renderRecipes('Soups')}
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={3}>
          <Grid container spacing={2}>
            {renderRecipes('Salads')}
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={4}>
          <Grid container spacing={2}>
            {renderRecipes('Main course')}
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={5}>
          <Grid container spacing={2}>
            {renderRecipes('Side')}
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={6}>
          <Grid container spacing={2}>
            {renderRecipes('Desserts')}
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={7}>
          <Grid container spacing={2}>
            {renderRecipes('Drinks')}
          </Grid>
        </TabPanel>
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query myQuery {
    allContentfulPost {
      edges {
        node {
          id
          title
          slug
          recipeCategory
          heroImage {
            fluid {
              ...GatsbyContentfulFluid_noBase64
            }
          }
        }
      }
    }
  }
`

export default BrowseAllRecipes
