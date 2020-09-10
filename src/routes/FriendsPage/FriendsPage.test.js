import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import FriendsPage from './FriendsPage';

describe('FriendsPage component', () => {
  it('renders a FriendsPage component by default', () => {
    const wrapper = shallow(<FriendsPage />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
