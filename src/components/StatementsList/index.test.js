import React from 'react';
import StatementList from './index.js';
import renderer from 'react-test-renderer';

jest.mock('../Statement', ()=> ()=> null);

describe('<StatementList />', ()=> {

  it('renders no statements when no statements are present', () => {
    const statements = [];

    const tree = renderer.create(<StatementList statements={statements} />).toJSON();

    expect(tree).toMatchSnapshot();
  });


  it('renders three statements when three statements are present', () => {
    const statements = [
      { id: "1234", },
      { id: "5768", },
      { id: "9012", },
    ];

    const tree = renderer.create(<StatementList statements={statements} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
