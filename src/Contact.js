import React from 'react';
import { MdCamera, MdEmail } from 'react-icons/md';

import './Contact.scss';
import Title from './Title';

const Contact = () => {
  return (
    <div className="Contact">
      <Title name="Contact" />

      <div className="Contact-content">
        <ul>
          <li>
            <MdEmail />
            <div className="Contact-text">wl7788@snu.ac.kr</div>
          </li>
          <li>
            <a href="https://www.instagram.com/s._nyan/"><MdCamera /></a>
            <div className="Contact-text">@s._nyan</div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;