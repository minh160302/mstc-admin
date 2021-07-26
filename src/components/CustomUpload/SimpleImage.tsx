import React from "react"
import Dialog from '@material-ui/core/Dialog';
import { createStyles, makeStyles, Theme } from "@material-ui/core";


const useStyles = makeStyles((theme: Theme) => createStyles({

}))

interface SimpleImageProps {
  onClose: (params: any) => void;
  open: boolean;
  url: string;
}

const SimpleImage: React.FC<SimpleImageProps> = (props) => {
  const classes = useStyles();

  const { onClose, open, url } = props;

  const handleClose = () => {
    onClose(true)
  };

  return (
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
      <img src={url} alt="" />
    </Dialog>
  )
}

export default SimpleImage;