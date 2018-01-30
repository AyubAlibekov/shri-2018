import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../images/logo.svg';

import './index.css';

export default ({ noCreateBtn }) => (
  <header>
    <img src={logo} className="logo" alt="logo" />
    {
      noCreateBtn ? '' :
        <Link to={{ pathname: '/create' }} className="header__link"> Создать встречу </Link>
    }
  </header>
);