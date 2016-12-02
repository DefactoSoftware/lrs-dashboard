import React from 'react';
import CSS from './style.css';
import { Link } from 'react-router';

export default ({ children })=>(
  <div className={CSS.Application}>
    <div className={CSS.Header}>
      <h2 className={CSS.title}>Learning Record Store</h2>
      <nav>
        <ul className={CSS.NavigationList}>
          <li className={CSS.NavigationItem}><Link to="/users">Users</Link></li>
          <li className={CSS.NavigationItem}><Link to="/statements/graph">Statements Graph</Link></li>
          <li className={CSS.NavigationItem}><Link to="/statements/list">Statements List</Link></li>
        </ul>
      </nav>
    </div>
    <div className={CSS.content}>
      {children}
    </div>
  </div>
);
