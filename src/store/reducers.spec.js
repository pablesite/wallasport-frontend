import * as reducers from './reducers';
import * as types from "./types";


describe('reducers', () => {

    it('should handle a LOGIN_SUCCESS action', () => {
        const initialState = {
            user: {
                username: 'pablesite',
                email: 'pabloruiz@ctnaval.com',
            }
        };

        const user = {
            username: 'anamartinez',
            email: 'ana@ctnaval.com',
        };

        const action = {
            type: types.LOGIN_SUCCESS,
            user,
        };

        const expectedState = {
            username: 'anamartinez',
            email: 'ana@ctnaval.com',
        }

        expect(reducers.user(initialState, action)).toEqual(expectedState);

    });


    it('should handle a LOGOUT_SUCCESS action', () => {
        const initialState = {
            user: {
                username: 'pablesite',
                email: 'pabloruiz@ctnaval.com',
            }
        };

        const action = {
            type: types.LOGOUT_SUCCESS,
            user:null,
        };

        const expectedState = null;

        expect(reducers.user(initialState, action)).toEqual(expectedState);

    });

});
