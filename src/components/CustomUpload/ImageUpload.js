import React, { useState, useEffect } from "react";
import axios from "axios";
// used for making the prop types of this component
import PropTypes from "prop-types";
// core components
import { makeStyles } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import Grid from "@material-ui/core/Grid";
import Dialog from '@material-ui/core/Dialog';
//icons
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import VisibilityIcon from '@material-ui/icons/Visibility';

const useStyles = makeStyles((theme) => ({
  upLoadBackGround: {
    width: "175px",
    height: "175px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  image: {
    maxWidth: "195px",
    maxHeight: "180px"
  },
  categories: {
    zIndex: 3,
    position: "absolute",
    display: "flex",
    color: "white",
    justifyContent: "center",
    alignItems: "center",
    visibility: "hidden",
  },
  iconColor: {
    color: "white"
  },
  box: {
    position: "relative",
    width: "150px",
    height: "150px",
    // display: "flex",
    // alignItems: "center",
    // justifyContent: "center"
  },
  container: {
    position: "relative",
    padding: "8px",
    textAlign: "center",
    borderRadius: "2px",
    border: "1px solid #d9d9d9",
    '&:hover:before': {
      backgroundColor: 'rgba(0, 0, 0, 0.42)'
    }
    // '&:hover': {
    //   zIndex: 1,
    //   width: "100%",
    //   height: "100%",
    //   position: "absolute",
    //   backgroundColor: "#00000080",
    //   "&:before": {
    //     borderLeftWidth: "0",
    //     borderRightWidth: "15px",
    //     left: "-15px",
    //     right: "auto",
    //   },
    //   // '&:before': {
    //   //   zIndex: 1,
    //   //   width: "100%",
    //   //   height: "100%",
    //   //   position: "absolute",
    //   //   backgroundColor: "#00000080"
    //   // }
    // },
  },
  eye: {
    marginTop: "30px",
    marginLeft: "33px",
    cursor: "pointer",
  },
  delete: {
    marginTop: "30px",
    marginLeft: "28px",
    cursor: "pointer"
  }
}))

function SimpleImage(props) {
  const { onClose, open, url } = props;
  const handleClose = () => {
    onClose(true)
  };
  return (
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
      <img
        src={url}
        alt=""
      />
    </Dialog>
  );
}

export default function ImageUpload(props) {
  const classes = useStyles();
  const [url, setUrl] = useState(null);
  let fileInput = React.createRef();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  useEffect(() => {

    setUrl(props.url)
  }, [props.url])
  const handleImageChange = async (e) => {
    e.preventDefault();
    let file = e.target.files[0];

    if (file) {
      const formData = new FormData();
      formData.append("file", file);
      const json = await axios.post(`/api/upload`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      if (json && json.data) {
        setUrl(json.data.path);
        if (props.onChange) props.onChange(json.data.path);
      }
    }
  };
  // eslint-disable-next-line
  const handleClick = () => {
    fileInput.current.click();
  };
  const handleRemove = () => {
    setUrl(null);
    if (props.onChange) props.onChange(null);
    fileInput.current.value = null;
  };
  let { changeButtonProps, removeButtonProps } = props;
  return (
    <div className="fileinput mt-4">
      <input type="file" onChange={handleImageChange} ref={fileInput} />
      <div>
        {!url && (
          <Button
            variant="outlined"
            onClick={() => handleClick()}
          >
            <div className={classes.upLoadBackGround}>
              <Grid
                direction="column"
                container
              >
                <Grid item>
                  <AddIcon />
                </Grid>
                <Grid item>
                  <p>Upload</p>
                </Grid>
              </Grid>
            </div>
          </Button>
        )}
        {url && (
          <div className={classes.box}>
            <div className="container-upload-image">
              <div className={classes.image}>
                <img className="w-100" src={url} alt="upload file" />
              </div>
              <div>
                <VisibilityIcon className={classes.iconColor} onClick={handleClickOpen} />
                <DeleteIcon className={classes.iconColor} onClick={handleRemove} />
              </div>
            </div>
          </div>
        )}
      </div>
      <SimpleImage open={open} onClose={handleClose} url={url} />
    </div>
  );
}

ImageUpload.propTypes = {
  url: PropTypes.string
};