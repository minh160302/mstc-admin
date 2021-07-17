import React, {useEffect} from "react";
import Hidden from "@material-ui/core/Hidden";
import { Drawer } from "@material-ui/core";
import { connect } from "react-redux";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import { setMobileOpen } from "reducers/general";
import Notifications from "../Notifications/Notifications";

import PropTypes from "prop-types";

const drawerWidth = 261;
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  },
  title: {
    flexGrow: 1,
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    minHeight: "800px",
  },
  drawertemp: {
    width: drawerWidth,
    flexShrink: 0,
    minHeight: "800px",
  },
  // ["@media(max-width: 1500px)"] : {
  //   drawer: {
  //     display: "none"
  //   },
  //   drawertemp: {
  //     display: "flex"
  //   }
  // },
  // ["@media(min-width: 1501px)"] : {
  //   drawer: {
  //     display: "flex"
  //   },
  //   drawertemp: {
  //     display: "none"
  //   }
  // },
  [theme.breakpoints.up('md')]: {
    drawer: {
      display: "flex"
    },
    drawertemp: {
      display: "none"
    }
  },
  [theme.breakpoints.down('md')]: {
    drawer: {
      display: "none"
    },
    drawertemp: {
      display: "flex"
    }
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    paddingBottom: 16,
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-start",
  },
  content: {
    flexGrow: 1,
    padding: 15,
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 0,
    [theme.breakpoints.down("xs")]: {
      marginRight: "-261px",
      maxWidth: "100%",
    },
  },
}));

const NotificationSidebar = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const handleDrawerToggle = () => {
    props.setMobileOpen(!props.mobileOpen);
  };
  return (
    <div>
          <Drawer
            className={classes.drawer}
            variant="persistent"
            anchor={theme.direction === "rtl" ? "left" : "right"}
            open={props.mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            <Notifications/>
          </Drawer>
        <Drawer
          className={classes.drawertemp}
          variant="temporary"
          anchor={theme.direction === "rtl" ? "left" : "right"}
          open={props.mobileOpen}
          onClose={handleDrawerToggle}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <Notifications/>
        </Drawer>
    </div>
  );
};

NotificationSidebar.propTypes = {
  setMobileOpen: PropTypes.func,
  mobileOpen: PropTypes.bool,
};

const mapStateToProps = ({ general }) => {
  return {
    mobileOpen: general.mobileOpen,
  };
};

const mapDispatchToProps = {
  setMobileOpen,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NotificationSidebar);
