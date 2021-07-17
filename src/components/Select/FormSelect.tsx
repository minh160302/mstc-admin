import { createStyles, makeStyles, Theme } from "@material-ui/core";
import React from "react";
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';

const useStyles = makeStyles((theme: Theme) => createStyles({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}))

interface Options {
  title: any;
  value: any;
}

interface FormSelectProps {
  label: string;
  options: Array<Options>;
  value: any;
  onChange: (params: any) => void;
  error: boolean;
}

const FormSelect: React.FC<FormSelectProps> = (props) => {
  const classes = useStyles();

  const { label, options, value, onChange, error } = props

  return (
    <div>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel htmlFor="outlined-age-native-simple">{label}</InputLabel>
        <Select
          native
          value={value}
          onChange={onChange}
          label={label}
          error={error}
          inputProps={{
            id: 'outlined-age-native-simple',
          }}
        >
          <option aria-label="None" value="" />
          {
            options.map((option, i) => <option key={i} value={option.value}>{option.title}</option>)
          }
        </Select>
      </FormControl>
    </div>
  )
}


export default FormSelect;