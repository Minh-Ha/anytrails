import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import RegularButton from "components/CustomButtons/Button"
import CameraIcon from '@material-ui/icons/PhotoCamera';
//import Card from '@material-ui/core/Card';
//import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeaderBlog from "components/Card/CardHeaderBlog.js";
import CardFooter from "components/Card/CardFooter.js";
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import { createMuiTheme } from '@material-ui/core/styles';
import TabMenuBlog from "components/anytrails-pages-sections/TabMenuBlog.js";
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
    paddingTop: '60.25%',  16:9,
    boxShadow: '3',
    borderRadius: 3,
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
        
        
        <Container className={classes.cardGrid} maxWidth="lg">
          
          <TabMenuBlog />
            
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card>
                  <CardHeaderBlog>
                  <Paper elevation={10} >
                  <CardMedia
                  className={classes.cardMedia}
                  image="https://source.unsplash.com/random"
                  title="Image title"
                  />
                  </Paper>
                    
                  </CardHeaderBlog>
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe the content.
                      <Button href="/blog/where-to-eat-in-hanoi" size="small" color="primary">
                      read more...
                    </Button>                      
                    </Typography>                    
                  </CardContent>
                  
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      
    </React.Fragment>
  );
}