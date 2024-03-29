import React from "react";
import { SvgIcon } from "@material-ui/core";

function MaintenanceIcon(props) {
  return (
    <SvgIcon {...props}>
      <path
        d="M0.375 0.1875V12.5625H3.125V15.3125H19.625V2.9375H16.875V0.1875H0.375ZM1.75 1.5625H15.5V11.1875H1.75V1.5625ZM3.125 2.9375V9.8125H14.125V2.9375H3.125ZM4.5 4.3125H12.75V8.4375H4.5V4.3125ZM16.875 4.3125H18.25V13.9375H4.5V12.5625H16.875V4.3125Z"
        fill="#121212"
      />
    </SvgIcon>
  );
}

export default MaintenanceIcon;
