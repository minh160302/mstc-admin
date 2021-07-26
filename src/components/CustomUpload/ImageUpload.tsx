import React, { useState, useEffect, createRef, Ref } from "react";
import axios from "axios";
import Button from "components/CustomButtons/Button"
import { makeStyles } from "@material-ui/styles";
import { createStyles, Theme } from "@material-ui/core";
// @material-ui/icons
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import DeleteIcon from '@material-ui/icons/Delete';
import VisibilityIcon from '@material-ui/icons/Visibility';
import SimpleImage from "./SimpleImage";

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    '& > *': {
    },
  },
  input: {
    display: 'none',
  },
  box: {
    position: "relative",
    width: "80%",
    height: "auto",
    margin: "auto"
  },
  image: {
    maxWidth: "100%",
  },
}))

interface ImageUploadProps {
  url: string;
  onChange: (params: any) => void;
}

const ImageUpload: React.FC<ImageUploadProps> = (props) => {
  const classes = useStyles();

  let fileInput = createRef<HTMLElement & HTMLInputElement>();
  const [open, setOpen] = useState<boolean>(false);
  const [url, setUrl] = useState<string>(null);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    setUrl(props.url)
  }, [props.url])

  const handleClick = () => {
    fileInput.current.click();
  }

  const handleRemove = () => {
    setUrl(null);
    if (props.onChange) props.onChange(null);
    fileInput.current.value = null;
  };

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

  return (
    <div className={classes.root}>
      <input type="file" onChange={handleImageChange} ref={fileInput} />
      {/* {
        !url && (
          <Button
            variant="contained"
            color="default"
            component="span"
            onClick={handleClick}
          >
            <CloudUploadIcon />
            Upload
          </Button>

        )
      } */}
      {url && (
        <div className={classes.box}>
          <div className="container-upload-image">
            <div>
              <img className={classes.image} src={url} alt="thumbnail-image" />
            </div>
            <div>
              <Button justIcon round color="white" onClick={handleClickOpen} >
                <VisibilityIcon />
              </Button>
              <Button justIcon round color="white" onClick={handleRemove}>
                <DeleteIcon />
              </Button>
            </div>
          </div>
        </div>
      )}
      <SimpleImage open={open} onClose={handleClose} url={url} />
    </div>
  )
}

export default ImageUpload;