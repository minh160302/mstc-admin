import React from "react";
import { SvgIcon } from "@material-ui/core";

function OverviewIcon(props) {
  return (
    <SvgIcon {...props}>
      <path
        d="M9 0.875C7.51042 0.875 6.12109 1.25456 4.83203 2.01367C3.58594 2.72982 2.60482 3.71094 1.88867 4.95703C1.12956 6.24609 0.75 7.63542 0.75 9.125C0.75 10.099 0.914714 11.0443 1.24414 11.9609C1.57357 12.8346 2.03906 13.6367 2.64062 14.3672L2.83398 14.625H15.166L15.3594 14.3672C15.9609 13.6367 16.4264 12.8346 16.7559 11.9609C17.0853 11.0443 17.25 10.099 17.25 9.125C17.25 7.63542 16.8776 6.24609 16.1328 4.95703C15.4023 3.71094 14.4141 2.72982 13.168 2.01367C11.8789 1.25456 10.4896 0.875 9 0.875ZM9 2.25C10.2461 2.25 11.4062 2.5651 12.4805 3.19531C13.5117 3.79688 14.3281 4.61328 14.9297 5.64453C15.5599 6.71875 15.875 7.87891 15.875 9.125C15.875 9.88411 15.7461 10.6217 15.4883 11.3379C15.2448 12.0254 14.901 12.6628 14.457 13.25H3.54297C3.09896 12.6628 2.75521 12.0254 2.51172 11.3379C2.25391 10.6217 2.125 9.88411 2.125 9.125C2.125 7.87891 2.4401 6.71875 3.07031 5.64453C3.67188 4.61328 4.48828 3.79688 5.51953 3.19531C6.59375 2.5651 7.75391 2.25 9 2.25ZM9 2.9375C8.8138 2.9375 8.64909 3.00911 8.50586 3.15234C8.37695 3.28125 8.3125 3.4388 8.3125 3.625C8.3125 3.8112 8.37695 3.97591 8.50586 4.11914C8.64909 4.24805 8.8138 4.3125 9 4.3125C9.1862 4.3125 9.34375 4.24805 9.47266 4.11914C9.61589 3.97591 9.6875 3.8112 9.6875 3.625C9.6875 3.4388 9.61589 3.28125 9.47266 3.15234C9.34375 3.00911 9.1862 2.9375 9 2.9375ZM6.25 3.66797C6.0638 3.66797 5.89909 3.73958 5.75586 3.88281C5.62695 4.01172 5.5625 4.16927 5.5625 4.35547C5.5625 4.54167 5.62695 4.70638 5.75586 4.84961C5.89909 4.97852 6.0638 5.04297 6.25 5.04297C6.4362 5.04297 6.59375 4.97852 6.72266 4.84961C6.86589 4.70638 6.9375 4.54167 6.9375 4.35547C6.9375 4.16927 6.86589 4.01172 6.72266 3.88281C6.59375 3.73958 6.4362 3.66797 6.25 3.66797ZM11.75 3.66797C11.5638 3.66797 11.3991 3.73958 11.2559 3.88281C11.127 4.01172 11.0625 4.16927 11.0625 4.35547C11.0625 4.54167 11.127 4.70638 11.2559 4.84961C11.3991 4.97852 11.5638 5.04297 11.75 5.04297C11.9362 5.04297 12.0938 4.97852 12.2227 4.84961C12.3659 4.70638 12.4375 4.54167 12.4375 4.35547C12.4375 4.16927 12.3659 4.01172 12.2227 3.88281C12.0938 3.73958 11.9362 3.66797 11.75 3.66797ZM4.23047 5.6875C4.04427 5.6875 3.87956 5.75911 3.73633 5.90234C3.60742 6.03125 3.54297 6.1888 3.54297 6.375C3.54297 6.5612 3.60742 6.72591 3.73633 6.86914C3.87956 6.99805 4.04427 7.0625 4.23047 7.0625C4.41667 7.0625 4.57422 6.99805 4.70312 6.86914C4.84635 6.72591 4.91797 6.5612 4.91797 6.375C4.91797 6.1888 4.84635 6.03125 4.70312 5.90234C4.57422 5.75911 4.41667 5.6875 4.23047 5.6875ZM13.5762 5.70898L9.6875 7.94336C9.47266 7.81445 9.24349 7.75 9 7.75C8.61328 7.75 8.28385 7.88607 8.01172 8.1582C7.75391 8.41602 7.625 8.73828 7.625 9.125C7.625 9.51172 7.75391 9.84115 8.01172 10.1133C8.28385 10.3711 8.60612 10.5 8.97852 10.5C9.36523 10.5 9.69466 10.3711 9.9668 10.1133C10.2389 9.84115 10.375 9.51888 10.375 9.14648V9.125L14.2637 6.91211L13.5762 5.70898ZM3.5 8.4375C3.3138 8.4375 3.14909 8.50911 3.00586 8.65234C2.87695 8.78125 2.8125 8.9388 2.8125 9.125C2.8125 9.3112 2.87695 9.47591 3.00586 9.61914C3.14909 9.74805 3.3138 9.8125 3.5 9.8125C3.6862 9.8125 3.84375 9.74805 3.97266 9.61914C4.11589 9.47591 4.1875 9.3112 4.1875 9.125C4.1875 8.9388 4.11589 8.78125 3.97266 8.65234C3.84375 8.50911 3.6862 8.4375 3.5 8.4375ZM14.5 8.4375C14.3138 8.4375 14.1491 8.50911 14.0059 8.65234C13.877 8.78125 13.8125 8.9388 13.8125 9.125C13.8125 9.3112 13.877 9.47591 14.0059 9.61914C14.1491 9.74805 14.3138 9.8125 14.5 9.8125C14.6862 9.8125 14.8438 9.74805 14.9727 9.61914C15.1159 9.47591 15.1875 9.3112 15.1875 9.125C15.1875 8.9388 15.1159 8.78125 14.9727 8.65234C14.8438 8.50911 14.6862 8.4375 14.5 8.4375ZM4.23047 11.1875C4.04427 11.1875 3.87956 11.2591 3.73633 11.4023C3.60742 11.5312 3.54297 11.6888 3.54297 11.875C3.54297 12.0612 3.60742 12.2259 3.73633 12.3691C3.87956 12.498 4.04427 12.5625 4.23047 12.5625C4.41667 12.5625 4.57422 12.498 4.70312 12.3691C4.84635 12.2259 4.91797 12.0612 4.91797 11.875C4.91797 11.6888 4.84635 11.5312 4.70312 11.4023C4.57422 11.2591 4.41667 11.1875 4.23047 11.1875ZM13.7695 11.1875C13.5833 11.1875 13.4186 11.2591 13.2754 11.4023C13.1465 11.5312 13.082 11.6888 13.082 11.875C13.082 12.0612 13.1465 12.2259 13.2754 12.3691C13.4186 12.498 13.5833 12.5625 13.7695 12.5625C13.9557 12.5625 14.1133 12.498 14.2422 12.3691C14.3854 12.2259 14.457 12.0612 14.457 11.875C14.457 11.6888 14.3854 11.5312 14.2422 11.4023C14.1133 11.2591 13.9557 11.1875 13.7695 11.1875Z"
        fill="#121212"
      />
    </SvgIcon>
  );
}

export default OverviewIcon;
