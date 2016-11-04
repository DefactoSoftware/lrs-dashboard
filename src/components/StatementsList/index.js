import React from 'react';
import Statement from '../Statement';
import CSS from './style.css';

export default ({ statements })=> {
  return (
    <ul className={CSS.StatementsList}>
      {statements.map(statement => (
        <li className={CSS.item} key={statement.id}><Statement statement={statement} /></li>
      ))}
    </ul>
  );
}
