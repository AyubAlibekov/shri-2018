import React from 'react';

import Grid from '../grid';

import './index.css';

export default ({ settings }) => (
  <div className="substrate">
    <Grid settings={settings} show="substrate" />
  </div>
);
