import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import EditFriendPage from './EditFriendPage';

describe('EditFriendPage component', () => {
  // simulating the props the component actually has
  const matchProp = {
    params: {
      friendId: 0,
    },
  };

  it('renders a EditFriendPage component', () => {
    const wrapper = shallow(<EditFriendPage match={matchProp} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
