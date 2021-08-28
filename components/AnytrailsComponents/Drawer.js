import React from "react"
import { Drawer as MUIDrawer, ListItem, List, ListItemIcon, ListItemText } from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home"
import GroupIcon from '@material-ui/icons/Group';
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";


const useStyles = makeStyles ({
  drawer: {
     width: '120'},
  
    })
const Drawer =() => {
  const classes = useStyles();
  return (
    <MUIDrawer variant="permanent" className={classes.drawer}>
<List>
          <Link to="/">
          <ListItem button>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary={"Home"} />

          </ListItem>
          </Link>
          <Link to="/hanoi">
          <ListItem button>
            <ListItemIcon>
              <GroupIcon />
            </ListItemIcon>
            <ListItemText primary={"Hanoi"} />

          </ListItem>
          </Link>
        </List>

      </MUIDrawer>
  )
}

export default Drawer