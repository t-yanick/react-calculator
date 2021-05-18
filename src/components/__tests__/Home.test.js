import React from 'react';
import renderer from 'react-test-renderer';
import Home from '../Home';

test('Component renders correctly', () => {
  const component = renderer.create(
    <Home />
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});