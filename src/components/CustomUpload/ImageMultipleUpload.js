import React, { useState, useEffect } from "react";
import axios from "axios";
// used for making the prop types of this component
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
// core components
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Dialog from "@material-ui/core/Dialog";
import Grid from "@material-ui/core/Grid";
import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons/Delete";
import VisibilityIcon from "@material-ui/icons/Visibility";

const useStyles = makeStyles((theme) => ({
  upLoadBackGround: {
    width: "175px",
    height: "175px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
  },
  categories: {
    zIndex: 3,
    position: "absolute",
    top: "10%",
    left: "10%",
    display: "flex",
    color: "white",
    justifyContent: "center",
  },
  iconColor: {
    color: "white",
  },
  box: {
    margin: "0 10px",
    position: "relative",
    width: "205px !important",
    height: "190px !important",
    border: "1px solid #d9d9d9",
    padding: "10px !important",
    textAlign: "center",
    borderRadius: "5px",
    display: "flex",
    alignItems: "center",
  },
  eye: {
    top: "60px",
    left: "40px",
  },
  delete: {
    top: "60px",
    left: "28px",
  },
}));

function SimpleImage(props) {
  const classes = useStyles();
  const { onClose, open, url } = props;
  const handleClose = () => {
    onClose(true);
  };
  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="simple-dialog-title"
      open={open}
    >
      <img src={url} alt="" />
    </Dialog>
  );
}

export default function ImageMultipleUpload(props) {
  const classes = useStyles();
  const [urlList, setUrlList] = useState([]);
  let fileInput = React.createRef();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    setUrlList(props.url || []);
    console.log(urlList);
  }, []);

  const handleImageChange = async (e) => {
    e.preventDefault();
    let reader = new FileReader();
    let file = e.target.files[0];

    if (file) {
      const formData = new FormData();
      formData.append("file", file);
      const json = await axios.post(`/api/upload`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (json && json.data) {
        urlList.push(json.data.path);
        setUrlList([...urlList]);
        if (props.onChange) props.onChange(urlList);
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

  const handleDelete = (index) => {
    let array = [...urlList]; // make a separate
    if (index !== -1) {
      array.splice(index, 1);
      setUrlList([...array]);
      if (props.onChange) props.onChange(array);
    }
  };

  console.log(urlList);

  return (
    <div className="fileinput mt-4">
      <Grid
        container
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        {urlList &&
          urlList.length > 0 &&
          urlList.map((u, index) => (
            <Grid item xs className={classes.box}>
              <img
                className={classes.image}
                src={u}
                // key={index}
                alt="upload file"
              />
              <div className={classes.categories}>
                <IconButton className={classes.eye} onClick={handleClickOpen}>
                  <VisibilityIcon className={classes.iconColor} />
                </IconButton>
                <IconButton
                  className={classes.delete}
                  onClick={() => handleDelete(index)}
                >
                  <DeleteIcon className={classes.iconColor} />
                </IconButton>
              </div>
              <SimpleImage open={open} onClose={handleClose} url={u} />
            </Grid>
          ))}
        <div>
          <input type="file" onChange={handleImageChange} ref={fileInput} />
          <Button variant="outlined" onClick={() => handleClick()}>
            <div className={classes.upLoadBackGround}>
              <Grid direction="column" container>
                <Grid item>
                  <AddIcon />
                </Grid>
                <Grid item>
                  <p>Upload</p>
                </Grid>
              </Grid>
            </div>
          </Button>
        </div>
      </Grid>
    </div>
  );
}

ImageMultipleUpload.propTypes = {
  url: PropTypes.string,
};
