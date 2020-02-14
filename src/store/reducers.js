import * as TYPES from './types';
import User from '../models/User';

const initialState = {

    user: new User(),

    adverts: {
        advertsInPages: [],
        actualPage: 1,
        numberOfPages: 1,
    },

    tags: [],

    ui: {
        apiConnection: true,
        isFetching: false,
        error: null,
    },

    homeModals: {
        showLogin: false,
        showRegister: false,
        showUserRegistered: false,
        showAdvertDetail: true, //seguro?
        showCreateAdvert: true,



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

        // case TYPES.ADVERTS_SUCCESS:
        //     return {
        //         ...state,
              
        //     };

        // case TYPES.ONE_ADVERT_SUCCESS:
        //     return {
        //         ...state,
        //         detail: action.detail,
        //     };

        // case TYPES.ADVERT_CREATED_SUCCESS:
        //     return {
        //         ...state,
        //         detail: action.detail,
        //     };

        case TYPES.DIVIDE_IN_PAGES:

            return action.adverts; 

        case TYPES.PAGE_BACK:
            return {
                ...state,
                actualPage: action.actualPage,
            };

        case TYPES.PAGE_FORWARD:
            return {
                ...state,
                actualPage: action.actualPage,
            };

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
                ...state,
                showLogin: true,
                showRegister: false,
                showUserRegistered: false,
            }

        case TYPES.GO_REGISTER:
            return {
                ...state,
                showLogin: false,
                showRegister: true,
                showUserRegistered: false,
            }

        case TYPES.GO_USER_REGISTERED:
            return {
                ...state,
                showLogin: false,
                showRegister: false,
                showUserRegistered: true,
            }

        case TYPES.GO_APP:
            return {
                ...state,
                showLogin: false,
                showRegister: false,
                showUserRegistered: false,
            }


        case TYPES.SHOW_ADVERT_DETAIL:
            return {
                ...state,
                showAdvertDetail: true,
            }
        case TYPES.SHOW_LIST:
            return {
                ...state,
                showAdvertDetail: false,
            }

        case TYPES.SHOW_CREATE_ADVERT:
            return {
                ...state,
                showCreateAdvert: true,
            }
        case TYPES.SHOW_UPDATE_ADVERT:
            return {
                ...state,
                showCreateAdvert: false,
            }

        default:
            return state;
    }
};








