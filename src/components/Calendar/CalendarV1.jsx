import 'date-fns';
import React from "react";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import CalendarIcon from "../Icons/CalendarIcon";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const materialTheme = createMuiTheme({
  overrides: {
    MuiPickersToolbar: {
      root: {
        backgroundColor: "#ffffff",
      },
    },
    MuiPickersCalendarHeader: {
      root: {},
      dayLabel: {
        width: 30
      },
      switchHeader: {
        width: 230,
        margin: "auto"
      }
    },
    MuiPickersDay: {
      root: {},
      today: {
        color: "#3f51b5",
        fontWeight: 800
      },
      day: {
        width: 30,
        height: 30
      }
    },
    MuiPickersModalDialog: {},
  },
});

const styles = {
  datePickerStyle: {
    width: 162,
    marginRight: 8,
    "& > div::before ": {
      borderBottom: "0 !important"
    },
    "& > div > div > button": {
      marginBottom: 4,
      height: 40,
      width: 40,
      border: "1px solid rgba(18, 18, 18, 0.1)",
      background: "#FFFFFF"
    },
    marginTop: 8,
    padding: "5px 0px 0px 10px",
    height: 40,
    border: "1px solid rgba(18, 18, 18, 0.1)",
    borderRadius: "20px",
    background: "#FFFFFF",
    color: "#25345C !important"

  },
  calendarIcon: {
  },
}

const useStyles = makeStyles(styles);

export default function Calendar(props) {
  const classes = useStyles();

  let getTime = new Date().getTime();
  let DateTime = new Date(getTime);
  const [selectedDate, setSelectedDate] = React.useState(DateTime);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  return (
    <ThemeProvider theme={materialTheme}>
      <div className={classes.keyBoardDatePickerContainer}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <Grid container={!props.isNotContainer} justify="center" className={classes.keyBoardDatePickerContainer}>
            <KeyboardDatePicker
              className={classes.datePickerStyle}
              disableToolbar
              variant="static"
              format="MM/dd/yyyy"
              margin="normal"
              id="date-picker-inline"
              value={selectedDate}
              onChange={handleDateChange}
              // open={true}
              keyboardIcon={<CalendarIcon className={classes.calendarIcon} />}
              InputProps={{
                disableUnderline: true,
              }}
              DialogProps={{
                maxWidth: 230,
                className: classes.dialog,
              }}
            />
          </Grid>
        </MuiPickersUtilsProvider>
      </div>
    </ThemeProvider>
  );
}
