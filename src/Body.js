import React from 'react';
import Education from './Education';
import Profile from './Profile';
import PrivateLesson from './PrivateLesson';

import './Body.scss';
import Club from './Club';
import Contact from './Contact';

const Body = () => {
  return (
    <div className="Body">
      <Profile />
      <hr />
      <Education />
      <hr />
      <PrivateLesson />
      <hr />
      <Club />
      <hr />
      <Contact />
    </div>
  );
};

export default Body;