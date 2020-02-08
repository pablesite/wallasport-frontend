import {

  API_REQUEST,
  API_FAILURE,
  GO_LOGIN,
  GO_REGISTER,
  GO_USER_REGISTERED,
  GO_APP,


  // GET_USER_SUCCESS,
  // CREATE_USER_SUCESS,
  // UPDATE_USER_SUCCESS,
  DELETE_USER_SUCCESS,

  REGISTER_SUCCESS,
  REGISTER_INVALID,
  LOGIN_SUCCESS,
  LOGIN_INVALID,


  ADVERTS_SUCCESS, //GET, CREATE OR UPDATE
  //DELETE_ADVERT

  DIVIDE_IN_PAGES,


  GET_TAGS_SUCCESS,
  // SHOW_REGISTER,


} from './types';

import User from '../models/User';

import { saveUserInLS, deleteLS } from '../services/Storage';

import i18n from 'i18next';



/* ----- API Generic Actions----- */

// Testeada indirectamente
export const apiRequest = () => ({
  type: API_REQUEST,
});

export const apiFailure = error => ({
  type: API_FAILURE,
  error,
});


/* ----- UI Actions----- */

// Testeada
export const goLogin = () => ({
  type: GO_LOGIN,
});

// Testeada
export const goRegister = () => ({
  type: GO_REGISTER,

});

// Testeada indirectamente
export const goUserRegistered = () => ({
  type: GO_USER_REGISTERED,

});

// Testeada
export const goApp = () => ({
  type: GO_APP,
});


/* ----- User Thunks and Actions----- */

//Testeada
export const register = (user) => {
  return async function (dispatch, _getState, { history, services: { AdvertsService } }) {

    dispatch(apiRequest());
    try {

      const { success } = await AdvertsService.registerNewUser(user)

      if (success === true) {
        // dispatch(goLogin());
        dispatch(goUserRegistered());
        dispatch(registerSuccess());
        // history.push("/login");
      } else {
        dispatch(registerInvalid(new Error(i18n.t('Invalid_data_registered'))));
      }

    } catch (error) {

      dispatch(apiFailure(error));

    }

  };
};


//Testeada
export const login = (user) => {
  return async function (dispatch, _getState, { history, services: { AdvertsService } }) {

    dispatch(apiRequest());
    try {

      const { success, token } = await AdvertsService.loginJWT(user)

      if (success === true) {
        user = { ...user, token }
        saveUserInLS(user);
        dispatch(goApp());
        dispatch(loginSuccess(user));
        history.push("/home");
      } else {
        dispatch(loginInvalid(new Error(i18n.t('Invalid_credentials'))));
      }

    } catch (error) {

      dispatch(apiFailure(error));

    }

  };
};


//Testeada
export const logout = () => {
  return async function (dispatch, _getState, { history }) {
    deleteLS();
    // dispatch(goLogin());
    dispatch(deleteUserSuccess());
  };
};


//Testeada
export const loginSuccess = user => ({
  type: LOGIN_SUCCESS,
  user,
});


//Testeada
export const registerSuccess = () => ({
  type: REGISTER_SUCCESS,

});


//Testeada
export const loginInvalid = error => ({
  type: LOGIN_INVALID,
  error,
});


//Testeada
export const registerInvalid = error => ({
  type: REGISTER_INVALID,
  error,
});


//Testeada
export const deleteUserSuccess = () => ({
  type: DELETE_USER_SUCCESS,
  user: new User(),
});



/* ----- Adverts Thunks and Actions----- */

export const getAdverts = (query) => {
  return async function (dispatch, _getState, { services: { AdvertsService } }) {
    dispatch(apiRequest());
    try {
      const adverts = await AdvertsService.getAdverts(query)

      dispatch(divideInPages(adverts, 6));
      dispatch(AdvertsSuccess());
      

    } catch (error) {
      dispatch(apiFailure(error));
    }
  };
};


export const getOneAdvert = (id) => {
  return async function (dispatch, _getState, { services: { AdvertsService } }) {
    dispatch(apiRequest());
    try {
      const advert = await AdvertsService.getOneAdvert(id)
      dispatch(AdvertsSuccess([advert]));
    } catch (error) {
      dispatch(apiFailure(error));
    }
  };
};


export const createAdvert = (advert) => {
  return async function (dispatch, _getState, { services: { AdvertsService } }) {
    dispatch(apiRequest());
    try {
      await AdvertsService.createAdvert(advert)
      dispatch(AdvertsSuccess([advert])); //revisar si funciona entre corchetes
    } catch (error) {
      dispatch(apiFailure(error));
    }
  };
};


export const updateAdvert = (advert, id) => {
  return async function (dispatch, _getState, { services: { AdvertsService } }) {
    dispatch(apiRequest());
    try {
      const { result } = await AdvertsService.updateAdvert(advert, id)
      dispatch(AdvertsSuccess([result])); //revisar si funciona entre corchetes
    } catch (error) {
      dispatch(apiFailure(error));
    }
  };
};


// export const deleteAdvert = () => {} 

//Testeada
export const AdvertsSuccess = () => ({
  type: ADVERTS_SUCCESS,
  // adverts: adverts,
});


/* ----- Divide In Pages Actions----- */


export const divideInPages = (adverts, numberPerPage) => {

  const numberOfPages = Math.ceil(adverts.length / numberPerPage);
  
  const actualPage = 1;
  let advertsInPages = {}
  let index = 0;


  adverts.forEach(function (advert, key) {
    if ((key) % numberPerPage === 0) {
      index += 1;
      advertsInPages = {
        ...advertsInPages,
        [index]: []
      }
    }
    advertsInPages[index].push(advert);
  });


  return {
    type: DIVIDE_IN_PAGES,
    adverts: {actualPage, numberOfPages, advertsInPages }
  }
}


/* ----- Tags Thunks and Actions----- */


export const fetchTags = () => {
  return async function (dispatch, _getState, { services: { AdvertsService } }) {
    dispatch(apiRequest());
    try {
      const tags = await AdvertsService.getTags();
      dispatch(getTagsSuccess(tags));

    } catch (error) {
      dispatch(apiFailure(error));
    }
  };
};


export const getTagsSuccess = tags => ({
  type: GET_TAGS_SUCCESS,
  tags: tags,
});






