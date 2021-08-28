import React from 'react';
import TextField from '@material-ui/core/TextField';
import CustomInput from "components/CustomInput/CustomInput.js";
import { makeStyles, useTheme } from '@material-ui/core/styles';
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import InputAdornment from "@material-ui/core/InputAdornment";
import Person from '@material-ui/icons/PersonOutline';
import People from "@material-ui/icons/People";
import Kid from '@material-ui/icons/AccessibilityNew';
import Bed from '@material-ui/icons/Hotel';
import Room from '@material-ui/icons/MeetingRoom';
import Email from "@material-ui/icons/Email";
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import Chip from '@material-ui/core/Chip';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import { Card } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import FormGroup from '@material-ui/core/FormGroup';
import Checkbox from '@material-ui/core/Checkbox';

const GreenCheckbox = withStyles({
  root: {
    color: green[400],
    '&$checked': {
      color: green[600],
    },
  },
  checked: {},
//})((props) => <Checkbox color="default" {...props} />);
})(()=><Checkbox color="green" />);

const useStyles = makeStyles((theme) => ({
   
  formControl: {
    margin: theme.spacing(1),
    minWidth: 400,
    maxWidth: 600,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  chip: {
    margin: 5,
  },
  noLabel: {
    marginTop: theme.spacing(10),
  },
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  'Leisure',
  'Beaches',
  'Biking',
  'Hiking',
  'City',
  'Food Culture',
  
];
function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}


export default function SectionPlanMyTrip() {
  const [state, setState] = React.useState({
    checkedVietnam: true,
    checkedCambodia: true,
    checkedLaos: true,
    checkedThailand: true,
  });

  
    
  const classes = useStyles();
  const theme = useTheme();
  

  const [personName, setPersonName] = React.useState([]);
  
  const handleChange = (event) => {
    setPersonName(event.target.value);
    setState({ ...state, [event.target.name]: event.target.checked });
  
    
  };

  

  const handleChangeMultiple = (event) => {
    const { options } = event.target;
    const value = [];
    for (let i = 0, l = options.length; i < l; i += 1) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }
    setPersonName(value);
  };


  

  return (
    <>
    <div className={classes.sectionPage}>
      <GridContainer justify="center">
      <GridItem xs={12} sm={12} md={4} spacing={3}>
      <Card>
        <CardHeader color="info">
        <h2 className={classes.title}>Customize my trip!</h2>
        </CardHeader>
        <CardBody>        
          <h4 className={classes.description}>
          Our team with more than 10 years experience of designing trips. We can build wonderful trips that will meet your demand.
          </h4>
        </CardBody>
      
      </Card>
        </GridItem>
      
      </GridContainer>
      

      <GridContainer justify="center">
        
        <GridItem xs={12} sm={12} md={4}>
        <Card>
          <CardBody>
          <form className={classes.root} noValidate autoComplete="off">
      <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
                <CustomInput
                  labelText="Your Name"
                  id="name"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    type: "text",
                    endAdornment: (
                      <InputAdornment position="end">
                        <Person />
                      </InputAdornment>
                    ),
                  }}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={12}>
                <CustomInput
                  labelText="Your Email"
                  id="email"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    type: "email",
                    endAdornment: (
                      <InputAdornment position="end">
                        <Email />
                      </InputAdornment>
                    ),
                  }}

                />
              </GridItem>
              <GridItem xs={12} sm={12} md={12}>
                <h5>Which country(s) do you want to travel?</h5>
              <FormGroup row>
      
        <FormControlLabel
        control={<GreenCheckbox 
          checked={state.checkedVn} 
          onChange={handleChange} 
          name="checkedVienam" 
          color="primary"
          />}
        label="Vietnam"
      />
      <FormControlLabel
        control={
          <GreenCheckbox
            checked={state.checkedCambodia}
            onChange={handleChange}
            name="checkedCambodia"
            color="primary"
          />
        }
        label="Cambodia"
      />
      
      
      <FormControlLabel
        control={<GreenCheckbox 
          checked={state.checkedLaos} 
          onChange={handleChange} 
          name="checkedLaos" />}
        label="Laos"
      />
      <FormControlLabel
        control={<GreenCheckbox 
          checked={state.checkedThailand} 
          onChange={handleChange} name="checkedThailand" />}
        label="Thailand"
      />
      
         
    </FormGroup>
              </GridItem>
              <GridItem xs={12} sm={12} md={12}>
                <h5>Your Expected Arrivel Date</h5>
                <CustomInput                
                  //labelText="Your Expected Arrivel Date"
                  id="dov"                  
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    type: "date"
                  }}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={12}>
                <h5>Your Expected Departure Date</h5>
                <CustomInput                
                  //labelText="Your Expected Arrivel Date"
                  id="dod"                  
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    type: "date"
                  }}
                />
              </GridItem>
              
    
    <GridItem xs={12} sm={12} md={12}>
                <CustomInput
                  labelText="How may adult?"
                  id="adult"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    type: "number",
                    endAdornment: (
                      <InputAdornment position="end">
                        <People />
                      </InputAdornment>
                    ),
                  }}

                />
              </GridItem>
              <GridItem xs={12} sm={12} md={12}>
                <CustomInput
                  labelText="How may kids?"
                  id="kid"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    type: "number",
                    endAdornment: (
                      <InputAdornment position="end">
                        <Kid />
                      </InputAdornment>
                    ),
                  }}

                />
              </GridItem>
              <GridItem xs={12} sm={12} md={12}>
                <CustomInput
                  labelText="How may room?"
                  id="room"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    type: "number",
                    endAdornment: (
                      <InputAdornment position="end">
                        <Room />
                      </InputAdornment>
                    ),
                  }}

                />
              </GridItem>
              <GridItem xs={12} sm={12} md={12}>
                <CustomInput
                  labelText="How may bed?"
                  id="bed"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    type: "number",
                    endAdornment: (
                      <InputAdornment position="end">
                        <Bed />
                      </InputAdornment>
                    ),
                  }}

                />
              </GridItem>
              <GridItem xs={12} sm={12} md={12}>
      
      
      <FormControl className={classes.formControl}>
        
        <InputLabel id="customer-interest">SELECT YOUR INTEREST HERE (mutiple choices)</InputLabel>
        <Select
          labelId="customer-interest"
          id="customer-interest-id"
          multiple
          value={personName}
          onChange={handleChange}
          input={<Input id="select-choices" />}
          renderValue={(selected) => (
            <div className={classes.chips}>
              {selected.map((value) => (
                <Chip key={value} label={value} className={classes.chip} />
              ))}
            </div>
          )}
          MenuProps={MenuProps}
        >
          {names.map((name) => (
            <MenuItem key={name} value={name} style={getStyles(name, personName, theme)}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <TextField
          id="budget"
          label="Your budget p/p in USD?"
          style={{ margin: 8, padding: 5}}
          defaultValue="$"
          variant="outlined"
        />
        <div>
        <TextField
          id="special-note"
          label="Message"
          style={{ margin: 8, padding: 5}}
          
          placeholder="Let us know your special request."
          
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />
        
      </div>
      
      
      </GridItem>
              <GridItem xs={12} sm={12} md={12}>
                <Button color="primary">Send booking</Button>
              </GridItem>
      </GridContainer>
        
      
      
      </form>
      </CardBody>
      </Card>
        </GridItem>

        
      </GridContainer>
    
        

      
    </div>
   </> 
  );
}

