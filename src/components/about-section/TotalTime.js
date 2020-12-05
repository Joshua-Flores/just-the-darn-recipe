import React from 'react'
import TotalTimeIcon from '../../../static/images/elapsed-time-icon.svg'
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

const TotalTime = props => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <img src={TotalTimeIcon} alt="total time" className={classes.icon} />
      <div>
        <Typography variant="overline" className={classes.statName}>
          Total time
        </Typography>
        <Typography
          variant="h6"
          className={classes.statValue}
          color="secondary"
        >
          {props.totalTime === 'PT0M'
            ? 'none 🎉'
            : moment.duration(props.totalTime).humanize()}
        </Typography>
      </div>
    </div>
  )
}

export default TotalTime
