import activitiesReducer from './activities';
import { ADD_ACTIVITIES } from '../actions';

describe('activitiesReducer', ()=> {
  it('should handle empty ADD_ACTIVITIES', ()=> {
    expect(activitiesReducer({}, { type: ADD_ACTIVITIES, payload: []})).toEqual({});
  });

  it('should handle ADD_ACTIVITIES', ()=> {
    const activities = [
      {
        id: '9012',
        timestamp: '2016-09-13T14:00:00.000Z',
      },
      {
        id: '1234',
        timestamp: '2016-09-13T15:00:00.000Z',
      },
      {
        id: '5678',
        timestamp: '2016-09-13T16:00:00.000Z',
      }
    ];

    expect(activitiesReducer({}, { type: ADD_ACTIVITIES, payload: activities }))
    .toEqual({
      '1234': {
        id: '1234',
        timestamp: '2016-09-13T15:00:00.000Z',
      },
      '5678': {
        id: '5678',
        timestamp: '2016-09-13T16:00:00.000Z',
      },
      '9012': {
        id: '9012',
        timestamp: '2016-09-13T14:00:00.000Z',
      }
    });
  });
});
