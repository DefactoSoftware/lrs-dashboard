import React from 'react';
import Application from './index';
import renderer from 'react-test-renderer';

jest.mock('react-router', ()=> ({ Link: ({ children, to })=> (<a href={to}>{children}</a>) }));

it('matches the render snapshot', () => {
  const tree = renderer.create(<Application />).toJSON();

  expect(tree).toMatchSnapshot();
});
