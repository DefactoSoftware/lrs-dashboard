import React from 'react';
import NoMatch from './index';
import renderer from 'react-test-renderer';

it('matches the render snapshot', () => {
  const tree = renderer.create(<NoMatch />).toJSON();

  expect(tree).toMatchSnapshot();
});
