import * as TYPES from './types';
import User from '../models/User';

const initialState = {

    user: new User(),

    adverts: {
        advertsInPages: [],
        actualPage: 1,
        numberOfPages: 1,
        sort: true, // at the beginning, filter descendent
    },

    tags: [],

    ui: {
        apiConnection: true,
        isFetching: false,
        error: null,
    },

    appSelectors: {
        showLogin: false,
        showRegister: false,
        showUserRegistered: false,
        showUpdateUser: false,
        showAdvertDetail: true,
        showCreateAdvert: true,
    }

};


export const user = (state = initialState.user, action) => {
    switch (action.type) {

        // testeado
        case TYPES.LOGOUT_SUCCESS:
            return action.user;

        case TYPES.GET_USER_SUCCESS:
            return action.user;

        default:
            return state;
    }
};


export const adverts = (state = initialState.adverts, action) => {
    switch (action.type) {

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

        case TYPES.SWITCH_SORT:
            return {
                ...state,
                sort: action.sort,
            };

        case TYPES.USER_OWNER_SUCCESS:
            return {
                ...state,
                 userOwner: action.userOwner,
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
            apiConnection: false,
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


export const appSelectors = (state = initialState.appSelectors, action) => {

    switch (action.type) {

        case TYPES.SHOW_LOGIN:
            return {
                ...state,
                showLogin: true,
                showRegister: false,
                showUpdateUser: false,
                showUserRegistered: false,
            }

        case TYPES.SHOW_REGISTER:
            return {
                ...state,
                showLogin: false,
                showRegister: true,
                showUpdateUser: false,
                showUserRegistered: false,
            }

        case TYPES.SHOW_USER_REGISTERED:
            return {
                ...state,
                showLogin: false,
                showRegister: false,
                showUpdateUser: false,
                showUserRegistered: true,
            }

        case TYPES.SHOW_UPDATE_USER:
            return {
                ...state,
                showLogin: false,
                showRegister: false,
                showUpdateUser: true,
                showUserRegistered: false,
            }

        case TYPES.SHOW_MAINSCREEN:
            return {
                ...state,
                showLogin: false,
                showRegister: false,
                showUpdateUser: false,
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








