import React from 'react';
import { shallow } from 'enzyme';
import Login from './Login'

describe('Login Component', () => {

    it('should set user in store (setUser Action)', () => {
        const props = {
            login: jest.fn(),
            register: jest.fn(),

            user: {
                username: '',
                email: '',
                password: ''
            },

            isLogin: true,

        }

        const wrapper = shallow(<Login {...props} />);

        wrapper.find('FormEnhanced').props().handleSubmit(props.user);
        expect(props.login).toHaveBeenCalledWith(props.user);

    });

});
