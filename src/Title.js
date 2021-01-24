import React from 'react';
import { MdPerson, MdSchool, MdEdit, MdPeople, MdMessage } from 'react-icons/md';
import './Title.scss';

const Title = ({ name }) => {
  return (
    <div className="Title">
      <div className="text">{name}</div>
      {name === 'Profile' && <MdPerson />}
      {name === 'Education' && <MdSchool />}
      {name === 'Private Lesson' && <MdEdit />}
      {name === 'Club' && <MdPeople />}
      {name === 'Contact' && <MdMessage />}
    </div>
  );
};

export default Title;