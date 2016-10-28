import React from 'react';
import CSS from './style.css';

export default ()=>(
  <div className={CSS.App}>
    <div className={CSS.header}>
      <h2 className={CSS.title}>Learning Record Store</h2>
    </div>
    <p className={CSS.intro}>
      This is where all the learning record store items reside
    </p>
  </div>
);
