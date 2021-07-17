import React from "react";
// nodejs library to set properties for components
import { makeStyles } from "@material-ui/core/styles";
import CustomInput from "components/CustomInput/CustomInput.js";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon18 from "components/Icons/SearchIcon18";
import Input from "@material-ui/core/Input";

const styles = {
  iconRoot: {
    marginTop: "6px",
  },
  inputWrapper: {
    border: "1px solid #E0E0E0",
    borderRadius: 4,
    padding: "3px 11px",
    width: 300
  },
  inputSearch: {
    fontFamily: "Roboto",
    fontSize: "14px",
    lineHeight: "16px",
    fontWeight: 400,
    color: "#333333",
    "::placeholder": {
      color: "#B7BBCB",
    },
  },
  inputRoot: {
    width: "100%"
  }
};
const useStyles = makeStyles(styles);

export default function CustomSearchInput(props) {
  const { placeholder } = props
  const classes = useStyles();
  return (
    <div className={classes.inputWrapper}>
      <Input
        id="input-extrabar-search"
        classes={{
          input: classes.inputSearch,
          root: classes.inputRoot
        }}
        placeholder={placeholder}
        disableUnderline="true"
        endAdornment={
          <InputAdornment position="end">
            <SearchIcon18 classes={{ root: classes.iconRoot }} />
          </InputAdornment>
        }
      />
    </div>
  );
}
