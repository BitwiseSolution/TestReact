import clsx from "clsx";
import React, { useEffect } from "react";
import { makeStyles, useTheme, fade } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import AppBar from "@material-ui/core/AppBar";
import PersonIcon from "@material-ui/icons/Person";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import AddIcon from "@material-ui/icons/Add";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import HomeIcon from "@material-ui/icons/Home";
import { Grid } from "@material-ui/core";
import { Container } from "@material-ui/core";
import NotificationsIcon from "@material-ui/icons/Notifications";
import ArchiveIcon from "@material-ui/icons/Archive";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import { connect } from "react-redux";
import { useSelector } from "react-redux";
import * as contactAction from "../actions/contactAction";
import { withRouter } from "react-router";
import TableGrid from "./TableGrid";
import { Link } from "react-router-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
  useRouteMatch
} from "react-router-dom";
import PropTypes from "prop-types";
import "../App.css";
import SettingsScreen from "./SettingsScreen";
import InitiateStep from "./InitiateStep";
import App from "./App";
import SpecificationStep from "./SpecificationStep";
import ResourcesStep from "./ResourcesStep";
import Budget from "./Budget";
import Preview from "./Preview";
import Add from "./Add";
import EditPage from "./EditPage";
import Gauge from "./Gauge";
import { BasicAllCharts } from "./BasicAllCharts";
import Dashboardforfirstscreen from "./Dashboardforfirstscreen";


const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: 36
  },
  hide: {
    display: "none"
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4)
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap"
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1
    }
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto"
    }
  },
  searchIcon: {
    width: theme.spacing(7),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: 355
    }
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  },
  title: {
    flexGrow: 1
  }
}));

const options = [
  "Create a merge commit",
  "Squash and merge",
  "Rebase and merge",
  "Create a merge commit",
  "Squash and merge",
  "Rebase and merge",
  "Create a merge commit",
  "Squash and merge",
  "Rebase and merge"
];

 export const FirstScreen = (props) => {
   
// const store = useSelector(store=>store)

  const [openForiconbtn, setOpenForiconbtn] = React.useState(false);

  const anchorRef = React.useRef(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleClick = () => {
    console.info(`You clicked ${options[selectedIndex]}`);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setOpenForiconbtn(false);
  };

  const handleToggle = () => {
    setOpenForiconbtn(prevOpen => !prevOpen);
  };

  const handleClose = event => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpenForiconbtn(false);
  };

  const classes = useStyles();
  const theme = useTheme();
  const history = useHistory();

  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const [isActiveClass, setactiveClass] = React.useState(
     localStorage.getItem('myValueInLocalStorage') || "dashboard"
  );

  useEffect(() => {
    localStorage.setItem("myValueInLocalStorage", isActiveClass);
  });

  console.log("propssss in first screen", props);

  let { path, url } = useRouteMatch();
  return (
    <div className={classes.root}>
      <Router>
        <AppBar
          position="fixed"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open
          })}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, {
                [classes.hide]: open
              })}
            >
              <MenuIcon />
            </IconButton>
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <div className={classes.search + " custom-search"}>
                  <div className={classes.searchIcon}>
                    <SearchIcon />
                  </div>
                  <InputBase
                    placeholder="Find Corporate Goal, Initiative, Program, Project...."
                    classes={{
                      root: classes.inputRoot,
                      input: classes.inputInput
                    }}
                    inputProps={{ "aria-label": "search" }}
                  />
                </div>
              </Grid>
            </Grid>
            <div className="position-relative">
              <NotificationsIcon  
              onClick={handleToggle} />
              <Popper
                className="notification-box"
                open={openForiconbtn}
                anchorEl={anchorRef.current}
                role={undefined}
                transition
                disablePortal
              >
                {({ TransitionProps, placement }) => (
                  <Grow
                    {...TransitionProps}
                    style={{
                      transformOrigin:
                        placement === "bottom" ? "center top" : "center bottom"
                    }}
                  >
                    <Paper>
                      <ClickAwayListener onClickAway={handleClose}>
                        <MenuList id="split-button-menu">
                          {options.map((option, index) => (
                            <MenuItem
                              key={option}
                             // disabled={index === 2}
                              selected={index === selectedIndex}
                              onClick={event =>
                                handleMenuItemClick(event, index)
                              }
                            >
                              {option}
                            </MenuItem>
                          ))}
                        </MenuList>
                      </ClickAwayListener>
                    </Paper>
                  </Grow>
                )}
              </Popper>
            </div>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          className={clsx(classes.drawer, {
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open
          })}
          classes={{
            paper: clsx({
              [classes.drawerOpen]: open,
              [classes.drawerClose]: !open
            })
          }}
          open={open}
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
          <Divider />

          <List>
            <div>
              <Link to={`${path}/dashboard`}>
                <ListItem
                  button 
                 // className="customactive"
                  className={isActiveClass == "dashboard" ? " customactive" : ""}     
                  onClick={() => {
                    setactiveClass("dashboard");
                  }}           
                >
                  <ListItemIcon>
                    <HomeIcon />
                  </ListItemIcon>
                  <ListItemText primary="Home" />
                </ListItem>
              </Link>
            </div>

            <div>
            <Link to={`${path}/add`}>
              <ListItem
                button
                className={isActiveClass == "add" ? " customactive" : ""}
                onClick={() => {
                  setactiveClass("add");
                }} 
              >
                <ListItemIcon>
                  <AddIcon />
                </ListItemIcon>
                <ListItemText primary="Add" />
              </ListItem>
              </Link>
            </div>
            <div>
            <Link to={`${path}/grid`}>
              <ListItem
                button
                className={isActiveClass == "grid" ? " customactive" : ""}
                onClick={() => {
                  setactiveClass("grid");
                }} 
              >
                <ListItemIcon>
                  <ArchiveIcon />
                </ListItemIcon>
                <ListItemText primary="Grid controls" />
              </ListItem>
              </Link>
            </div>
            <div>
            <Link to={`${path}/gauge`}>
              <ListItem
                button
                className={isActiveClass == "gauge" ? " customactive" : ""}
                onClick={() => {
                  setactiveClass("gauge");
                }} 
              >
                <ListItemIcon>
                  <PersonIcon />
                </ListItemIcon>
                <ListItemText primary="gauge controls" />
              </ListItem>
              </Link>
            </div>
            {/* <div>
              <ListItem button onClick={() => {}}>
                <ListItemIcon>
                  <PersonIcon />
                </ListItemIcon>
                <ListItemText primary="Logout" />
              </ListItem>
            </div>  */}
          </List>
        </Drawer>
        <main className={classes.content}>
           <Container maxWidth={false} className={classes.container}> 
          <Switch>
            <Route exact strict path={`${path}`} component={Dashboardforfirstscreen} /> 

            <Route strict path={`${path}/dashboard`} component={Dashboardforfirstscreen} />


            <Route strict path={`${path}/add`} component={EditPage} />

            {/* <Route strict path={`${path}/initiate-step`} component={InitiateStep} /> */}
            {/* <Route strict path={`${path}/specific-step`} component={SpecificationStep} />
            <Route strict path={`${path}/resources-step`} component={ResourcesStep} />
            <Route strict path={`${path}/budget-step`} component={Budget} />
            <Route strict path={`${path}/preview-step`} component={Preview} /> */}
             <Route strict path={`${path}/grid`} component={TableGrid} /> 
             <Route strict path={`${path}/gauge`} component={Gauge} /> 

          </Switch>
          </Container>
        </main>
      </Router>
    </div>
  );
};




const mapStateToProps = (state, ownProps) => {
  return {
     contacts: state.contacts,
    data: state.data
  };
};

const mapDispatchToProps = dispatch => {
  return {
     createContact: contact => dispatch(contactAction.createContact(contact)),
    deleteContact: index => dispatch(contactAction.deleteContact(index))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(FirstScreen));

