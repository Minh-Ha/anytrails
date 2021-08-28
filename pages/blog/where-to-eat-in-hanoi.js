import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import Link from "next/link";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components

import HeaderAnytrails from "components/AnytrailsComponents/HeaderAnytrails.js";
import HeaderLinksAnytrails from "components/AnytrailsComponents/HeaderLinksAnytrails.js";
import HeaderLeftLinksVietnam from "components/AnytrailsComponents/HeaderLeftLinksVietnam.js";
import Footer from "components/AnytrailsComponents/Footer.js";
import Grid from '@material-ui/core/Grid';
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
//import Button from "components/CustomButtons/Button.js";
import Button from '@material-ui/core/Button';
import Parallax from "components/Parallax/Parallax.js";
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Card from "components/Card/Card.js";
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { createMuiTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
// sections for this page
import styles from "styles/jss/nextjs-material-kit/pages/components.js";
import SectionTourHanoi from "components/Vietnam/Hanoi/SectionTourHanoi.js";
import TabMenuBlog from "components/anytrails-pages-sections/TabMenuBlog.js";
import CardHeaderBlog from "components/Card/CardHeaderBlog.js";
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


export default function WhereToEatInHanoi(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
  return (
    <React.Fragment>
    <div >
      <HeaderAnytrails
        //brand="ANYTRAILS"
        leftLinks={<HeaderLeftLinksVietnam/>}
        rightLinks={<HeaderLinksAnytrails />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: "white",
        }}
        {...rest}
      />

      
      <Parallax image="/img/anytrails/hanoi-vietnam-01.jpg">
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <h1 className={classes.title}>HNOI.</h1>
                <h3 className={classes.subtitle}>
                  THE CAPITAL OF VIETNAM.
                </h3>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>


      <div className={classNames(classes.main, classes.mainRaised)}>
        <Container className={classes.cardGrid} maxWidth="lg">
        
        <Card>
        <TabMenuBlog />
            <CardContent>
                <h2>Where to eat in Hanoi</h2>
                <p >
                "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
                </p>                
                  <p align="center">
                  <img
                alt="..."
                src="/img/examples/studio-2.jpg"
                //className={navImageClasses}
                />                
                  </p>             
                
                
                <p>
                "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."
                </p>
                <p align="center">
                <img
                alt="..."
                src="/img/examples/studio-2.jpg"
                //className={navImageClasses}
                />
                </p>
                
            </CardContent>
        </Card>
        </Container>
        

        
        

        <Container className={classes.cardGrid} maxWidth="lg">
        <div justify="center">
        <h3>Similar Stories</h3>
        </div>
          
            
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
                      <Button size="small" color="primary">
                      read more...
                    </Button>
                    </Typography>
                  </CardContent>                  
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
        
      </div>
      <Footer />
    </div>
    </React.Fragment>
  );
}
