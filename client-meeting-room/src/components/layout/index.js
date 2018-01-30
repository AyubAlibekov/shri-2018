import React from 'react';

import Header from '../header';

import './index.css';

export default ({ children, noCreateBtn }) => (
  <div className="wrapper">
    <Header noCreateBtn={noCreateBtn} />
    {children}
  </div>
);
