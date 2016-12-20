import React from 'react';
import Portal from 'react-portal';
import CSS from './style.css';

export default ({ children, className })=> (
  <Portal isOpened={true}>
    <div className={CSS.LightBox}>
      <div className={`${CSS.Modal} ${className}`}>
        {children}
      </div>
    </div>
  </Portal>
);
