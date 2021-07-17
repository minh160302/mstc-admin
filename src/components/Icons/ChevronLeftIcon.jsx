import React from "react";
import { SvgIcon } from "@material-ui/core";

function ChevronLeftIcon(props) {
  return (
    <SvgIcon width="16"
    height="16"
    viewBox="0 0 16 16"{...props}>
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10 12L6 8L10 4"
          stroke="#828282"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </SvgIcon>
  );
}

export default ChevronLeftIcon;
