import {
  containerFluid,
  defaultFont,
  primaryColor,
  defaultBoxShadow,
  infoColor,
  successColor,
  warningColor,
  dangerColor,
  whiteColor,
  grayColor,
} from "assets/jss/material-dashboard-pro-react.js";

const drawerWidth = 261;

const headerStyle = (theme) => ({
  // appBar: {
  //   backgroundColor: "#fafafa",
  //   boxShadow: "none",
  //   borderBottom: "0",
  //   marginBottom: "0",
  //   position: "absolute",
  //   // display: "flex-end",
  //   width: "100%",
  //   // paddingTop: "8px",
  //   zIndex: "1029",
  //   color: "#1C1D21",
  //   border: "0",
  //   borderRadius: "3px",
  //   // padding: "8px 0",
  //   transition: "all 150ms ease 0s",
  //   minHeight: "68px",
  //   display: "block",
  //   [theme.breakpoints.down("md")]: {
  //     backgroundColor: "#FFFFFF",
  //   },
  // },
  appBar: {
    zIndex: "1029",
    position: "absolute",
    backgroundColor: "#fafafa",
    boxShadow: "none",
    borderBottom: "0",
    marginBottom: "0",
    color: "#1C1D21",
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    minHeight: "68px",
    display: "block",
    [theme.breakpoints.down("md")]: {
      backgroundColor: "#FFFFFF",
    },
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
    [theme.breakpoints.down("md")]: {
      width: "100% !important",
      marginRight: 0
    },
  },
  container: {
    ...containerFluid,
    minHeight: "68px",
    paddingLeft: "15px",
    marginRight: "auto",
    marginLeft: "auto",
    [theme.breakpoints.down("md")]: {
      paddingRight: "15px !important",
    },
  },
  flex: {
    // flex: 1,
  },
  title: {
    ...defaultFont,
    lineHeight: "32px",
    fontSize: "20px",
    fontWeight: "700",
    borderRadius: "3px",
    textTransform: "none",
    color: "inherit",
    paddingTop: "0.625rem",
    paddingBottom: "0.625rem",
    margin: "0 !important",
    letterSpacing: "unset",
    "&:hover,&:focus": {
      background: "transparent",
    },
    [theme.breakpoints.down("md")]: {
      padding: "10px 16px !important",
      color: "#1e1f4a",
    },
  },
  primary: {
    backgroundColor: primaryColor[0],
    color: whiteColor,
    ...defaultBoxShadow,
  },
  info: {
    backgroundColor: infoColor[0],
    color: whiteColor,
    ...defaultBoxShadow,
  },
  success: {
    backgroundColor: successColor[0],
    color: whiteColor,
    ...defaultBoxShadow,
  },
  warning: {
    backgroundColor: warningColor[0],
    color: whiteColor,
    ...defaultBoxShadow,
  },
  danger: {
    backgroundColor: dangerColor[0],
    color: whiteColor,
    ...defaultBoxShadow,
  },
  sidebarMinimize: {
    float: "left",
    padding: "0 0 0 15px",
    display: "block",
    color: grayColor[6],
  },
  sidebarMinimizeRTL: {
    padding: "0 15px 0 0 !important",
  },
  sidebarMiniIcon: {
    width: "20px",
    height: "17px",
    color: "#1e1f4a !important",
  },
  titleResponsive: {
    [theme.breakpoints.down("md")]: {
      flexGrow: 1,
    },
  },
  drawerToggleResponsive: {
    flexGrow: 0,
    [theme.breakpoints.down("md")]: {
      flexGrow: 1,
    },
  },
  brandTextResponsive: {
    flexGrow: 1,
    [theme.breakpoints.down("md")]: {
      flexGrow: "0 !important",
    },
  },
  navbarLinkResponsive: {
    paddingRight: 16,
  },
});

export default headerStyle;
