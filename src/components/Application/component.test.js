import React from 'react';
import Application from './component';
import renderer from 'react-test-renderer';

it('matches the render snapshot', () => {
  const tree = renderer.create(<Application />).toJSON();

  expect(tree).toMatchSnapshot();
});
