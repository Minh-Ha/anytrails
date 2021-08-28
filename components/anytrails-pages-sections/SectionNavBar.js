import React from 'react';
import Link from "next/link";
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from "@material-ui/core/Button";
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Header from "components/Header/Header.js";
import logo from "public/img/anytrails/anytrails-logo.png";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });
//   const brandComponent = (
//     <Link href="/home" as="/home">
//       <Button ><img src={logo} alt="anytrails"></img></Button>
//     </Link>
//   );

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default function SectionNavbar(props) {
  return (
    <React.Fragment>
      <CssBaseline />
      
      <Header
          
            brand="Info Color"
            color="info"
            leftLinks={
              <List >
                  <ListItem >
                  <Button
                    href="/vietnam"
                    // className={classes.navLink + " " + classes.navLinkActive}
                    // onClick={(e) => e.preventDefault()}
                    color="transparent"
                  >
                    Vietnam
                  </Button>
                </ListItem>
                <ListItem >
                  <Button
                    href="#pablo"
                    
                    onClick={(e) => e.preventDefault()}
                    color="transparent"
                  >
                    Profile
                  </Button>
                </ListItem>
              </List>
            }
            rightLinks={
              <List >
                <ListItem >
                  <Button
                    href="/vietnam"
                    
                    // onClick={(e) => e.preventDefault()}
                    color="transparent"
                  >
                    Vietnam
                  </Button>
                </ListItem>
                
              </List>
            }
          />
    </React.Fragment>
  );
}
