/* eslint-disable react/no-unknown-property */
import React from "react";
import { SvgIcon } from "@material-ui/core";

function NotificationIcon(props) {
  return (
    <SvgIcon {...props}>
      <svg
        width="20"
        height="20"
        viewBox="-3 -2 21 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15 6.66666C15 5.34057 14.4732 4.0688 13.5355 3.13112C12.5979 2.19344 11.3261 1.66666 10 1.66666C8.67392 1.66666 7.40215 2.19344 6.46447 3.13112C5.52678 4.0688 5 5.34057 5 6.66666C5 12.5 2.5 14.1667 2.5 14.1667H17.5C17.5 14.1667 15 12.5 15 6.66666Z"
          stroke="#4E5260"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M11.4417 17.5C11.2952 17.7526 11.0849 17.9622 10.8319 18.1079C10.5789 18.2537 10.292 18.3304 10 18.3304C9.70803 18.3304 9.42117 18.2537 9.16816 18.1079C8.91515 17.9622 8.70486 17.7526 8.55835 17.5"
          stroke="#4E5260"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </SvgIcon>
  );
}

export default NotificationIcon;
