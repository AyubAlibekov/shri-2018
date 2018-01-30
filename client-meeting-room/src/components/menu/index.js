import React from 'react';

import Grid from '../grid';

import './index.css';

export default ({ settings, moment, onChange }) => (
  <div className="menu">
    <Grid settings={settings} show="menu" moment={moment} onChange={onChange} />
  </div>
);
