import React from 'react';

import './avatar.css'

const Avatar = ({ picture }) => (
  <img className="avatar" alt="avatar" src={picture}/>
);

export default Avatar;
