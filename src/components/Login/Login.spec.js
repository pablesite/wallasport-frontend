import React from 'react';
import { shallow } from 'enzyme';
import Login from './Login'


describe('Login Component', () => {

    it('should set user in store (setUser Action)', () => {
        const props = {
            isFetching: false,
            error: undefined,
            showLogin: true,
            showRegister: false,
            showUpdateUser: false,
            showUserRegistered: false,
            login: jest.fn(),
            register: jest.fn(),
            updateUser: jest.fn(),
            goToHome: jest.fn(),
            showLoginAction: jest.fn(),    
            // user: new User(),
                       
        }
        const user = {
            username: 'pablesite',
            email: 'pablesite@gmail.com',
            password: '1234',
            photo: '',
        }

        const wrapper = shallow(<Login {...props} />);
        wrapper.find('FormEnhanced').props().handleSubmit(user);
        expect(props.login).toHaveBeenCalledWith(user);

    });

});
