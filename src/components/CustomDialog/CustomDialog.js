import React, { useState, useEffect } from "react";
// @material-ui/core components
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import Grid from "@material-ui/core/Grid";
import binh from "../../assets/img/binh.png";
import tag from "../../assets/img/tag.png";
import CustomSelectComponent from "../CustomSelect/CustomSelectComponent";
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
  dialogTitle: {
    color: "#25345C",
    fontWeight: "bold",
    fontSize: 22,
  },
  dialogContent: {
    width: "100% !important",
    padding: "0px 16px 0px 16px !important",
  },
  userInfo: {
    color: "#333333",
    fontWeight: 500,
    fontSize: "14px",
  },
  date: {
    marginRight: "15px",
    color: "#4E5260",
    fontSize: "14px",
    fontWeight: 500,
  },
  today: {
    background: "#EB5757",
    color: "#FFFFFF",
    borderRadius: "5px",
    padding: "3px 7px",
    fontSize: "12px",
    fontWeight: 500,
  },
  userContainer: {
    display: "flex",
    alignItems: "center",
    marginBottom: "24px",
  },
  personImg: {
    marginRight: "8px",
  },
  contentContainer: {
    margin: "0px 0px 0px 4px",
    border: "2px solid #F2F3F7",
    padding: "16px",
    borderRadius: "5px",
    width: "inherit",
  },
  tagDetailContainer: {
    marginLeft: "12px",
  },
  online: {
    color: "#2F80ED",
    fontSize: "14px",
    fontWeight: 500,
    marginBottom: "8px",
  },
  timeDate: {
    fontSize: "14px",
    fontWeight: 500,
    color: "#2F80ED",
    marginBottom: "8px",
  },
  second: {
    background: "#F2F3F7",
    padding: "5px",
    color: "#4E5260",
    fontSize: "12px",
    maxWidth: 100,
    marginRight: 0,
    marginLeft: "auto",
    marginBottom: "5px",
  },
  nguyen: {
    color: "#2F80ED",
    fontSize: "14px",
    fontWeight: 400,
  },
  mb3: {
    marginBottom: "3px",
  },
  sectionPosition: {
    display: "flex",
    justifyContent: "space-between",
    borderBottom: "1px solid #F2F3F7",
    padding: "16px 0px 8px 0px",
  },
  sectionPositionLast: {
    display: "flex",
    justifyContent: "space-between",
    borderBottom: "1px solid #F2F3F7",
    padding: "16px 0px 8px 0px",
    marginBottom: "32px",
  },
  roomButton: {
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
  confirmation: {
    color: "#4E5260",
    fontSize: "16px",
    fontWeight: 400,
    lineHeight: "normal",
  },
  confirmationContent: {
    color: "#4E5260",
    fontSize: "16px",
    fontWeight: 500,
    lineHeight: "normal",
  },
});

const useStyles = makeStyles(styles);

const CustomDialog = (props) => {
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

  return (
    <Dialog
      open={openDialog}
      onClose={handleCloseDialog}
      aria-labelledby="customized-dialog-title"
      className={classes.hello}
    >
      <div>
        <div className={classes.dialogBg}>
          {/* <DialogTitle children={header} onClose={handleCloseDialog}>
            Hello
          </DialogTitle> */}
          <DialogContent className={classes.dialogContent}>
            <Grid container className={classes.contentContainer}>
              <Grid item xs={12} sm={8}>
                <Grid container>
                  <Grid item xs={12} className={classes.userContainer}>
                    <img
                      src={binh}
                      alt="Person"
                      className={classes.personImg}
                    />
                    <span className={classes.nguyen}>Nguyễn Văn Bình</span>
                  </Grid>
                  <Grid item xs={12} style={{ display: "flex" }}>
                    <img src={tag} alt="Person Tag" />
                    <div className={classes.tagDetailContainer}>
                      <div className={`${classes.mb8} ${classes.userInfo}`}>
                        HITACHI SUB-2120-221
                      </div>
                      <div className={`${classes.mb8} ${classes.userInfo}`}>
                        Phiên đấu giá: JEN 04-26
                      </div>
                      <div className={`${classes.mb8} ${classes.userInfo}`}>
                        Thời gian: 14:25 25/04/2021 - 16:30 26/04/2021
                      </div>
                    </div>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} sm={4} style={{ textAlign: "right" }}>
                <div className={classes.online}>ONLINE</div>
                <div className={classes.timeDate}>15:00 26/04/2021</div>
                <div className={classes.second}>1 ngày 12:20:15</div>
                <CustomSelectComponent
                  listValues={["Chờ xác nhận"]}
                  selectValue={"Chờ xác nhận"}
                  placeholder={"Chờ xác nhận"}
                />
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs={12} className={classes.sectionPosition}>
                <div className={classes.confirmation}>
                  Link phòng đấu giá online
                </div>
                <Button className={classes.roomButton}>Tạo phòng</Button>
              </Grid>
              <Grid item xs={12} className={classes.sectionPosition}>
                <div className={classes.confirmation}>Phiếu đấu giá</div>
                <div className={classes.confirmationContent}>JEN 04-13</div>
              </Grid>
              <Grid item xs={12} className={classes.sectionPosition}>
                <div className={classes.confirmation}>Năm sản xuất</div>
                <div className={classes.confirmationContent}>2011(yr)</div>
              </Grid>
              <Grid item xs={12} className={classes.sectionPosition}>
                <div className={classes.confirmation}>Số giờ sử dụng</div>
                <div className={classes.confirmationContent}>8,215(hr)</div>
              </Grid>
              <Grid item xs={12} className={classes.sectionPosition}>
                <div className={classes.confirmation}>Nơi bán</div>
                <div className={classes.confirmationContent}>TOKYO CENTER</div>
              </Grid>
              <Grid item xs={12} className={classes.sectionPositionLast}>
                <div className={classes.confirmation}>Giá thấp nhất</div>
                <div className={classes.confirmationContent}>948,027,600 đ</div>
              </Grid>
            </Grid>
          </DialogContent>
        </div>
      </div>
    </Dialog>
  );
};

export default CustomDialog;
