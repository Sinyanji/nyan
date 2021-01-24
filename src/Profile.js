import React from 'react';
import Title from './Title';

import profile from './images/profile.jpg';
import './Profile.scss'

const Profile = () => {
  return (
    <div className="Profile">
      <Title name='Profile' />
      <div className="Profile-content">
        <img src={profile} />
        <ul>
          <li><b>신현지</b> (Shin Hyeonjee)</li>
          <li>2000.06.15</li>
        </ul>
      </div>
    </div>
  );
};

export default Profile;