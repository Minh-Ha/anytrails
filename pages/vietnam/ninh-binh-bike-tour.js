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
import HeaderLinksAnytrails from "components/AnytrailsComponents/HeaderLinksAnytrails.js";
import HeaderLeftLinksVietnam from "components/AnytrailsComponents/HeaderLeftLinksVietnam.js";
import Footer from "components/AnytrailsComponents/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Parallax from "components/Parallax/Parallax.js";
// sections for this page
import styles from "styles/jss/nextjs-material-kit/pages/components.js";
import SectionTourHanoi from "components/Vietnam/Hanoi/SectionTourHanoi.js";
import NinhbinhSlideBaner from "components/Vietnam/NinhBinh/NinhbinhSlideBaner.js";
import TabMenu from "components/anytrails-pages-sections/TabMenu.js";
import SectionNinhBinhBikeTour from "components/Vietnam/NinhBinh/SectionNinhBinhBikeTour.js";

const useStyles = makeStyles(styles);
export default function Components(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
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
      <Header
      color="transparent"
      />
      <Header
      color="transparent"
      /> 

      
      

      <div className={classNames(classes.main, classes.mainRaised)}>
        <NinhbinhSlideBaner/>
        <TabMenu />
        <SectionNinhBinhBikeTour/>
        
        
      </div>
      <Footer />
    </div>
  );
}
