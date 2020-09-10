import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import NotFoundPage from './NotFoundPage';

describe('NotFoundPage component', () => {
  it('renders a NotFoundPage component', () => {
    const wrapper = shallow(<NotFoundPage />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
