import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// core components
import Header from "components/Header/Header.js";
import Button from "components/CustomButtons/Button.js";
import styles from "styles/jss/nextjs-material-kit/pages/componentsSections/navbarsStyle.js";

const useStyles = makeStyles(styles);

export default function SectionNavbaHeader() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      {/* <div className={classes.container}>
        
        
      </div> */}
      {/* <div id="navbar" className={classes.navbar}> */}
      <div className={classes.navbar}>
        <div
          className={classes.navigation}
          
        >
          <Header
            
            color="transparent"
            
          />
          
          <Header
          
            brand="Info Color"
            color="info"
            leftLinks={
              <List className={classes.list}>
                  <ListItem className={classes.listItem}>
                  <Button
                    href="/vietnam"
                    // className={classes.navLink + " " + classes.navLinkActive}
                    // onClick={(e) => e.preventDefault()}
                    color="transparent"
                  >
                    Vietnam
                  </Button>
                </ListItem>
                <ListItem className={classes.listItem}>
                  <Button
                    href="#pablo"
                    className={classes.navLink}
                    onClick={(e) => e.preventDefault()}
                    color="transparent"
                  >
                    Profile
                  </Button>
                </ListItem>
              </List>
            }
            rightLinks={
              <List className={classes.list}>
                <ListItem className={classes.listItem}>
                  <Button
                    href="/vietnam"
                    className={classes.navLink + " " + classes.navLinkActive}
                    // onClick={(e) => e.preventDefault()}
                    color="transparent"
                  >
                    Vietnam
                  </Button>
                </ListItem>
                <ListItem className={classes.listItem}>
                  <Button
                    href="#pablo"
                    className={classes.navLink}
                    onClick={(e) => e.preventDefault()}
                    color="transparent"
                  >
                    Profile
                  </Button>
                </ListItem>
                <ListItem className={classes.listItem}>
                  <Button
                    href="#pablo"
                    className={classes.navLink}
                    onClick={(e) => e.preventDefault()}
                    color="transparent"
                  >
                    Settings
                  </Button>
                </ListItem>
              </List>
            }
          />
          
          
        </div>
      </div>
    </div>
  );
}
