import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import clsx from "clsx";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Grid from "@material-ui/core/Grid";
import NotificationSidebar from "components/Sidebar/NotificationSidebar";
import Charts from "views/Charts/Charts";
import avatar from "assets/img/faces/avatar.jpg";
import Card from "components/Card/Card.js";
import ContactDialog from "./Edit/ContactDialog";
import AboutDialog from "./Edit/AboutDialog";
import Button from "@material-ui/core/Button";
//Icons
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import PhoneIcon from "@material-ui/icons/Phone";
import LinkIcon from "@material-ui/icons/Link";
import BusinessIcon from "@material-ui/icons/Business";
import CakeIcon from "@material-ui/icons/Cake";
import CastForEducationIcon from "@material-ui/icons/CastForEducation";
import RoomIcon from "@material-ui/icons/Room";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
//Redux
import { getProfile } from "reducers/user-profile";
import { connect } from "react-redux";

const drawerWidth = 261;
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  content: {
    flexGrow: 1,
    padding: 15,
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
    display: "flex",
    justifyContent: "center",
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 0,
    [theme.breakpoints.down("sm")]: {
      marginRight: "-261px",
      maxWidth: "100%",
    },
  },
  bigOverview: {
    height: "290px",
    background: "#fff",
    width: "110%",
    marginBottom: "28px",
  },
  header: {
    background: "#1e1f4a",
    minHeight: "300px",
    display: "flex",
    alignItems: "center",
    padding: "2rem",
    marginBottom: "-100px",
  },
  avatarContainer: {
    width: "70px",
    height: "70px",
    // zIndex: 5,
    overflow: "hidden",
    boxShadow:
      "0 10px 30px -12px rgb(0 0 0 / 42%), 0 4px 25px 0px rgb(0 0 0 / 12%), 0 8px 10px -5px rgb(0 0 0 / 20%)",
    transition: "all 300ms linear",
    borderRadius: "50%",
  },
  userTitleContainer: {
    marginLeft: "16px",
  },
  username: {
    color: "#FFFFFF",
    fontWeight: "bold",
    lieHeight: "normal",
    fonSize: "22px",
    marginBottom: "4px",
  },
  address: {
    color: "rgba(255, 255, 255, 0.74)",
    fontSize: "16px",
    fontWeight: 400,
  },
  socialContainer: {
    padding: "10px 24px",
    borderLeft: "solid 1px rgba(255, 255, 255, 0.38)",
    fontSize: "18px",
    color: "#FFFFFF",
  },
  socialContainerFirst: {
    padding: "10px 24px",
  },
  numSocial: {
    fontSize: "18px",
    color: "#FFFFFF",
    fontWeight: "bold",
  },
  typeSocial: {
    color: "rgba(255, 255, 255, 0.74)",
    fontSize: "12px",
  },
  contactContainer: {
    padding: "2rem",
  },
  aboutContainer: {
    padding: "24px",
  },
  contactDetailContainer: {
    display: "flex",
    padding: "8px",
  },
  aboutDetailContainer: {
    display: "flex",
    padding: "15px",
  },
  marginLeft16: {
    marginLeft: "16px",
    textAlign: "left",
  },
  editButton: {
    background: "#1e1f4a",
    textTransform: "unset",
    padding: "4px 10px",
    color: "#FFFFFF",
    fontSize: "14px",
    fontWeight: 400,
    "&:hover": {
      background: "#1e1f4a",
      color: "#FFFFFF",
      textTransform: "unset",
    },
    "&:focus": {
      background: "#1e1f4a",
      color: "#FFFFFF",
      textTransform: "unset",
    },
  },
  contact: {
      padding: "24px 24px 0px 24px",
      fontWeight: "bold",
      fontSize: "16px",
  },
  about:{
    padding: "24px 24px 0px 24px",
    fontWeight: "bold",
    fontSize: "16px",
  }
}));

function Profile(props) {
  const classes = useStyles();

  React.useEffect(() => {
    props.getProfile();
  }, []);

  const [openContactDialog, setOpenContactDialog] = React.useState(false);

  const handleCloseContact = () => {
    setOpenContactDialog(false);
  };

  const handleOpenContactDialog = () => {
    setOpenContactDialog(true);
  };

  const [openAboutDialog, setOpenAboutDialog] = React.useState(false);

  const handleCloseAbout = () => {
    setOpenAboutDialog(false);
  };

  const handleOpenAboutDialog = () => {
    setOpenAboutDialog(true);
  };

  console.log(props.profile);

  return (
    <div className={classes.root}>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div>
          <GridContainer className={classes.header}>
            <GridItem xs={4} style={{ display: "flex", alignItems: "center" }}>
              <img src={avatar} alt="..." className={classes.avatarContainer} />
              <div className={classes.userTitleContainer}>
                <div className={classes.username}>Kelly Brown</div>
                <div className={classes.address}>Florida, USA</div>
              </div>
            </GridItem>
            <GridItem
              xs={8}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
              }}
            >
              <div style={{ display: "flex" }}>
                <span className={classes.socialContainerFirst}>
                  {" "}
                  <div className={classes.numSocial}>2k+</div>
                  <div className={classes.typeSocial}>Followers</div>{" "}
                </span>
                <span className={classes.socialContainer}>
                  {" "}
                  <div className={classes.numSocial}>47</div>
                  <div className={classes.typeSocial}>Following</div>{" "}
                </span>
                <span className={classes.socialContainer}>
                  {" "}
                  <div className={classes.numSocial}>327</div>
                  <div className={classes.typeSocial}>Friends</div>{" "}
                </span>
              </div>
            </GridItem>
          </GridContainer>
          {props.profile && (
            <GridContainer>
              <GridItem xs={12} xl={4}>
                <Card>
                  <div className={classes.contact}>Contact</div>
                  <div className={classes.contactContainer}>
                    <div className={classes.contactDetailContainer}>
                      <MailOutlineIcon />
                      <div className={classes.marginLeft16}>
                        <div>Email</div>
                        <div>{props.profile.email}</div>
                      </div>
                    </div>
                    <div className={classes.contactDetailContainer}>
                      <PhoneIcon />
                      <div className={classes.marginLeft16}>
                        <div>Phone</div>
                        <div>{props.profile.phone}</div>
                      </div>
                    </div>
                    <div className={classes.contactDetailContainer}>
                      <LinkIcon />
                      <div className={classes.marginLeft16}>
                        <div>Web page</div>
                        <div>{props.profile.webPage}</div>
                      </div>
                    </div>
                  </div>
                  <Button
                    className={classes.editButton}
                    onClick={handleOpenContactDialog}
                  >
                    Edit
                  </Button>
                </Card>
              </GridItem>
              <ContactDialog
                open={openContactDialog}
                setDialog={handleCloseContact}
                renderTitle={"Edit Contact"}
              />
              <GridItem xs={12} xl={8}>
                <Card>
                  <div className={classes.about}>About</div>
                  <GridContainer className={classes.aboutContainer}>
                    <Grid item xs={4} className={classes.aboutDetailContainer}>
                      <BusinessIcon />
                      <div className={classes.marginLeft16}>
                        <div>Work at</div>
                        <div>{props.profile.workAt}</div>
                      </div>
                    </Grid>
                    <Grid item xs={4} className={classes.aboutDetailContainer}>
                      <CakeIcon />
                      <div className={classes.marginLeft16}>
                        <div>Birthday</div>
                        <div>{props.profile.birthday}</div>
                      </div>
                    </Grid>
                    <Grid item xs={4} className={classes.aboutDetailContainer}>
                      <CastForEducationIcon />
                      <div className={classes.marginLeft16}>
                        <div>Education</div>
                        <div>{props.profile.education}</div>
                      </div>
                    </Grid>
                    <Grid item xs={4} className={classes.aboutDetailContainer}>
                      <RoomIcon />
                      <div className={classes.marginLeft16}>
                        <div>Address</div>
                        <div>{props.profile.address}</div>
                      </div>
                    </Grid>
                    <Grid item xs={4} className={classes.aboutDetailContainer}>
                      <AccountCircleIcon />
                      <div className={classes.marginLeft16}>
                        <div>Account type</div>
                        <div>{props.profile.accountType}</div>
                      </div>
                    </Grid>
                  </GridContainer>

                  <Button
                    className={classes.editButton}
                    onClick={handleOpenAboutDialog}
                  >
                    Edit
                  </Button>
                </Card>
              </GridItem>
              <AboutDialog
                open={openAboutDialog}
                setDialog={handleCloseAbout}
                renderTitle={"Edit About"}
              />
            </GridContainer>
          )}
        </div>
      </main>
      <NotificationSidebar />
    </div>
  );
}

const mapStateToProps = ({ profile }) => {
  return {
    profile: profile.profile,
  };
};

const mapDispatchToProps = {
  getProfile,
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
