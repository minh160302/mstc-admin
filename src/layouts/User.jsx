import React from "react";
import cx from "classnames";
import { Switch, Route, Redirect, useHistory } from "react-router-dom";
// creates a beautiful scrollbar
import PerfectScrollbar from "perfect-scrollbar";
import "perfect-scrollbar/css/perfect-scrollbar.css";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import AdminNavbar from "../components/Navbars/AdminNavbar.js";
import Footer from "components/Footer/Footer.js";
import Sidebar from "components/Sidebar/Sidebar.js";
// import FixedPlugin from "components/FixedPlugin/FixedPlugin.js";
import smtcLogo from "../assets/img/logo-transparent.png"


import routes from "user-routes";
import styles from "../assets/jss/material-dashboard-pro-react/layouts/adminStyle";

import Loading from "components/Loading/Loading";
import { connect } from "react-redux";
import { verifyJwtToken, reloadWithToken, getCurrentUserInfo } from "../store/actions/authentication";

var ps;

const useStyles = makeStyles(styles);

export function Layout(props) {
  const history = useHistory();
  const { ...rest } = props;
  // states and functions
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [miniActive, setMiniActive] = React.useState(false);
  const [image, setImage] = React.useState("");
  const [color, setColor] = React.useState("blue");
  const [bgColor, setBgColor] = React.useState("white");
  // const [hasImage, setHasImage] = React.useState(true);
  const [fixedClasses, setFixedClasses] = React.useState("dropdown");

  const [fetchSession, setFetchSession] = React.useState(false);

  // styles
  const classes = useStyles();
  const mainPanelClasses =
    classes.mainPanel +
    " " +
    cx({
      [classes.mainPanelSidebarMini]: miniActive,
      [classes.mainPanelWithPerfectScrollbar]:
        navigator.platform.indexOf("Win") > -1,
    });
  // ref for main panel div
  const mainPanel = React.createRef();


  // keep props.isAuthenticated value unchanged when reload
  React.useEffect(() => {
    props.reloadWithToken()
  }, [])


  // fetch user info after user authenticated
  React.useEffect(() => {
    if (props.isAuthenticated) {
      props.getCurrentUserInfo();
    }
  }, [props.isAuthenticated])


  React.useEffect(() => {
    console.log(`fetchSession: ${fetchSession}`);
    async function fetchUserInfo() {
      try {
        await props.verifyJwtToken();
      } catch (e) {
      } finally {
        console.log("fetch", fetchSession)
        setFetchSession(true);
        console.log(props.isAuthenticated);
      }
    }
    fetchUserInfo();

    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(mainPanel.current, {
        suppressScrollX: true,
        suppressScrollY: false,
      });
      document.body.style.overflow = "hidden";
    }
    window.addEventListener("resize", resizeFunction);

    // Specify how to clean up after this effect:
    return function cleanup() {
      if (navigator.platform.indexOf("Win") > -1) {
        ps.destroy();
      }
      window.removeEventListener("resize", resizeFunction);
    };
  }, [1]);
  // functions for changeing the states from components

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const getRoute = () => {
    return window.location.pathname !== "/u/article";
  };
  const getActiveRoute = (routes) => {
    let activeRoute = "Default Brand Text";
    for (let i = 0; i < routes.length; i++) {
      if (routes[i].collapse) {
        let collapseActiveRoute = getActiveRoute(routes[i].views);
        if (collapseActiveRoute !== activeRoute) {
          return collapseActiveRoute;
        }
      } else {
        if (
          window.location.href.indexOf(routes[i].layout + routes[i].path) !== -1
        ) {
          return routes[i].name;
        }
      }
    }

    return activeRoute;
  };

  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.collapse) {
        return getRoutes(prop.views);
      }
      if (prop.layout === "/u") {
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  };
  const sidebarMinimize = () => {
    setMiniActive(!miniActive);
  };
  const resizeFunction = () => {
    if (window.innerWidth >= 960) {
      setMobileOpen(false);
    }
  };

  const renderDataContent = () => {
    return (
      <>
        <AdminNavbar
          sidebarMinimize={sidebarMinimize.bind(this)}
          miniActive={miniActive}
          brandText={getActiveRoute(routes)}
          handleDrawerToggle={handleDrawerToggle}
          {...rest}
        />
        <div className="layout-container">
          {getRoute() ? (
            <div className={classes.content}>
              <div className={classes.container}>
                <Switch>
                  {getRoutes(routes)}
                  <Redirect from="/u" to="/u/article" />
                </Switch>
              </div>
            </div>
          ) : (
            <div className={classes.map}>
              <Switch>
                {getRoutes(routes)}
                <Redirect from="/u" to="/u/article" />
              </Switch>
            </div>
          )}
        </div>
      </>
    );
  };

  const redirectLogin = () => {
    history.push("/a/login");
  };

  return (
    <>
      <div className={classes.wrapper}>
        {fetchSession && props.isAuthenticated && (
          <>
            <Sidebar
              routes={routes}
              logoText={"MSTC"}
              logo={smtcLogo}
              image={image}
              handleDrawerToggle={handleDrawerToggle}
              open={mobileOpen}
              color={color}
              bgColor={bgColor}
              miniActive={miniActive}
              {...rest}
            />
            {/* <Notification /> */}
          </>
        )}
        <div className={mainPanelClasses} ref={mainPanel}>
          {fetchSession ? (
            <>
              {props.isAuthenticated ? (
                <>
                  {renderDataContent()}

                </>
              ) : (
                <>{redirectLogin()}</>
              )}
            </>
          ) : (
            <>
              <Loading />
            </>
          )}
        </div>
      </div>
    </>
  );
}


const mapStateToProps = ({ authentication }) => {
  return {
    isAuthenticated: authentication.isAuthenticated,
    user: authentication.currentUser,
  };
};

const mapDispatchToProps = {
  verifyJwtToken, reloadWithToken, getCurrentUserInfo
};

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
