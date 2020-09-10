import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import FriendCard from './FriendCard';

describe('FriendCard Component', () => {
  const friendProp = {
    id: 1,
    friend_name: 'Test name',
    occasion: 'Birthday',
    occasion_date: '2029-01-22T00:00:00.001Z',
  };

  it('renders a FriendCard with friend props', () => {
    const wrapper = shallow(<FriendCard friend={friendProp} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
