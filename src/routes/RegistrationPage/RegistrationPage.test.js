import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import RegistrationPage from './RegistrationPage';

describe('RegistrationPage component', () => {
  it('renders a RegistrationPage component', () => {
    const wrapper = shallow(<RegistrationPage />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
