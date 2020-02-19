import React from 'react';
import { shallow } from 'enzyme';
import Login from './Login'
import User from '../../models/User'


describe('Login Component', () => {

    it('should set user in store (setUser Action)', () => {
        const props = {
            login: jest.fn(),
            register: jest.fn(),
            isFetching: false,
            error: undefined,
            showMainScreenAction: jest.fn(),
            showLogin: true,
            showLoginAction: jest.fn(),
            showRegister: false,
            showUserRegistered: false,
            // user: new User(),
                       
        }
        const user = {
            username: 'pablesite',
            password: '1234',
        }

        const wrapper = shallow(<Login {...props} />);
        wrapper.find('FormEnhanced').props().handleSubmit(user);
        expect(props.login).toHaveBeenCalledWith(user);

    });

});
