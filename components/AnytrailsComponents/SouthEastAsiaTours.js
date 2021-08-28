import React from 'react';
import AppBar from '@material-ui/core/AppBar';
//import Button from '@material-ui/core/Button';
import Button from "components/CustomButtons/Button.js";
import RegularButton from "components/CustomButtons/Button"
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import { createMuiTheme } from '@material-ui/core/styles';
import SouthEastAsiaPhoto from "components/AnytrailsComponents/SouthEastAsiaPhoto.js";
import Paper from '@material-ui/core/Paper';

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
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 5),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(0, 0, 0),
    paddingBottom: theme.spacing(0, 0,0),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%',  16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function SouthEastAsiaTours() {
  const classes = useStyles();
  

  return (
    <React.Fragment>
      
      
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="md">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Explore South-East Asia With Anytrails!
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              We are here to help you plan your trips in South-East Asia. Please let our team know where do you want to spend your vacation and how do you want to explore. Our team with many years of experience will plan the suitable trips for your getaway or you just choose one of the popular tours we have.
            </Typography>
            
          </Container>
          <SouthEastAsiaPhoto />
        </div>
        <Container className={classes.cardGrid} maxWidth="xl">
          {/* End hero unit */}
          <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Selected Itineraries!
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              We selected the amazing itineraries of you. however, we can always custom the trip just for you!
            </Typography>
            <ThemeProvider theme={theme}>
            <div className={classes.heroButtons}></div>
            <Grid container spacing={2} justify="center">
            <Grid item>
                  <Button href="/plan-my-trip" size='lg' color="info" variant="contained" align="center">
                    Plan my trip!
                  </Button>
                </Grid>
                </Grid>
                </ThemeProvider>
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <Paper elevation={10}> 
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image title"
                  />
                  </Paper>
                  
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe the content.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="sm" color="primary">
                      View Detail
                    </Button>
                    
                    
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer 
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </footer>
      End footer */}
    </React.Fragment>
  );
}