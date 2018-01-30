import React from 'react';
import './index.css';

export default ({ valueFlexGrow = '1', className = '', children }) => (
  <div style={{ flex: valueFlexGrow }} className={`cell ${className}`}>{children}</div>
);