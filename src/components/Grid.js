import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Components1 from './Component1'; 


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));  

export default function NestedGrid() {
  const classes = useStyles();
  return (
    <div className={classes.root}>

      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
          <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/cd587aac-9ad4-44c8-8db3-d6bf4bc42045/d9jnqx4-b43f0a53-1085-41fe-a53e-1e961d47deb5.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvY2Q1ODdhYWMtOWFkNC00NGM4LThkYjMtZDZiZjRiYzQyMDQ1XC9kOWpucXg0LWI0M2YwYTUzLTEwODUtNDFmZS1hNTNlLTFlOTYxZDQ3ZGViNS5naWYifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.xnu5OAXuOQ84IS7Di9pkgoAfEH7PM3vsl5ZeChm5ekw" alt=""/>
          </Paper>
        </Grid>
      
      </Grid>
    </div>
  );
}

//<Paper className={classes.paper}><Components1 />  </Paper>