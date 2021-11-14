import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { Link } from "react-router-dom";
import { Fragment } from "react";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartPlus,
  faHome,
  faList,
  faPlusCircle,
  faThLarge,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
 import "./UserSidebar.css";
import { faCommentDots } from "@fortawesome/free-regular-svg-icons";
 

import { useHistory } from 'react-router';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));
const UserSidebar = () => {
  const classes = useStyles();
  const theme = useTheme();
 
  const [isAdmin, setIsAdmin] = React.useState(true);
  const [open, setOpen] = React.useState(false);
  const history = useHistory();
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  React.useEffect(() => {
    fetch('https://stormy-lowlands-53575.herokuapp.com/', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({  })
    })
        .then(res => res.json())
        .then(data => setIsAdmin(data));
}, [])


 
  return (
    <>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>

         
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </div>
        <hr className="bg-gray-400" />
        <List>
          <ListItem button>
            <ListItemIcon>
              <Link to="/home">
                <FontAwesomeIcon
                  icon={faHome}
                  style={{ fontSize: "20px", color: "teal" }}
                />
              </Link>
            </ListItemIcon>
            <Link to="/home">
              <ListItemText primary="Home" />
            </Link>
          </ListItem>

   
  <ListItem button>
            <ListItemIcon>
              <Link to="/addNew">
                <FontAwesomeIcon
                  icon={faPlusCircle}
                  style={{ fontSize: "20px", color: "teal" }}
                  className="sidebarDesign"
                />
              </Link>
            </ListItemIcon>
            <Link to="/addNew">
              <ListItemText primary="Add New" className="sidebarDesign"/>{" "}
            </Link>
          </ListItem>

          <ListItem button>
            <ListItemIcon>
              <Link to="/all-products">
                <FontAwesomeIcon
                  icon={faThLarge}
                  style={{ fontSize: "20px", color: "teal" }}
                  className="sidebarDesign"
                />
              </Link>
            </ListItemIcon>
            <Link to="/all-products">
              <ListItemText primary="Products" className="sidebarDesign"/>{" "}
            </Link>
          </ListItem>

          <ListItem button>
            <ListItemIcon>
              <Link to="/orders">
                <FontAwesomeIcon
                  icon={faList}
                  style={{ fontSize: "20px", color: "teal" }}
                  className="sidebarDesign"
                />
              </Link>
            </ListItemIcon>         
            <Link to="/orders">
              <ListItemText primary="Orders" className="sidebarDesign"/>{" "}
            </Link>
          </ListItem>

          <ListItem button>
            <ListItemIcon>
              <Link to="/admin">
                <FontAwesomeIcon
                  icon={faUserPlus}
                  style={{ fontSize: "20px", color: "teal" }}
                  className="sidebarDesign"
                />
              </Link>
            </ListItemIcon>
            <Link to="/admin">
              <ListItemText primary="Make Admin" className="sidebarDesign"/>{" "}
            </Link>
          </ListItem>

  
<hr/>
          <h5>For User</h5>
  <ListItem button>
            <ListItemIcon>
              <Link to="/orderList">
                <FontAwesomeIcon
                  icon={faCartPlus}
                  style={{ fontSize: "20px", color: "teal" }}
                  className="sidebarDesign"
                />
              </Link>
            </ListItemIcon>
            <Link to="/orderList">
              <ListItemText primary="Order List" className="sidebarDesign"/>{" "}
            </Link>
          </ListItem>

          <ListItem button>
            <ListItemIcon>
              <Link to="/comments">
                <FontAwesomeIcon
                  icon={faCommentDots}
                  style={{ fontSize: "20px", color: "teal" }}
                  className="sidebarDesign"
                />
              </Link>
            </ListItemIcon>
            <Link to="/comments">
              <ListItemText primary="Review" className="sidebarDesign"/>{" "}
            </Link>
          </ListItem>
  
 

        </List>
      </Drawer>
    </>
  );
};

export default UserSidebar;
