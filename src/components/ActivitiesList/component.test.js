import React from 'react';
import ActivitiesList from './component';
import renderer from 'react-test-renderer';

it('renders no activities when no activities are present', () => {
  const activities = [];

  const tree = renderer.create(<ActivitiesList activities={activities} />).toJSON();

  expect(tree).toMatchSnapshot();
});


it('renders three activities when three activities are present', () => {
  const activities = [
    {
      id: "1234",
      actor: { mbox: 'foo@bar.com' },
      verb: { display: { 'en-US': 'created' } },
      object: { definition: { name: { 'en-US': 'Chapter' } } },
    },
    {
      id: "5768",
      actor: { mbox: 'bar@foo.com' },
      verb: { display: { 'en-US': 'updated' } },
      object: { definition: { name: { 'en-US': 'Space' } } },
    },
    {
      id: "9012",
      actor: { mbox: 'foo@bar.com' },
      verb: { display: { 'en-US': 'created' } },
      object: { definition: { name: { 'en-US': 'Portrait' } } },
    },
  ];

  const tree = renderer.create(<ActivitiesList activities={activities} />).toJSON();

  expect(tree).toMatchSnapshot();
});
