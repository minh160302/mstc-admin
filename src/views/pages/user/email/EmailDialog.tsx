import { createStyles, makeStyles, Theme } from "@material-ui/core";
import React, { useState } from "react";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button";
// @material-ui/core/Dialog
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
// @material-ui/icons


import { IRootState } from "store/reducers";
import { connect } from "react-redux";


const useStyles = makeStyles((theme: Theme) => createStyles({

}))

interface StateProps {
  isAuthenticated: boolean;

};

interface DispatchProps {

};

interface EmailDialogProps {
  open: boolean;
  handleClose: () => void;
  handleSubmit: () => void;
  email: string;
  handleChange: (params: any) => void;
};

type Props = StateProps & DispatchProps & EmailDialogProps;

const EmailDialog: React.FC<Props> = (props) => {
  const { handleClose, open, handleSubmit, handleChange, email } = props

  return (
    <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Once subscribe, you can send emails to this email address.
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Email Address"
          type="email"
          fullWidth
          value={email}
          onChange={handleChange}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} round color="tumblr">
          Cancel
        </Button>
        <Button onClick={handleSubmit} round color="facebook">
          Subscribe
        </Button>
      </DialogActions>
    </Dialog>
  )
}


const mapStateToProps = ({ authentication }: IRootState) => {
  return {
    isAuthenticated: authentication.isAuthenticated,

  }
}

const mapDispatchToProps = {

}

export default connect<StateProps, DispatchProps, EmailDialogProps>(mapStateToProps, mapDispatchToProps)(EmailDialog);