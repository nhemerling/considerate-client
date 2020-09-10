import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import AddFriendForm from './AddFriendForm';

describe('AddFriendForm component', () => {
  it('renders an AddFriendForm', () => {
    const wrapper = shallow(<AddFriendForm />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
