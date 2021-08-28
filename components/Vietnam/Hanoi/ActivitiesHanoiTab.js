import React from 'react';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
//import Button from '@material-ui/core/Button';
import Button from "components/CustomButtons/Button.js";
import Grid from '@material-ui/core/Grid';
import { createMuiTheme } from '@material-ui/core/styles';
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#4dac6b",
    },
    secondary: {
      main: "#0471b3",
    },
  },
  shape: {
    
    borderRadius: 20
},
});
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
}));

export default function OutlinedButtons() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
<div className={classes.heroButtons}>
      <Grid container spacing={2} justify="center">
        <Grid item>
        <Button href="#" variant="outlined" color="primary" href="/vietnam/hanoi">
        About Hanoi
      </Button>
        </Grid>
        <Grid item>
        <Button href="#" variant="outlined" color="primary" href="/vietnam/hanoi">
        Where to stay
      </Button>
        </Grid>
        <Grid item>
        <Button href="#" variant="outlined" color="primary" href="/vietnam/hanoi">
        Top 10 pupular food in Hanoi
      </Button>
        </Grid>
        <Grid item>
        <Button href="#" variant="outlined" color="primary" href="/vietnam/hanoi">
        Top ten restaurants in Hanoi
      </Button>
        </Grid>
        <Grid item>
        <Button href="#" variant="outlined" color="primary" href="/vietnam/hanoi">
        Where to visit
      </Button>
        </Grid>
      </Grid>
      
      
      
    </div>
    </ThemeProvider>
    
  );
}