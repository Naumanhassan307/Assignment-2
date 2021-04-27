import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
  },
}));

function Roles() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h1>Roles</h1>
      <CircularProgress />
      
    </div>
  );
}
export default Roles;