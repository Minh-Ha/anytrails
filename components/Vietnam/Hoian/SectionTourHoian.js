import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
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
  container: {
display: "flex"
  },
    drawerPaper: { width: 'inherit'},
    link: {
      textDecoration: 'none',
      color: 'gray',
      // color: theme.palette.text.primary
    },
  
   icon: {
     marginRight: theme.spacing(2),
   },
  
   heroContent: {
     backgroundColor: theme.palette.background.paper,
     padding: theme.spacing(8, 0, 6),
   },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
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

 export default function SectionTourHoian () {
  const classes = useStyles();


  return (
    <React.Fragment>
      
      <main>
          

        {/* Hero unit */}
        
        
              
          <div className={classes.heroContent}>
          <Container maxWidth="lg">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Hue
            </Typography>
            
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Hue is the old capital of Vietnam from 1802 to 1945. You can learn so much history of Vietnam by visiting citadel and kings's toms
            </Typography>
            </Container>
          
        </div>
        
        <Container className={classes.cardGrid} maxWidth="xl">
          {/* End hero unit */}
          
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe the content.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                     href="#" size="small" color="primary">
                      View detail
                  
                    </Button>
                     
                    
                    
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
     
      
    </React.Fragment>
  );
}
