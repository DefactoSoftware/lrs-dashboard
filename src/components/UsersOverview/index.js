import React from 'react';
import User from '../User';
import CSS from './style.css';

export default ({ users })=> {
  return (
    <ul className={CSS.UsersList}>
      {users.map(user => (
        <li className={CSS.item} key={user.id}><User user={user} /></li>
      ))}
    </ul>
  );
}
