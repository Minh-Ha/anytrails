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


// sections for this page
import SectionPlanMyTrip from "components/anytrails-pages-sections/SectionPlanMyTrip.js";
import styles from "styles/jss/nextjs-material-kit/pages/components.js";

const useStyles = makeStyles(styles);

export default function PlanMyTrip(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <HeaderAnytrails
        //brand="ANYTRAILS"
        leftLinks={<HeaderLeftLinksVietnam/>}
        rightLinks={<HeaderLinksAnytrails />}
        fixed
        color="white"
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
      <div>
      <SectionPlanMyTrip />
      </div>   
      
      

      
      <Footer />
    </div>
  );
}

