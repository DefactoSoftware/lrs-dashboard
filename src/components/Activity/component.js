import React from 'react';

export default ({ activity })=> (
  <p>
    <span>{activity.actor.mbox}</span> <strong>{activity.verb.display['en-US']}</strong> <span>{activity.object.definition.name['en-US']}</span>
  </p>
);
