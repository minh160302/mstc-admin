import React from "react";
import { SvgIcon } from "@material-ui/core";

function MailIcon(props) {
  return (
    <SvgIcon {...props}>
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3.33329 3.33337H16.6666C17.5833 3.33337 18.3333 4.08337 18.3333 5.00004V15C18.3333 15.9167 17.5833 16.6667 16.6666 16.6667H3.33329C2.41663 16.6667 1.66663 15.9167 1.66663 15V5.00004C1.66663 4.08337 2.41663 3.33337 3.33329 3.33337Z"
          stroke="#4E5260"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18.3333 5L9.99996 10.8333L1.66663 5"
          stroke="#4E5260"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </SvgIcon>
  );
}

export default MailIcon;
