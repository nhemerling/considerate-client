import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import AddFriendPage from './AddFriendPage';

describe('AddFriendPage component', () => {
  it('renders a AddFriendPage component', () => {
    const wrapper = shallow(<AddFriendPage />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
