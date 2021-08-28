/*eslint-disable*/
import React from "react";
import Link from "next/link";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";
import Icon from "@material-ui/core/Icon";

// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";

import styles from "styles/jss/nextjs-material-kit/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLeftLinks(props) {
  const classes = useStyles();
  return (
      <div>      
    <List className={classes.list}>
                
                <ListItem className={classes.listItem}>
                  <Button
                    href="/home"
                    className={classes.navLink}
                    //onClick={(e) => e.preventDefault()}
                    color="transparent"
                  >
                    Home
                  </Button>
                </ListItem>
                <ListItem className={classes.listItem}>
                  <Button
                    href="#pablo"
                    className={classes.navLink}
                    onClick={(e) => e.preventDefault()}
                    color="transparent"
                  >
                    Why Anytrails
                  </Button>
                </ListItem>
                <ListItem className={classes.listItem}>
                    <CustomDropdown
                      navDropdown
                      buttonText="DESTINATION" 
                      //dropdownHeader="Departure from"                     
                      buttonProps={{
                        className: classes.navLink,
                        color: "transparent",
                      }}
                      buttonIcon={Apps}
                      dropdownList={[
                        <Link href="/vietnam">
              <a className={classes.dropdownLink}>VIETNAM</a>
            </Link>,
            <Link href="/components">
            <a className={classes.dropdownLink}>CAMBODIA</a>
              </Link>,
              <Link href="/components">
                <a className={classes.dropdownLink}>LAOS</a>
            </Link>,
            <Link href="/components">
              <a className={classes.dropdownLink}>THAILAND</a>
            </Link>,
                      ]}
                    />
                  </ListItem>
                  
                

                
              </List>
  </div>
  );
}