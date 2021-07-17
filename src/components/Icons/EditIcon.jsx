import React from 'react';
import { SvgIcon } from '@material-ui/core';

function EditIcon(props) {
  return (
    <SvgIcon viewBox="0 -2 18 24" {...props}>
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.16666 3.33331H3.33332C2.8913 3.33331 2.46737 3.50891 2.15481 3.82147C1.84225 4.13403 1.66666 4.55795 1.66666 4.99998V16.6666C1.66666 17.1087 1.84225 17.5326 2.15481 17.8452C2.46737 18.1577 2.8913 18.3333 3.33332 18.3333H15C15.442 18.3333 15.8659 18.1577 16.1785 17.8452C16.4911 17.5326 16.6667 17.1087 16.6667 16.6666V10.8333" stroke="#828282" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M15.4167 2.08332C15.7482 1.7518 16.1978 1.56555 16.6667 1.56555C17.1355 1.56555 17.5851 1.7518 17.9167 2.08332C18.2482 2.41484 18.4344 2.86448 18.4344 3.33332C18.4344 3.80216 18.2482 4.2518 17.9167 4.58332L9.99999 12.5L6.66666 13.3333L7.49999 9.99999L15.4167 2.08332Z" stroke="#828282" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </SvgIcon>
  );
}

export default EditIcon;