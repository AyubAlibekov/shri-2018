import React from 'react';
import { Link } from 'react-router-dom';

import './index.css';

export default ({ onSave }) => {
  return (
    <footer>
      <Link to={{ pathname: '/' }} className="cancel__link"> Отмена </Link>
      <Link to={{ pathname: '/' }} className="save__link" onClick={onSave}> Создать встречу </Link>
    </footer>
  )
};