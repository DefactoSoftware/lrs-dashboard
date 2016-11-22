import { getStatements, getSortedStatements } from './statements';
const store = {
  statements: {
    '1234': {
      id: '1234',
      timestamp: '2016-09-13T15:00:00.000Z',
      actor: 'Foo',
      object: 'Chapter',
      verb: 'updated',
    },
    '5678': {
      id: '5678',
      timestamp: '2016-09-13T16:00:00.000Z',
      actor: 'Bar',
      object: 'Space',
      verb: 'added',
    },
    '9012': {
      id: '9012',
      timestamp: '2016-09-13T14:00:00.000Z',
      actor: 'Flux',
      object: 'Path',
      verb: 'created',
    }
  }
};

describe('getStatements', ()=> {
  it('selects an array of statements from an object', () => {
    expect(getStatements(store)).toEqual([
      {
        id: '1234',
        timestamp: '2016-09-13T15:00:00.000Z',
        actor: 'Foo',
        object: 'Chapter',
        verb: 'updated',
      },
      {
        id: '5678',
        timestamp: '2016-09-13T16:00:00.000Z',
        actor: 'Bar',
        object: 'Space',
        verb: 'added',
      },
      {
        id: '9012',
        timestamp: '2016-09-13T14:00:00.000Z',
        actor: 'Flux',
        object: 'Path',
        verb: 'created',
      }
    ]);
  });
});

describe('getSortedStatements', ()=> {
  it('selects an array of statements from an object', () => {
    expect(getSortedStatements(store)).toEqual([
      {
        id: '9012',
        timestamp: '2016-09-13T14:00:00.000Z',
        actor: 'Flux',
        object: 'Path',
        verb: 'created',
      },
      {
        id: '1234',
        timestamp: '2016-09-13T15:00:00.000Z',
        actor: 'Foo',
        object: 'Chapter',
        verb: 'updated',
      },
      {
        id: '5678',
        timestamp: '2016-09-13T16:00:00.000Z',
        actor: 'Bar',
        object: 'Space',
        verb: 'added',
      }
    ]);
  });
});
