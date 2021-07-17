/* eslint-disable react/no-unknown-property */
import React from "react";
import { SvgIcon } from "@material-ui/core";

function SettingBidIcon(props) {
  return (
    <SvgIcon {...props}>
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0)">
          <path
            d="M10 12.5C11.3807 12.5 12.5 11.3807 12.5 10C12.5 8.61929 11.3807 7.5 10 7.5C8.61929 7.5 7.5 8.61929 7.5 10C7.5 11.3807 8.61929 12.5 10 12.5Z"
            stroke="#4E5260"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M16.1667 12.5C16.0558 12.7513 16.0227 13.0302 16.0717 13.3005C16.1207 13.5708 16.2496 13.8203 16.4417 14.0167L16.4917 14.0667C16.6467 14.2214 16.7696 14.4053 16.8535 14.6076C16.9373 14.8099 16.9805 15.0268 16.9805 15.2458C16.9805 15.4649 16.9373 15.6817 16.8535 15.8841C16.7696 16.0864 16.6467 16.2702 16.4917 16.425C16.3369 16.58 16.1531 16.7029 15.9508 16.7868C15.7484 16.8706 15.5316 16.9138 15.3125 16.9138C15.0935 16.9138 14.8766 16.8706 14.6743 16.7868C14.472 16.7029 14.2882 16.58 14.1334 16.425L14.0834 16.375C13.887 16.1829 13.6375 16.054 13.3672 16.005C13.0969 15.956 12.8181 15.9891 12.5667 16.1C12.3202 16.2056 12.11 16.381 11.962 16.6046C11.8139 16.8282 11.7344 17.0902 11.7334 17.3583V17.5C11.7334 17.942 11.5578 18.3659 11.2452 18.6785C10.9327 18.9911 10.5087 19.1667 10.0667 19.1667C9.62468 19.1667 9.20076 18.9911 8.8882 18.6785C8.57563 18.3659 8.40004 17.942 8.40004 17.5V17.425C8.39359 17.1492 8.30431 16.8817 8.1438 16.6572C7.98329 16.4328 7.75899 16.2619 7.50004 16.1667C7.24869 16.0557 6.96988 16.0226 6.69955 16.0717C6.42922 16.1207 6.17977 16.2495 5.98337 16.4417L5.93337 16.4917C5.77858 16.6466 5.59477 16.7696 5.39244 16.8534C5.19011 16.9373 4.97323 16.9805 4.75421 16.9805C4.53518 16.9805 4.3183 16.9373 4.11597 16.8534C3.91364 16.7696 3.72983 16.6466 3.57504 16.4917C3.42008 16.3369 3.29715 16.1531 3.21327 15.9507C3.1294 15.7484 3.08623 15.5315 3.08623 15.3125C3.08623 15.0935 3.1294 14.8766 3.21327 14.6743C3.29715 14.4719 3.42008 14.2881 3.57504 14.1333L3.62504 14.0833C3.81715 13.8869 3.94603 13.6375 3.99504 13.3672C4.04406 13.0968 4.01097 12.818 3.90004 12.5667C3.7944 12.3202 3.619 12.11 3.39543 11.9619C3.17185 11.8139 2.90986 11.7344 2.64171 11.7333H2.50004C2.05801 11.7333 1.63409 11.5577 1.32153 11.2452C1.00897 10.9326 0.833374 10.5087 0.833374 10.0667C0.833374 9.62463 1.00897 9.20071 1.32153 8.88815C1.63409 8.57559 2.05801 8.39999 2.50004 8.39999H2.57504C2.85087 8.39354 3.11838 8.30426 3.34279 8.14375C3.5672 7.98325 3.73814 7.75894 3.83337 7.49999C3.9443 7.24865 3.97739 6.96983 3.92838 6.6995C3.87936 6.42917 3.75049 6.17973 3.55837 5.98333L3.50837 5.93333C3.35341 5.77854 3.23048 5.59473 3.14661 5.39239C3.06273 5.19006 3.01956 4.97319 3.01956 4.75416C3.01956 4.53514 3.06273 4.31826 3.14661 4.11593C3.23048 3.9136 3.35341 3.72978 3.50837 3.57499C3.66316 3.42003 3.84698 3.2971 4.04931 3.21323C4.25164 3.12935 4.46851 3.08618 4.68754 3.08618C4.90657 3.08618 5.12344 3.12935 5.32577 3.21323C5.5281 3.2971 5.71192 3.42003 5.86671 3.57499L5.91671 3.62499C6.11311 3.81711 6.36255 3.94598 6.63288 3.995C6.90321 4.04401 7.18203 4.01092 7.43337 3.89999H7.50004C7.74651 3.79436 7.95672 3.61896 8.10478 3.39538C8.25285 3.17181 8.3323 2.90982 8.33337 2.64166V2.49999C8.33337 2.05797 8.50897 1.63404 8.82153 1.32148C9.13409 1.00892 9.55801 0.833328 10 0.833328C10.4421 0.833328 10.866 1.00892 11.1786 1.32148C11.4911 1.63404 11.6667 2.05797 11.6667 2.49999V2.57499C11.6678 2.84315 11.7472 3.10514 11.8953 3.32872C12.0434 3.55229 12.2536 3.72769 12.5 3.83333C12.7514 3.94426 13.0302 3.97735 13.3005 3.92833C13.5709 3.87932 13.8203 3.75044 14.0167 3.55833L14.0667 3.50833C14.2215 3.35337 14.4053 3.23044 14.6076 3.14656C14.81 3.06269 15.0268 3.01952 15.2459 3.01952C15.4649 3.01952 15.6818 3.06269 15.8841 3.14656C16.0864 3.23044 16.2702 3.35337 16.425 3.50833C16.58 3.66312 16.7029 3.84693 16.7868 4.04926C16.8707 4.25159 16.9139 4.46847 16.9139 4.68749C16.9139 4.90652 16.8707 5.1234 16.7868 5.32573C16.7029 5.52806 16.58 5.71187 16.425 5.86666L16.375 5.91666C16.1829 6.11306 16.0541 6.36251 16.005 6.63284C15.956 6.90317 15.9891 7.18198 16.1 7.43333V7.49999C16.2057 7.74647 16.3811 7.95668 16.6047 8.10474C16.8282 8.2528 17.0902 8.33226 17.3584 8.33333H17.5C17.9421 8.33333 18.366 8.50892 18.6785 8.82148C18.9911 9.13404 19.1667 9.55797 19.1667 9.99999C19.1667 10.442 18.9911 10.8659 18.6785 11.1785C18.366 11.4911 17.9421 11.6667 17.5 11.6667H17.425C17.1569 11.6677 16.8949 11.7472 16.6713 11.8952C16.4477 12.0433 16.2723 12.2535 16.1667 12.5V12.5Z"
            stroke="#4E5260"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0">
            <rect width="20" height="20" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </SvgIcon>
  );
}

export default SettingBidIcon;