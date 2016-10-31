import { addActivities } from './activities';
import { ADD_ACTIVITIES } from '.';

describe('activitiesActions', ()=> {
  it('should create an action to add activities', ()=> {
    const activities = [];

    expect(addActivities(activities)).toEqual({
      type: ADD_ACTIVITIES,
      payload: activities,
    });
  });
});
