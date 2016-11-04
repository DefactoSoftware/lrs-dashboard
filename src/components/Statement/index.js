import React from 'react';

export default ({ statement })=> {
  return (
    <p>
      <span>{statement.actor}</span>{' '}
      <strong>{statement.verb}</strong>{' '}
      <span>{statement.object}</span>
    </p>
  );
}
