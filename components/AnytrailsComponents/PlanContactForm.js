import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Datetime from "react-datetime";
import styles from "assets/jss/material-kit-react/views/landingPageSections/workStyle.js";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Check from "@material-ui/icons/Check";
import Radio from "@material-ui/core/Radio";
import FiberManualRecord from "@material-ui/icons/FiberManualRecord";
import { container } from "assets/jss/material-kit-react";
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";
import { MenuItem } from "@material-ui/core";
import NumberFormat from "react-number-format";
const useStyles = makeStyles(styles);
const defaultValues = {
  numberFormat: 123456,

}

export default function PlanContactForm() {
  const { control, handleSubmit } = useForm({defaultValues});
  const classes = useStyles();
  const [checked, setChecked] = React.useState([24, 22]);
  const [selectedEnabled, setSelectedEnabled] = React.useState("b");
  const [checkedA, setCheckedA] = React.useState(true);
  const [checkedB, setCheckedB] = React.useState(false);
  
  const handleToggle = value => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];
    if (currentIndex === -1) {
        newChecked.push(value);
      } else {
        newChecked.splice(currentIndex, 1);
      }
      setChecked(newChecked);
    };
  return (
      <>
      
    <div className={classes.sectionPage}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Customize my trip!</h2>
          <h4 className={classes.description}>
          Our team with more than 10 years experience of designing trips. We can build wonderful trips that will meet your demand.
          </h4>
          <form>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                  labelText="Your Name"
                  id="name"
                  formControlProps={{
                    fullWidth: true
                  }}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                  labelText="Your Email"
                  id="email"
                  formControlProps={{
                    fullWidth: true
                  }}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                 
                  <br />
                  <FormControl fullWidth>
                    <Datetime
                      inputProps={{ placeholder: "Your Expected Arrivel Date" }}
                    />
                  </FormControl>
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  
                  <br />
                  <FormControl fullWidth>
                    <Datetime
                      inputProps={{ placeholder: "Your Expected Depature Date" }}
                    />
                  </FormControl>
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
        <div className={classes.title2}>
          <h3>What are you more interested?</h3>
        </div>
        <div
          className={
            classes.checkboxAndRadio +
            " " +
            classes.checkboxAndRadioHorizontal
          }
        >
          <FormControlLabel
            control={
              <Checkbox
                tabIndex={-1}
                onClick={() => handleToggle(21)}
                checkedIcon={<Check className={classes.checkedIcon} />}
                icon={<Check className={classes.uncheckedIcon} />}
                classes={{
                  checked: classes.checked,
                  root: classes.checkRoot
                }}
              />
            }
            classes={{ label: classes.label, root: classes.labelRoot }}
            label="Leisure"
          />
          <FormControlLabel
            control={
              <Checkbox
                tabIndex={-1}
                onClick={() => handleToggle(21)}
                checkedIcon={<Check className={classes.checkedIcon} />}
                icon={<Check className={classes.uncheckedIcon} />}
                classes={{
                  checked: classes.checked,
                  root: classes.checkRoot
                }}
              />
            }
            classes={{ label: classes.label, root: classes.labelRoot }}
            label="Beaches"
          />
          <FormControlLabel
            control={
              <Checkbox
                tabIndex={-1}
                onClick={() => handleToggle(21)}
                checkedIcon={<Check className={classes.checkedIcon} />}
                icon={<Check className={classes.uncheckedIcon} />}
                classes={{
                  checked: classes.checked,
                  root: classes.checkRoot
                }}
              />
            }
            classes={{ label: classes.label, root: classes.labelRoot }}
            label="Biking"
          />
          <FormControlLabel
            control={
              <Checkbox
                tabIndex={-1}
                onClick={() => handleToggle(21)}
                checkedIcon={<Check className={classes.checkedIcon} />}
                icon={<Check className={classes.uncheckedIcon} />}
                classes={{
                  checked: classes.checked,
                  root: classes.checkRoot
                }}
              />
            }
            classes={{ label: classes.label, root: classes.labelRoot }}
            label="Hiking"
          />
        </div>        
        
          
        
        <div
          className={
            classes.checkboxAndRadio +
            " " +
            classes.checkboxAndRadioHorizontal
          }
        >
         <FormControlLabel
            control={
              <Checkbox
                tabIndex={-1}
                onClick={() => handleToggle(21)}
                checkedIcon={<Check className={classes.checkedIcon} />}
                icon={<Check className={classes.uncheckedIcon} />}
                classes={{
                  checked: classes.checked,
                  root: classes.checkRoot
                }}
              />
            }
            classes={{ label: classes.label, root: classes.labelRoot }}
            label="City"
          /> 
          
          
          <FormControlLabel
            control={
              <Checkbox
                tabIndex={-1}
                onClick={() => handleToggle(21)}
                checkedIcon={<Check className={classes.checkedIcon} />}
                icon={<Check className={classes.uncheckedIcon} />}
                classes={{
                  checked: classes.checked,
                  root: classes.checkRoot
                }}
              />
            }
            classes={{ label: classes.label, root: classes.labelRoot }}
            label="Food Culture"
          />
        </div>       
        
      </GridItem>

      <GridItem xs={12} sm={12} md={6}>
              <div className={classes.title2}>
                <h3>Who coming on your trip?</h3>
              </div>
              <div
                className={
                  classes.checkboxAndRadio +
                  " " +
                  classes.checkboxAndRadioHorizontal
                }
              >
                <FormControlLabel
                  control={
                    <Radio
                      checked={selectedEnabled === "a"}
                      onChange={() => setSelectedEnabled("a")}
                      value="a"
                      name="radio button enabled"
                      aria-label="A"
                      icon={
                        <FiberManualRecord className={classes.radioUnchecked} />
                      }
                      checkedIcon={
                        <FiberManualRecord className={classes.radioChecked} />
                      }
                      classes={{
                        checked: classes.radio,
                        root: classes.radioRoot
                      }}
                    />
                  }
                  classes={{
                    label: classes.label,
                    root: classes.labelRoot
                  }}
                  label="Family"
                />
              </div>
              <div
                className={
                  classes.checkboxAndRadio +
                  " " +
                  classes.checkboxAndRadioHorizontal
                }
              >
                <FormControlLabel
                  control={
                    <Radio
                      checked={selectedEnabled === "b"}
                      onChange={() => setSelectedEnabled("b")}
                      value="b"
                      name="radio button enabled"
                      aria-label="B"
                      icon={
                        <FiberManualRecord className={classes.radioUnchecked} />
                      }
                      checkedIcon={
                        <FiberManualRecord className={classes.radioChecked} />
                      }
                      classes={{
                        checked: classes.radio,
                        root: classes.radioRoot
                      }}
                    />
                  }
                  classes={{
                    label: classes.label,
                    root: classes.labelRoot
                  }}
                  label="Couple"
                />
              </div>
              <div
                className={
                  classes.checkboxAndRadio +
                  " " +
                  classes.checkboxAndRadioHorizontal
                }
              >
                <FormControlLabel
                  control={
                    <Radio
                      checked={selectedEnabled === "c"}
                      onChange={() => setSelectedEnabled("c")}
                      value="c"
                      name="radio button enabled"
                      aria-label="C"
                      icon={
                        <FiberManualRecord className={classes.radioUnchecked} />
                      }
                      checkedIcon={
                        <FiberManualRecord className={classes.radioChecked} />
                      }
                      classes={{
                        checked: classes.radio,
                        root: classes.radioRoot
                      }}
                    />
                  }
                  classes={{
                    label: classes.label,
                    root: classes.labelRoot
                  }}
                  label="Friends"
                />  
                
              </div>
              <div
                className={
                  classes.checkboxAndRadio +
                  " " +
                  classes.checkboxAndRadioHorizontal
                }
              >
                <FormControlLabel
                  control={
                    <Radio
                      checked={selectedEnabled === "d"}
                      onChange={() => setSelectedEnabled("d")}
                      value="d"
                      name="radio button enabled"
                      aria-label="D"
                      icon={
                        <FiberManualRecord className={classes.radioUnchecked} />
                      }
                      checkedIcon={
                        <FiberManualRecord className={classes.radioChecked} />
                      }
                      classes={{
                        checked: classes.radio,
                        root: classes.radioRoot
                      }}
                    />
                  }
                  classes={{
                    label: classes.label,
                    root: classes.labelRoot
                  }}
                  label="Solo"
                />  
          <section>
            <label>Your budget /per persion: US$</label>
            <Controller
              as={NumberFormat}
              thousandSeparator
              name="numberFormat"
              className="input"
              control={control}
            />
          </section>
                
              </div>  
              <div className={classes.title2}>
                <text>This information for whom traveling with family and friends</text>
                <div>
                <section>
                <label>How many adult?</label>
              <Controller
        name="numberOfAdult"
        as={Select}
        options={[
          { value: "2", label: "two people" },
          { value: "3", label: "three people" },
          { value: "4", label: "four people" }
        ]}
        control={control}
        defaultValue=""
      />
                </section>
                <section>
                <label>How many children under 12?</label>
              <Controller
        name="numberOfAdult"
        as={Select}
        options={[
          { value: "1", label: "one child" },
          { value: "2", label: "two children" },
          { value: "3", label: "three children" },
          { value: "4", label: "four children" }
        ]}
        control={control}
        defaultValue=""
      />
                </section>
                <section>
                <label>How many room?</label>
              <Controller
        name="numberOfAdult"
        as={Select}
        options={[
          { value: "1", label: "one room" },
          { value: "2", label: "two rooms" },
          { value: "3", label: "three rooms" },
          { value: "4", label: "four rooms" }
        ]}
        control={control}
        defaultValue=""
      />
                </section>
                
                </div>
                
                
                
              </div>
              

              
            </GridItem>          

              <CustomInput
                labelText="Your Message (What make this trip speacial?)"
                id="message"
                formControlProps={{
                  fullWidth: true,
                  className: classes.textArea
                }}
                inputProps={{
                  multiline: true,
                  rows: 5
                }}
              />
              <GridItem xs={12} sm={12} md={4}>
                <Button color="primary">Send Message</Button>
              </GridItem>
            </GridContainer>
          </form>
        </GridItem>
      </GridContainer>
    </div>
    
  
  </>
  );
}
