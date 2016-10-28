import React from 'react';
import App from './component';
import renderer from 'react-test-renderer';

it('matches the render snapshot', () => {
  const tree = renderer.create(<App />).toJSON();

  expect(tree).toMatchSnapshot();
});
