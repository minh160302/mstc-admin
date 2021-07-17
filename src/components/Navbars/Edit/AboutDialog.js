import React, { useState, useEffect } from "react";
// @material-ui/core components
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import TextField from "@material-ui/core/TextField";
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/Typography';
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
// import {postTag} from "../../store/blog/actions";
// import { connect } from 'react-redux';

const styles = (theme) => ({
  root: {
    margin: 0,
  },

  dialogBg: {
    background: "#F5F5F5",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  dialogContent: {
    width: "100% !important",
    padding: "3rem !important",
    display: "flex",
    background: "#FFFFFF",
    flexDirection: "column",
  },
  saveButton: {
    background: "#1e1f4a",
    textTransform: "unset",
    padding: "4px 10px",
    color: "#FFFFFF",
    fontSize: "14px",
    fontWeight: 400,
    marginTop: "8px",
    maxWidth: 100,
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
  textField: {
    marginBottom: "15px",
  },
});

const useStyles = makeStyles(styles);

const DialogTitle = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: 0,
  },
  dialogTitle: {
    color: "#1e1f4a",
    fontWeight: "bold",
    fontSize: 24,
    textAlign: "center",
    marginTop: 16,
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(-3),
    top: theme.spacing(-3),
    color: theme.palette.grey[500],
    padding: 0,
  },
  closeIcon: {
    color: "#FFFFFF",
  },
}))((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={`${classes.root} ${classes.dialogTitle}`} {...other}>
      <Typography variant="div">{children}</Typography>
    </MuiDialogTitle>
  );
});

const ContactDialog = (props) => {
  const classes = useStyles(styles);
  const {
    open,
    setDialog,
    setSelectValue,
    childComponent,
    header,
    handleData,
    onClose,
  } = props;

  const [openDialog, setOpenDialog] = React.useState(open);

  //open state changes => openDialog changes accordingly

  React.useEffect(() => {
    setOpenDialog(open);
  }, [open]);

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setDialog(false);
  };

  console.log(props.renderTitle);

  return (
    <Dialog
      open={openDialog}
      onClose={handleCloseDialog}
      aria-labelledby="customized-dialog-title"
      className={classes.hello}
      maxWidth="lg"
    >
      <div>
        <DialogTitle children={props.renderTitle}></DialogTitle>
        <div className={classes.dialogBg}>
          <DialogContent className={classes.dialogContent}>
            <TextField
              id="filled-password-input"
              label="Work At"
              type="text"
              variant="outlined"
              className={classes.textField}
            />
            <TextField
              id="filled-password-input"
              label="Birthday"
              type="text"
              variant="outlined"
              className={classes.textField}
            />
            <TextField
              id="filled-password-input"
              label="Education"
              type="text"
              variant="outlined"
              className={classes.textField}
            />
            <TextField
              id="filled-password-input"
              label="Address"
              type="text"
              variant="outlined"
              className={classes.textField}
            />
            <TextField
              id="filled-password-input"
              label="Account type"
              type="text"
              variant="outlined"
              className={classes.textField}
            />
            <Button onClick={handleCloseDialog} className={classes.saveButton}>
              Save
            </Button>
          </DialogContent>
        </div>
      </div>
    </Dialog>
  );
};

export default ContactDialog;
("");
