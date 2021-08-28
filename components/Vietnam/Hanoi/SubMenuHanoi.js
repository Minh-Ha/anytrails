import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Divider from '@material-ui/core/Divider';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import RestaurantIcon from '@material-ui/icons/Restaurant';
import DirectionsBikeIcon from '@material-ui/icons/DirectionsBike';
import MuseumIcon from '@material-ui/icons/Museum';
import LocalDining from '@material-ui/icons/LocalDining';
import Hotel from '@material-ui/icons/LocalHotel';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

export default function NestedList() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List      
      className={classes.root}
    >      
      <ListItem button onClick={handleClick}>        
        <ListItemText primary="THING TO DO IN HANOI" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Divider />
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <LocationCityIcon />
            </ListItemIcon>
            <ListItemText primary="About Hanoi" />
          </ListItem>
        </List>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <Hotel />
            </ListItemIcon>
            <ListItemText primary="Where to stay" />
          </ListItem>
        </List>
        <List component="div" disablePadding>
        <a href="#">
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <LocalDining />
            </ListItemIcon>
            <ListItemText primary="Top 10 pupular food in Hanoi"
             
            />
          </ListItem>
          </a>
        </List>
        <List>
          <a href="/blog/where-to-eat-in-hanoi" >
          <ListItem button className={classes.nested} href="/">
            <ListItemIcon>
              <RestaurantIcon />
            </ListItemIcon>            
            <ListItemText primary="Where to eat in Hanoi" />
          </ListItem>
            </a>        
          
          
        </List>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <MuseumIcon />
            </ListItemIcon>
            <ListItemText primary="Where to visit" />
          </ListItem>
        </List>
        
      </Collapse>
    </List>
  );
}