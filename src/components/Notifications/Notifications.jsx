/* eslint-disable react/jsx-key */
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import CssBaseline from "@material-ui/core/CssBaseline";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import NotificationIcon from "../Icons/NotificationIcon";
import Badge from "@material-ui/core/Badge";
import OrangeDotIcon from "../Icons/OrangeDotIcon";

import { connect } from "react-redux";
// import { getNotification } from "reducers/notifications";
// import { setMobileOpen } from "reducers/general";


// import Calendar from "../Calendar/Calendar";
import Calendar from "../Calendar/CalendarV1"
import IconButton from "@material-ui/core/IconButton";

const drawerWidth = 250;

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
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
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "space-between",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
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
  },
  notification: {
    display: "flex",
    justifyContent: "space-between",
    width: "100px",
    fontFamily: "Roboto",
    fontSize: "14px",
    lineHeight: "16px",
    color: "#4E5260",
  },
  readAll: {
    fontFamily: "Roboto",
    fontSize: "12px",
    lineHeight: "14px",
    color: "#1e1f4a",
  },
  notiTime: {
    fontFamily: "Roboto",
    fontSize: "10px",
    lineHeight: "12px",
    color: "#828282",
    textAlign: "right",
  },
  notiTitle: {
    fontFamily: "Roboto",
    fontSize: "14px",
    lineHeight: "16px",
    color: "#4E5260",
    fontWeight: 500,
  },
  notiContent: {
    fontFamily: "Roboto",
    fontSize: "12px",
    lineHeight: "14px",
    color: "#4E5260",
  },
  notiList: {
    border: "1px solid #F2F3F7",
    borderRadius: "4px",
    margin: "10px",
    width: 230,
  },
  listGutters: {
    padding: "10px 10px 0 10px",
  },
  notiHeader: {
    display: "flex",
    justifyContent: "space-between",
  },
  notiBadge: {
    height: "15px",
    minWidth: "10px",
    width: "15px",
  },
  badgePosition: {
    left: "3px",
  },
  calendar: {
    // border: "1px solid #F2F3F7",
    borderRadius: "4px",
    margin: "10px",
    width: 230,
    padding: "10px 0 10px 0px",
  },
  userIcon: {
    cursor: "pointer"
  }
}));

function Notifications(props) {
  const classes = useStyles();

  // React.useEffect(() => {
  //   props.getNotification();
  // }, []);

  // const handleDrawerToggle = () => {
  //   props.setMobileOpen(!props.mobileOpen);
  // };

  return (
    <div className={classes.root}>
      <CssBaseline />

      <div className={classes.drawerHeader}>
        <div className={classes.notification}>
          <Badge
            badgeContent={1}
            color="secondary"
            className={classes.notiBadge}
            classes={{
              badge: classes.notiBadge,
              anchorOriginTopRightRectangle: classes.badgePosition,
            }}
          >
            <div className={classes.userIcon} onClick={handleDrawerToggle}>
                <NotificationIcon />
            </div>
          </Badge>
          <p>Thông báo</p>
        </div>
        <div className={classes.readAll}>
          <p>Đọc tất cả</p>
        </div>
      </div>
      <Divider />
      <List>
        {props.notifications.map((notification) => (
          <ListItem
            button
            style={{
              backgroundColor: notification.read ? "transparent" : "#F9FAFF",
            }}
            className={classes.notiList}
            classes={{ gutters: classes.listGutters }}
          >
            <div>
              <div className={classes.notiHeader}>
                <p className={classes.notiTitle}>{notification.title}</p>
                {notification.read ? null : <OrangeDotIcon />}
              </div>

              <p className={classes.notiContent}>
                {" "}
                Khách hàng{" "}
                <span style={{ color: "#2F80ED" }}>
                  {notification.customer}
                </span>{" "}
                {notification.content}{" "}
                <span style={{ color: "#2F80ED" }}>{notification.time}</span>
              </p>
              <p className={classes.notiTime}>{notification.timeAgo}</p>
            </div>
          </ListItem>
        ))}
      </List>
      <div
        className={classes.calendar}
        style={{ marginTop: 50 }}
      >
        <Calendar />
      </div>
    </div>
  );
}

Notifications.propTypes = {
  getNotification: PropTypes.func,
  notifications: PropTypes.array,
  setMobileOpen: PropTypes.func,
  mobileOpen: PropTypes.bool,
};

const mapStateToProps = ({ notifications, general }) => {
  return {
    // notifications: notifications.notifications,
    // mobileOpen: general.mobileOpen,
  };
};

const mapDispatchToProps = {
  // getNotification,
  // setMobileOpen,
};

export default connect(mapStateToProps, mapDispatchToProps)(Notifications);
