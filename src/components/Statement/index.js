import React from 'react';

export default ({ statement })=> {
  console.log(statement);
  return (
    <p>
      <span>{statement.actor}</span>{' '}
      <strong>{statement.verb}</strong>{' '}
      <span>{statement.object}</span>
    </p>
  );
}
