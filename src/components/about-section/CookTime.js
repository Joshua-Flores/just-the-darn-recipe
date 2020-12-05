import React from 'react'
import CookTimeIcon from '../../../static/images/cook-time-icon.svg'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import moment from 'moment'

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
      <img src={CookTimeIcon} alt="cook time" className={classes.icon} />
      <div>
        <Typography variant="overline" className={classes.statName}>
          Cook time
        </Typography>
        <Typography
          variant="h6"
          className={classes.statValue}
          color="secondary"
        >
          {props.cookTime === 'PT0M'
            ? 'none 🎉'
            : moment.duration(props.cookTime).humanize()}
        </Typography>
      </div>
    </div>
  )
}

export default PrepTime
