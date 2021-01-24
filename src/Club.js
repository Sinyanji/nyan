import React from 'react';
import Title from './Title';

import './Club.scss';

const Club = () => {
  return (
    <div className="Club">
      <Title name="Club" />

      <div className="Club-content">
        <ul>
          <li>컴퓨터공학부 밴드 동아리 STEIN (2019. 3 ~ )</li>
          <li>웹/앱 개발 동아리 와플 스튜디오 (2019. 12 ~ )</li>
        </ul>
      </div>
    </div>
  );
};

export default Club;