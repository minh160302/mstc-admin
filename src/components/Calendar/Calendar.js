import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import { makeStyles } from "@material-ui/core/styles";
import "moment/locale/vi";
import React, { useState } from "react";
import ChevronLeftIcon from "../Icons/ChevronLeftIcon";
import ChevronRightIcon from "../Icons/ChevronRightIcon";
import { IconButton } from "@material-ui/core";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./calendar.css";

const useStyles = makeStyles((theme) => ({
  toolbarContainer: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  currentDate: {
    alignSelf: "center",
  },
  goTo: {
    "&:hover": {
      cursor: "pointer",
    },
  },
}));

const localizer = momentLocalizer(moment);

const CustomToolbar = (toolbar) => {
  const classes = useStyles();

  const now = new Date();
  const [month, setMonth] = React.useState(now.getMonth() + 1);
  const [year, setYear] = React.useState(now.getFullYear());
  React.useEffect(() => {}, [month]);

  const handleChange = (event) => {
    event.target.value ? setMonth(event.target.value) : null;

    console.log(event.target.value);
  };

  const goTo = (e, month) => {
    console.log(month);
    toolbar.date.setMonth(month);
    toolbar.onNavigate("prev");
  };

  const goToBack = () => {
    if (month == 1) {
      setMonth(12);
      setYear(now.getFullYear() - 1);
    } else {
      setMonth(month - 1);
    }
    toolbar.date.setMonth(toolbar.date.getMonth() - 1);
    toolbar.onNavigate("prev");
  };

  const goToNext = () => {
    if (month == 12) {
      setMonth(1);
      setYear(now.getFullYear() + 1);
    } else {
      setMonth(month + 1);
    }
    toolbar.date.setMonth(toolbar.date.getMonth() + 1);
    toolbar.onNavigate("next");
  };

  return (
    <div className={classes.toolbarContainer}>
      <ChevronLeftIcon className={classes.goTo} onClick={goToBack} />
      <div className={classes.currentDate}>
        {now.getDate()}/{month}/{year}
      </div>
      <ChevronRightIcon className={classes.goTo} onClick={goToNext} />
    </div>
  );
};

const App = () => {
  const handleSelectEvent = (event) => {
    console.log(event.target);
  };

  return (
    <div className="App" style={{ position: "relative", top: 3 }}>
      <Calendar
        localizer={localizer}
        defaultDate={new Date()}
        components={{
          toolbar: CustomToolbar,
        }}
        defaultView="month"
        views={{
          month: true,
        }}
        events={[]}
        style={{ height: 150, width: 200 }}
      />
    </div>
  );
};

export default App;
