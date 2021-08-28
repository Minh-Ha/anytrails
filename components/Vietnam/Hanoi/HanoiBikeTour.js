import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from "components/CustomButtons/Button.js";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import HanoiBreadcrumbs from './HanoiBreadcrumb';
import SectionBikeTourHn from "components/Vietnam/Hanoi/SectionBikeTourHn.js";
import SectionTourCart from "components/anytrails-pages-sections/SectionTourCart";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Slide from "@material-ui/core/Slide";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});
Transition.displayName = "Transition";
export default function HanoiBikeTour() {
  const classes = useStyles();
  const [classicModal, setClassicModal] = React.useState(false);
  return (
    <div className={classes.root}>
      <GridContainer>
        <GridItem>
        <HanoiBreadcrumbs />
        </GridItem>   
        
      
      </GridContainer>
      <Grid container spacing={2}>
      
        <GridItem xs={12} sm={12} md={8}>
          <Paper className={classes.paper}>
          <Card  >
                
                  <CardHeader color="info" className={classes.cardHeader}>
                    <h2>HANOI BIKE TOUR</h2>
                    
                  </CardHeader>
                  
                  <CardBody>
                  <p align="left">Take a full-day city tour to see Hanoi’s compact Old Quarter and a number of cultural and historical buildings. This is an excellent introduction to the capital, complete with a fun cyclo ride and an authentic meal.

Begin the tour at the impressive Ho Chi Minh Mausoleum, where you’ll visit the revered leader’s simple stilt home and the beautiful One Pillar Pagoda. Your guide will help you understand the Vietnam of today through stories of Ho Chi Minh and the Vietnam War.

Then, step back in time 1,000 years with a visit to the Temple of Literature. As Vietnam’s first university, this picturesque and peaceful collection of buildings has borne witness to some of the country’s greatest minds.

Moving closer to the maze of alleys that is the Old Quarter you will first visit Hoan Kiem Lake. This pretty, man-made lake is a hive of activity at all times of day when locals and tourists alike seek out the calming water for a stroll, a little exercise, and a catch-up with friends. Your tour includes a stop at Ngoc Son Temple, a site that pays homage to Saint Van Xuong and General Trang Hung Dao.

Later in the afternoon, hop on a cyclo for a 1-hour ride through the chaotic streets of the Old Quarter and learn about the trades that gave the alleys their names.</p>
                                       
                    
                  </CardBody>
                  
                
              </Card>
              <GridContainer>
                <GridItem xs={12} sm={12} md={12} lg={12}>                
                
                <Card elevation={10}>                  
                                 
                    <iframe width="flex" height="315" src="https://www.youtube.com/embed/vnT_lPA12LU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    
                </Card > 
                </GridItem>
              </GridContainer>                
                <Card>
              <CardBody>
                <h3>ITINARARY</h3>
                <p align="left">Take a full-day city tour to see Hanoi’s compact Old Quarter and a number of cultural and historical buildings. This is an excellent introduction to the capital, complete with a fun cyclo ride and an authentic meal.

Begin the tour at the impressive Ho Chi Minh Mausoleum, where you’ll visit the revered leader’s simple stilt home and the beautiful One Pillar Pagoda. Your guide will help you understand the Vietnam of today through stories of Ho Chi Minh and the Vietnam War.

Then, step back in time 1,000 years with a visit to the Temple of Literature. As Vietnam’s first university, this picturesque and peaceful collection of buildings has borne witness to some of the country’s greatest minds.

Moving closer to the maze of alleys that is the Old Quarter you will first visit Hoan Kiem Lake. This pretty, man-made lake is a hive of activity at all times of day when locals and tourists alike seek out the calming water for a stroll, a little exercise, and a catch-up with friends. Your tour includes a stop at Ngoc Son Temple, a site that pays homage to Saint Van Xuong and General Trang Hung Dao.

Later in the afternoon, hop on a cyclo for a 1-hour ride through the chaotic streets of the Old Quarter and learn about the trades that gave the alleys their names.</p>
              </CardBody>
              </Card>
              
              <GridContainer spacing={2}>
              <GridItem xs={12} sm={4} md={4} align="left">
                <h3>What's Included</h3>
                  <li>English speaking guide,</li>
                  <li>Transportation,</li>
                  <li>Tickets.</li>
                </GridItem>
              <Grid item xs={12} sm={4} md={4} align="left">             
              <h3>What to bring</h3>
                  <li>Comfortable shoes,</li>
                  <li>sunscreen,</li>
                  <li>and a camera.</li>
                </Grid>                
                <Grid item xs={12} sm={4} md={4} align="left">
                <h3>Transportation</h3>
                  <li>Car with driver,</li>
                  <li>Walking</li>            
              
                </Grid>
                
              </GridContainer>
              
              
              
              

          </Paper>
        </GridItem>
        
        <Grid item xs={12} sm={12} md={4}>


          <Paper className={classes.paper}>
              <Card>
                  <CardBody align="left">
                    <h5>DUARATION: 1 DAY</h5>
                    <h5>BIKING: 4 hours</h5>
                    <h4>BOAT TRIP: 1 hour</h4>
                    <h5>MEAL: LUNCH</h5>
                    <h5>PRICE: 1000</h5>
                    
                  </CardBody>
              </Card>
               <Grid item xs={12} sm={12} md={12} justify="center"> 
               <Button
                  color="primary"
                  block
                  onClick={() => setClassicModal(true)}
                  >                  
                  Reserve this tour
                </Button>
                <Dialog
                  
                  open={classicModal}
                  TransitionComponent={Transition}
                  keepMounted
                  onClose={() => setClassicModal(false)}
                  
                >
                  
                  <DialogContent
                    id="tour-id"                    
                  >                    
                    <SectionTourCart />                  
                    
                  </DialogContent>
                  <DialogActions className={classes.modalFooter}>                    
                    <Button
                      onClick={() => setClassicModal(false)}
                      color="danger"
                      simple
                    >
                      Close
                    </Button>
                  </DialogActions>
                </Dialog>
              
          </Grid>
            

        
          </Paper>
        </Grid>
        
      </Grid>
      <Grid>
      <Card>
              <CardBody>
              <h3>
                SIMILAR TOURS               
              </h3>
              <SectionBikeTourHn />
              </CardBody>                            
            </Card>        
      </Grid>
    </div>
  );
}
