import React from 'react';
import Statement from './index.js';
import renderer from 'react-test-renderer';

it('renders no statements when no statements are present', () => {
  const statement = {
    id: "1234",
    actor: 'foo@bar.com',
    verb: 'created',
    object: 'Chapter',
  };

  const tree = renderer.create(<Statement statement={statement} />).toJSON();

  expect(tree).toMatchSnapshot();
});
