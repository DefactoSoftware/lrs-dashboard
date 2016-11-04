import React from 'react';
import Activity from '../Activity';
import CSS from './style.css';

export default ({ activities })=> {
  return (
    <ul className={CSS.ActivitiesList}>
      {activities.map(activity => (
        <li className={CSS.item} key={activity.id}><Activity activity={activity} /></li>
      ))}
    </ul>
  );
}
