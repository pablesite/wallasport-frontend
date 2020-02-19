
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { createBrowserHistory } from 'history';

import * as actions from './actions';
import * as types from "./types";
import * as  ApiService from '../services/ApiDBService'
import User from '../models/User';


const history = createBrowserHistory();
const middlewares = [thunk.withExtraArgument({ history, services: { ApiService } })];
const mockStore = configureStore(middlewares);
// const store = mockStore({});
let store = {};

const user = {
    username: 'pablesite',
    email: 'pabloruiz@ctnaval.com'
}

const adverts = {
    "name": "PS4Pro",
    "description": "Compro PS4 Pro con menos de 1 año de uso",
    "price": 200.99,
    "type": "buy",
    "photo": "/images/anuncios/ps4pro.jpg",
    "tags": [
        "lifestyle"
    ]
};

const tag = 'mobile';

const error = new Error('Login invalid');




// Esto es interesante para mockear el resultado de una función del servicio de la API
jest.mock('../services/ApiDBService');
//ApiService.discoverAdverts.mockResolvedValueOnce(adverts);



describe('actions', () => {

    beforeEach(() => {
        store = mockStore({});
    });



    /* ----- UI tests ----- */

    it('should create an showMainScreenAction action', () => {
        const expectedAction = {
            type: types.SHOW_MAINSCREEN,
          
        };
        expect(actions.showMainScreenAction()).toEqual(expectedAction);

    });

    it('should create an showLoginAction action', () => {
        const expectedAction = {
            type: types.SHOW_LOGIN,
          
        };
        expect(actions.showLoginAction()).toEqual(expectedAction);

    });

    it('should create an showRegisterAction action', () => {
        const expectedAction = {
            type: types.SHOW_REGISTER,
          
        };
        expect(actions.showRegisterAction()).toEqual(expectedAction);

    });




    /* ----- Register tests ----- */
    // Async test
    it('should dispatch a register action', async () => {
        const expectedActions = [{
            type: types.API_REQUEST,
        }, {
            type: types.SHOW_USER_REGISTERED,
        }, 
        { type: types.REGISTER_SUCCESS,
            
        }];

        // Mockeo la función de login y digo que devuelva un true.
        ApiService.registerNewUser.mockResolvedValueOnce({ success: true });
        await store.dispatch(actions.register(user));

        expect(store.getActions()).toEqual(expectedActions);
    });


    it('should create an registerSuccess action', () => {

        const expectedAction = {
            type: types.REGISTER_SUCCESS,
          
        };
        expect(actions.registerSuccess(user)).toEqual(expectedAction);

    });


    it('should create an registerInvalid action', () => {

        const expectedAction = {
            type: types.REGISTER_INVALID,
            error
        };
        expect(actions.registerInvalid(error)).toEqual(expectedAction);

    });

    /* ----- Login tests ----- */
    // Async test
    it('should dispatch a login action', async () => {
        const expectedActions = [{
            type: types.API_REQUEST,
        }, {
            type: types.SHOW_MAINSCREEN,   
        }, {
            type: types.LOGIN_SUCCESS,
            user    
        }];

        // Mockeo la función de login y digo que devuelva un true.
        ApiService.loginJWT.mockResolvedValueOnce({ success: true });
        await store.dispatch(actions.login(user));

        expect(store.getActions()).toEqual(expectedActions);
    });



    it('should create an loginSuccess action', () => {

        const expectedAction = {
            type: types.LOGIN_SUCCESS,
            user,
        };
        expect(actions.loginSuccess(user)).toEqual(expectedAction);

    });


    it('should create an loginInvalid action', () => {

        const expectedAction = {
            type: types.LOGIN_INVALID,
            error
        };
        expect(actions.loginInvalid(error)).toEqual(expectedAction);

    });


    /* ----- Logout tests ----- */

    // Async test
    it('should dispatch a logout action', async () => {

        const expectedActions = [{
            type: types.LOGOUT_SUCCESS,
            user: new User()
        }];

        await store.dispatch(actions.logout());
        expect(store.getActions()).toEqual(expectedActions);
    });


    //Logout User
    it('should create an logoutSuccess action', () => {

        const expectedAction = {
            type: types.LOGOUT_SUCCESS,
            user: new User()
        };
        expect(actions.logoutSuccess()).toEqual(expectedAction);

    });


    
    /* ----- Adverts tests ----- */

    it('should create an AdvertsSuccess action', () => {

        const expectedAction = {
            type: types.ADVERTS_SUCCESS,
            adverts: adverts,
        };
        expect(actions.AdvertsSuccess(adverts)).toEqual(expectedAction);

    });

    //     // Async test
    //     it('should dispatch a getAdverts actions', async () => {
    //         const expectedActions = [{
    //             type: types.API_REQUEST, 
    //         }, {
    //             type:types.ADVERTS_SUCCESS,
    //             adverts: undefined
    //         }];

    //     await store.dispatch(actions.getAdverts(tag));
    //     expect(store.getActions()).toEqual(expectedActions);
    //     });   

});
