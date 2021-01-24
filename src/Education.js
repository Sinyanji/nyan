import React from 'react';
import Title from './Title';

import './Education.scss';

const Education = () => {
  return (
    <div className="Education">
      <Title name="Education" />

      <div className="Education-content">
        <ul>
          <li>이사벨중학교</li>
          <li>부산진여자고등학교</li>
          <li>서울대학교 컴퓨터공학부</li>
        </ul>
      </div>
    </div>
  );
};

export default Education;