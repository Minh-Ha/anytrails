import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Parallax from "components/Parallax/Parallax.js";
import styles from "assets/jss/material-kit-react/views/landingPage.js";
import SectionTourHue from "views/Vietnam/Hue/SectionTourHue";
import SectionCarousel from "views/Components/Sections/SectionCarousel.js";
import HeaderLinksVietnam from "components/Header/HeaderLinksVietnam";
import { container } from "assets/jss/material-kit-react";



const dashboardRoutes = [];

 const useStyles = makeStyles(styles);


export default function Hue(props) {

  
  const classes = useStyles();
  const { ...rest } = props;
  
  return (
    <div>
<CssBaseline />
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="anytrails"
        rightLinks={<HeaderLinksVietnam />}
        fixed
        changeColorOnScroll={{
          height: 200,
          color: "blue"
        }}
        {...rest}
      />
      <Parallax image={require("assets/img/hue-citadel-07.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>Hue.</h1>
              <h4>
                The old capital
              </h4>
              <br />
              <Button
                color="danger"
                size="lg"
                href="https://www.youtube.com/watch?v=duVLG9fYQWQ"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-play" />
                Watch video
              </Button>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <ThemeProvider>
        <div>
         
        </div>
      
      <div className={classNames(classes.main, classes.mainRaised)}>       
           
           <SectionTourHue />
                    
           
           
           <div className={classes.container}>
          <container maxWidth="xl">
        <SectionCarousel /> 
        </container>
        </div > 
      </div>
      </ThemeProvider>
      <Footer />
    </div>
  );
}
