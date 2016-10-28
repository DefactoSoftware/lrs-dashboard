import { getActivities, getSortedActivities } from './activities';
const store = {
  activities: {
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
  }
};

describe('getActivities', ()=> {
  it('selects an array of activities from an object', () => {
    expect(getActivities(store)).toEqual([
      {
        id: '1234',
        timestamp: '2016-09-13T15:00:00.000Z',
      },
      {
        id: '5678',
        timestamp: '2016-09-13T16:00:00.000Z',
      },
      {
        id: '9012',
        timestamp: '2016-09-13T14:00:00.000Z',
      }
    ]);
  });
})

describe('getSortedActivities', ()=> {
  it('selects an array of activities from an object', () => {
    expect(getSortedActivities(store)).toEqual([
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
    ]);
  });
})
