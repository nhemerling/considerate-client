import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import EditFriendForm from './EditFriendForm';

describe('EditFriendForm component', () => {
  const friendId = 0;

  it('renders an EditFriendForm by default', () => {
    const wrapper = shallow(<EditFriendForm />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('renders a specific EditFriendForm when given a friendId', () => {
    const wrapper = shallow(<EditFriendForm friendId={friendId} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
