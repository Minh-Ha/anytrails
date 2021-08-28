import React from "react";
// react plugin for creating date-time-picker
import Datetime from "react-datetime";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Slide from "@material-ui/core/Slide";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import styles from "assets/jss/material-kit-react/views/componentsSections/javascriptStyles.js";

const useStyles = makeStyles(styles);

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

Transition.displayName = "Transition";

export default function DatePicker() {
  const classes = useStyles();
  
  return (
    <div className={classes.section}>
      <div className={classes.container}>        
        <GridContainer>     
           <GridItem xs={12} sm={12} md={12}>
              <div className={classes.title}>
                <h3>Arrivel Date</h3>
              </div>
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                  <InputLabel className={classes.label}>
                    Your Arrivel Date
                  </InputLabel>
                  <br />
                  <FormControl fullWidth>
                    <Datetime
                      inputProps={{ placeholder: "Datetime Picker Here" }}
                    />
                  </FormControl>
                </GridItem>
              </GridContainer>
            </GridItem>

            <GridItem xs={12} sm={12} md={12}>
              <div className={classes.title}>
                <h3>Departure Date</h3>
              </div>
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                  <InputLabel className={classes.label}>
                  Your Departure Date
                  </InputLabel>
                  <br />
                  <FormControl fullWidth>
                    <Datetime
                      inputProps={{ placeholder: "Datetime Picker Here" }}
                    />
                  </FormControl>
                </GridItem>
              </GridContainer>
            </GridItem>
   
          
        </GridContainer>
        
      </div>
    </div>
  );
}
