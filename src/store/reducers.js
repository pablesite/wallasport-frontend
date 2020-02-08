import * as TYPES from './types';
import User from '../models/User';

const initialState = {

    user: new User(),

    adverts: [],

    tags: [],

    ui: {
        apiConnection: true,
        isFetching: false,
        error: null,
    },

    homeModals: {
        showLogin: false,
        showRegister: false,
    }

};

export const user = (state = initialState.user, action) => {
    switch (action.type) {

        // testeado
        case TYPES.DELETE_USER_SUCCESS:
            return action.user;

        // testeado
        case TYPES.LOGIN_SUCCESS:
            return action.user;


        case TYPES.REGISTER_SUCCESS:
            return state;

        default:
            return state;
    }
};


export const adverts = (state = initialState.adverts, action) => {
    switch (action.type) {

        case TYPES.ADVERTS_SUCCESS:
            return action.adverts;

        default:
            return state;
    }
};


export const tags = (state = initialState.tags, action) => {

    switch (action.type) {

        case TYPES.GET_TAGS_SUCCESS:
            return action.tags;

        default:
            return state;
    }
};


export const ui = (state = initialState.ui, action) => {

    if (/_REQUEST$/.test(action.type)) {
        return {

            isFetching: true,
            error: null,
        };
    }

    if (/_SUCCESS$/.test(action.type)) {
        return {
            apiConnection: true,
            isFetching: false,
            error: null
        };
    }

    if (/_FAILURE$/.test(action.type)) {
        return {
            apiConnection: false, //Puede que la API sí que funcione guay, pero la petición se haya rechazado por no tener token por ejemplo. Pensar si hacer otra etiqueta para eso...
            isFetching: false,
            error: action.error,
        };
    }

    if (/_INVALID$/.test(action.type)) {
        console.log(action.type, action.error)
        return {
            apiConnection: true,
            isFetching: false,
            error: action.error,
        };
    }

    return state;
};

export const homeModals = (state = initialState.homeModals, action) => {

    switch (action.type) {

        case TYPES.GO_LOGIN:
            return {
                showLogin: true,
                showRegister: false,
                showUserRegistered: false,
            }

        case TYPES.GO_REGISTER:
            return {
                showLogin: false,
                showRegister: true,
                showUserRegistered: false,
            }

        case TYPES.GO_USER_REGISTERED:
            return {
                showLogin: false,
                showRegister: false,
                showUserRegistered: true,
            }

        case TYPES.GO_APP:
            return {
                showLogin: false,
                showRegister: false,
                showUserRegistered: false,
            }

        default:
            return state;
    }
};








