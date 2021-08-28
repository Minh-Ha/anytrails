import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";


// core components
import Grid from '@material-ui/core/Grid';
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomTabs from "components/CustomTabs/CustomTabs.js";
import Card from "components/Card/Card.js";

import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
//import SectionBooking from "components/anytrails-pages-sections/SectionBooking.js";

import SectionBikeTourHn from "components/Vietnam/Hanoi/SectionBikeTourHn.js";
import styles from "styles/jss/nextjs-material-kit/pages/componentsSections/tabsStyle.js";

const useStyles = makeStyles(styles);


export default function SectionTabs() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <div >
          <GridContainer>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
            <Card  >
                <form className={classes.form}>
                  <CardHeader color="info" className={classes.cardHeader}>
                    <h2>NINH BINH BIKE TOUR</h2>
                    
                  </CardHeader>
                  
                  <CardBody>
                  <p className={classes.divider}>Take a full-day city tour to see Hanoi’s compact Old Quarter and a number of cultural and historical buildings. This is an excellent introduction to the capital, complete with a fun cyclo ride and an authentic meal.

Begin the tour at the impressive Ho Chi Minh Mausoleum, where you’ll visit the revered leader’s simple stilt home and the beautiful One Pillar Pagoda. Your guide will help you understand the Vietnam of today through stories of Ho Chi Minh and the Vietnam War.

Then, step back in time 1,000 years with a visit to the Temple of Literature. As Vietnam’s first university, this picturesque and peaceful collection of buildings has borne witness to some of the country’s greatest minds.

Moving closer to the maze of alleys that is the Old Quarter you will first visit Hoan Kiem Lake. This pretty, man-made lake is a hive of activity at all times of day when locals and tourists alike seek out the calming water for a stroll, a little exercise, and a catch-up with friends. Your tour includes a stop at Ngoc Son Temple, a site that pays homage to Saint Van Xuong and General Trang Hung Dao.

Later in the afternoon, hop on a cyclo for a 1-hour ride through the chaotic streets of the Old Quarter and learn about the trades that gave the alleys their names.</p>
                                       
                    
                  </CardBody>
                  
                </form>
              </Card>
              
            </GridItem>
            <GridContainer justify="center">
            <GridItem xs={12} sm={6} md={6} lg={6}>
              <h3>Video</h3>
              <Card >
              <iframe width="560" height="315" src="https://www.youtube.com/embed/vnT_lPA12LU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              
              </Card>
            </GridItem>
            </GridContainer>
          
            <GridItem>
              <Card>
              <CardBody>
                <h3>ITINARARY</h3>
                <p className={classes.divider}>Take a full-day city tour to see Hanoi’s compact Old Quarter and a number of cultural and historical buildings. This is an excellent introduction to the capital, complete with a fun cyclo ride and an authentic meal.

Begin the tour at the impressive Ho Chi Minh Mausoleum, where you’ll visit the revered leader’s simple stilt home and the beautiful One Pillar Pagoda. Your guide will help you understand the Vietnam of today through stories of Ho Chi Minh and the Vietnam War.

Then, step back in time 1,000 years with a visit to the Temple of Literature. As Vietnam’s first university, this picturesque and peaceful collection of buildings has borne witness to some of the country’s greatest minds.

Moving closer to the maze of alleys that is the Old Quarter you will first visit Hoan Kiem Lake. This pretty, man-made lake is a hive of activity at all times of day when locals and tourists alike seek out the calming water for a stroll, a little exercise, and a catch-up with friends. Your tour includes a stop at Ngoc Son Temple, a site that pays homage to Saint Van Xuong and General Trang Hung Dao.

Later in the afternoon, hop on a cyclo for a 1-hour ride through the chaotic streets of the Old Quarter and learn about the trades that gave the alleys their names.</p>
              </CardBody>
              </Card>
            </GridItem>          
          
            
            
          </GridContainer>
          
            <GridItem xs={12} sm={4} md={4} l={4}>
            <h3>What to bring</h3>
                  <li>Comfortable shoes,</li>
                  <li>sunscreen,</li>
                  <li>and a camera.</li>
            </GridItem>
            <GridItem xs={12} sm={4} md={4} l={4}>
            <h3>What's Included</h3>
                  <li>English speaking guide,</li>
                  <li>Transportation,</li>
                  <li>Tickets.</li>
            </GridItem>
            <GridItem xs={12} sm={4} md={4} l={4}>
            <h3>Transportation</h3>
                  <li>Car with driver,</li>
                  <li>Walking</li>
                  
            </GridItem>
            
          </GridContainer>
          
          
          <GridContainer>
            <GridItem>
            <Card>
              <CardBody>
              <h3>
                SIMILAR TOURS               
              </h3>
              <SectionBikeTourHn />
              </CardBody>                            
            </Card>            
            </GridItem>            
          </GridContainer>
          
        </div>
      </div>
    </div>
  );
}
