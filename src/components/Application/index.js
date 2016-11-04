import React from 'react';
import CSS from './style.css';

export default ({ children })=>(
  <div className={CSS.App}>
    <div className={CSS.header}>
      <h2 className={CSS.title}>Learning Record Store</h2>
    </div>
    <div className={CSS.content}>
      {children}
    </div>
  </div>
);
