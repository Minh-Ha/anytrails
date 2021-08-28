import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import Link from "next/link";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import Header from "components/Header/Header.js";
import HeaderAnytrails from "components/AnytrailsComponents/HeaderAnytrails.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import HeaderLinksAnytrails from "components/AnytrailsComponents/HeaderLinksAnytrails.js";
import HeaderLeftLinks from "components/AnytrailsComponents/HeaderLeftLinks.js";
import Footer from "components/AnytrailsComponents/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Parallax from "components/Parallax/Parallax.js";
import SouthEastAsiaTours from "components/AnytrailsComponents/SouthEastAsiaTours.js";
// sections for this page


import styles from "styles/jss/nextjs-material-kit/pages/components.js";

const useStyles = makeStyles(styles);

export default function Components(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <HeaderAnytrails
        //brand="ANYTRAILS"
        leftLinks={<HeaderLeftLinks />}
        rightLinks={<HeaderLinksAnytrails />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: "white",
        }}
        {...rest}
      />

      
      <Parallax image="/img/anytrails/ta-su-choong-hoang-su-phi-02.jpg">
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <h1 className={classes.title}>ANYTRAILS.</h1>
                <h3 className={classes.subtitle}>
                  A Different Experience In SouthEast Asia.
                </h3>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>

      <div className={classNames(classes.main, classes.mainRaised)}>
        <SouthEastAsiaTours />
        
        
      </div>
      <Footer />
    </div>
  );
}
