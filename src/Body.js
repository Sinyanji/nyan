import React from 'react';
import Education from './Education';
import Profile from './Profile';
import PrivateLesson from './PrivateLesson';

import './Body.scss';

const Body = () => {
  return (
    <div className="Body">
      <Profile />
      <hr />
      <Education />
      <hr />
      <PrivateLesson />
    </div>
  );
};

export default Body;