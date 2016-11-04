import React from 'react';
import StatementList from './index.js';
import renderer from 'react-test-renderer';

it('renders no statements when no statements are present', () => {
  const statements = [];

  const tree = renderer.create(<StatementList statements={statements} />).toJSON();

  expect(tree).toMatchSnapshot();
});


it('renders three statements when three statements are present', () => {
  const statements = [
    {
      id: "1234",
      actor: 'foo@bar.com',
      verb: 'created',
      object: 'Chapter',
    },
    {
      id: "5768",
      actor: 'bar@foo.com',
      verb: 'updated',
      object: 'Space',
    },
    {
      id: "9012",
      actor: 'foo@bar.com',
      verb: 'created',
      object: 'Portrait',
    },
  ];

  const tree = renderer.create(<StatementList statements={statements} />).toJSON();

  expect(tree).toMatchSnapshot();
});
