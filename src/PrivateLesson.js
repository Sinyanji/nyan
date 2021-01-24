import React from 'react';
import Title from './Title';

import './PrivateLesson.scss';

const PrivateLesson = () => {
  return (
    <div className="PrivateLesson">
      <Title name="Private Lesson" />

      <div className="PrivateLesson-content">
        <ul>
          <li>중3 - 수(상) 선행 지도</li>
          <li>고1 - 수(상), 수(하) 내신 지도</li>
          <li>초5 ~ 초6 - 초등학교 6학년 수학 지도</li>
          <li>중1 ~ 중3 - 중학교 내신, 수(상), 수(하), 수1, 수2 선행 지도 (진행중)</li>
          <li>중1 ~ 중3 - 중학교 내신, 수(상), 수(하) 선행 지도 (진행중)</li>
          <li>중3 ~ 고1 - 통합과학, 수(상) 선행 지도 (진행중)</li>
          <br />
          <li>고1 - 게임 동아리 활동 & 보고서 작성 지도</li>
          <li>성인 - 파이썬 기초 지도 (진행중)</li>
        </ul>
      </div>
    </div>
  );
};

export default PrivateLesson;