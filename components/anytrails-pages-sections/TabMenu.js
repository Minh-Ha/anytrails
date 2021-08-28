import React from "react";
import Link from "next/link";
import { makeStyles } from "@material-ui/core/styles";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
//import Header from "components/Header/Header.js";
import HeaderTab from "components/AnytrailsComponents/HeaderTab.js";
import styles from "styles/jss/nextjs-material-kit/pages/componentsSections/navbarsStyle.js";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Button from "components/CustomButtons/Button.js";
import logo from "public/img/anytrails/anytrails-logo.png";
const useStyles = makeStyles(styles);
export default function SectionTabMenu (){
    const classes = useStyles(); 
    const brandComponent = (
      <Link href="/home" as="/home">
        <Button className={classes.title}><img src={logo} alt="anytrails"></img></Button>
      </Link>
    );
    return (
<div >
    <div >

<GridContainer>
<GridItem xs={12} sm={12} md={12}>
            
            <HeaderTab
              // brand="All Tours"
              color="info"             

              leftLinks={
                <List className={classes.list}>
                  <ListItem className={classes.listItem}>
                    <Button
                      href="#pablo"
                      className={classes.navLink}
                      onClick={(e) => e.preventDefault()}
                      color="transparent"
                    >
                      Culture
                    </Button>
                  </ListItem>
                  <ListItem className={classes.listItem}>
                    <Button
                      href="#pablo"
                      className={classes.navLink}
                      onClick={(e) => e.preventDefault()}
                      color="transparent"
                    >
                      Adventure
                    </Button>
                  </ListItem>
                  <ListItem className={classes.listItem}>
                  
                    <Button
                      href="#pablo"
                      className={classes.navLink}
                      onClick={(e) => e.preventDefault()}
                      color="transparent"                    >
                      Nature
                    </Button>                    
                  </ListItem>
                  <ListItem className={classes.listItem}>
                    <Button
                      href="#pablo"
                      className={classes.navLink}
                      onClick={(e) => e.preventDefault()}
                      color="transparent"                    >
                      Photography
                    </Button>
                  </ListItem>
                  <ListItem className={classes.listItem}>
                    <Button
                      href="#pablo"
                      className={classes.navLink}
                      onClick={(e) => e.preventDefault()}
                      color="transparent"                    >
                      Boats/Cruises
                    </Button>
                  </ListItem>
                </List>
              }
            />
          </GridItem>
</GridContainer>
    </div>
</div>

    );

}