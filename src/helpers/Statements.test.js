import { getNodes, getLinks } from './Statements';
const statements = [
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
];

describe('getNodes', ()=> {
  it('returns an array of the actors of the statements from an object', () => {
    expect(getNodes(statements)).toEqual([
      {
        color: "#f5a905",
        id: "Foo",
        r: 3.1500000000000004,
        type: "actor"
      },
      {
        color: "#3fa3c3",
        id: "Chapter",
        r: 3.1500000000000004,
        type: "object"
      },
      {
        color: "#f5a905",
        id: "Bar",
        r: 3.1500000000000004,
        type: "actor"
      },
      {
        color: "#3fa3c3",
        id: "Space",
        r: 3.1500000000000004,
        type: "object"
      },
      {
        color: "#f5a905",
        id: "Flux",
        r: 3.1500000000000004,
        type: "actor"
      },
      {
        color: "#3fa3c3",
        id: "Path",
        r: 3.1500000000000004,
        type: "object"
      }
    ]);
  });
});

describe('getLinks', ()=> {
  it('returns an array of the actors of the statements from an object', () => {
    expect(getLinks(statements)).toEqual([
      { id: 'Foo-Chapter', source: 'Foo', target: 'Chapter', value: 0.25, x: 0, y: 0 },
      { id: 'Bar-Space', source: 'Bar', target: 'Space', value: 0.25, x: 0, y: 0 },
      { id: 'Flux-Path', source: 'Flux', target: 'Path', value: 0.25, x: 0, y: 0 },
    ]);
  });
});
