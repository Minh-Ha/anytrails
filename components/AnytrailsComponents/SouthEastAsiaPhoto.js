import React from "react";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import GridItem from "components/Grid/GridItem";
//import { container } from "assets/jss/material-kit-react";
import { makeStyles } from "@material-ui/core/styles";
import classNames from "classnames";
//import styles from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";
import vietnam from "public/img/anytrails/halong-vietnam.jpg";
import cambodia from "public/img/anytrails/angkor-wat-cambodia-02.jpg";
import laos from "public/img/anytrails/luang-prabang-laos-01.jpg";
import thailand from "public/img/anytrails/puket-thailand.jpg";
import GridContainer from "components/Grid/GridContainer";
import Button from "components/CustomButtons/Button.js";

import Container from '@material-ui/core/Container';
import { Link } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
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

function SouthEastAsiaPhoto () {
    const classes = useStyles();
  const imageClasses = classNames(
   classes.imgRaised,
   
  );

    return(
<main>
    <div className={classes.heroContent}>
        <Container className={classes.cardGrid} maxWidth="xl">
        <GridContainer spacing={3}>
        
        <GridItem   xs={12} sm={6} md={3} className={classes.itemGrid}>
            <a href="/vietnam">
            <Card className={classes.card}>
                <CardMedia className={classes.cardMedia} image={vietnam} />
                {/* <Button>
                    <a href="vietnam">VIETNAM</a>
                </Button> */}
            </Card>
            </a>
        </GridItem>
        
        <GridItem  xs={12} sm={6} md={3} className={classes.itemGrid}>
            <Card className={classes.card}>
                <CardMedia className={classes.cardMedia} image={cambodia} />
            </Card>
        </GridItem>
        <GridItem  xs={12} sm={6} md={3} className={classes.itemGrid}>
            <Card className={classes.card}>
                <CardMedia className={classes.cardMedia} image={laos} />
            </Card>
        </GridItem>
        <GridItem  xs={12} sm={6} md={3} className={classes.itemGrid}>
            <Card className={classes.card}>
                <CardMedia className={classes.cardMedia} image={thailand} />
            </Card>
        </GridItem>


        </GridContainer>
        </Container>
    </div>
    
</main>
    )
}

export default SouthEastAsiaPhoto