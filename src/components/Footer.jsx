import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faUser, faTableCells, faGear, faCircleDot } from '@fortawesome/free-solid-svg-icons';


const Footer = (props) => {
  return (
    <div className='footer'>
      <div className='layer1'>   <FontAwesomeIcon icon={faTableCells} size="2xl" /></div>
      <div className='layer2'>
        <div>
          <FontAwesomeIcon icon={faPhone} size='xl' />
          <FontAwesomeIcon icon={faUser} size="xl" />
        </div>

        <div>
          <FontAwesomeIcon icon={faGear} size="xl" />
          <FontAwesomeIcon icon={faCircleDot} size="xl" />
        </div>

      </div>

    </div>
  );
};

export default Footer;
