import React from 'react'
import ServingsIcon from '../../../static/images/servings-icon.svg'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  root: {
    display: 'flex',
    alignItems: 'center',
    '@media (max-width:768px)': {
      width: '50%',
      marginBottom: '1.4em',
    },
  },
  icon: {
    marginRight: '8px',
    width: '32px',
  },
  statName: {
    lineHeight: 2,
    fontWeight: 600,
  },
  statValue: {
    fontWeight: 700,
    lineHeight: 1,
  },
})

const PrepTime = props => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <img src={ServingsIcon} alt="servings" className={classes.icon} />
      <div>
        <Typography variant="overline" className={classes.statName}>
          Servings
        </Typography>
        <Typography
          variant="h6"
          className={classes.statValue}
          color="secondary"
        >
          {props.servings}
        </Typography>
      </div>
    </div>
  )
}

export default PrepTime
