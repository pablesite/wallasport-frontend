import {
  // USER types
  GET_USER_SUCCESS,
  // CREATE_USER_SUCESS,
  UPDATE_USER_SUCCESS,
  DELETE_USER_SUCCESS,

  REGISTER_SUCCESS,
  REGISTER_INVALID,
  LOGIN_SUCCESS,
  LOGIN_INVALID,
  LOGOUT_SUCCESS,


  // ADVERTS types
  ADVERTS_SUCCESS, //GET, CREATE OR UPDATE
  //DELETE_ADVERT
  DIVIDE_IN_PAGES,
  PAGE_BACK,
  PAGE_FORWARD,
  USER_OWNER_SUCCESS,


  // TAGS types
  GET_TAGS_SUCCESS,
  // SHOW_REGISTER,


  // UI types
  API_REQUEST,
  API_FAILURE,
  API_SUCCESS,


  // APPSELECTORS types
  SHOW_LOGIN,
  SHOW_REGISTER,
  SHOW_USER_REGISTERED,
  SHOW_UPDATE_USER,
  SHOW_MAINSCREEN,
  SHOW_CREATE_ADVERT,
  SHOW_UPDATE_ADVERT,
  SHOW_ADVERT_DETAIL,
  SHOW_LIST,
  SWITCH_SORT,
  // GO_DETAIL,


} from './types';

import User from '../models/User';
import Advert from '../models/Advert';

import { saveUserInLS, deleteLS } from '../services/Storage';

import i18n from 'i18next';


/* ----- USER Async_Thunks, Sync_Thunks and Actions----- */

/* Async_Thunks */

//Testeada
export const register = (user) => {
  return async function (dispatch, _getState, { services: { ApiService } }) {
    dispatch(apiRequest());
    try {
      const { success } = await ApiService.registerNewUser(user)
      if (success === true) {
        dispatch(registerSuccess());
        dispatch(showUserRegisteredAction());
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
  return async function (dispatch, _getState, { services: { ApiService } }) {
    dispatch(apiRequest());
    try {
      const { success, token } = await ApiService.loginJWT(user);
      if (success === true) {
        user = { username: user.username, token }
        dispatch(loginSuccess());
        dispatch(getUser(user.username, token))
        // dispatch(goToHome());
      } else {
        dispatch(loginInvalid(new Error(i18n.t('Invalid_credentials'))));
      }
    } catch (error) {
      dispatch(apiFailure(error));
    }
  };
};

export const updateUser = (user, username, token) => {
  return async function (dispatch, _getState, { services: { ApiService } }) {
    dispatch(apiRequest());
    try {
      await ApiService.updateUser(user, username, token) //también podríamos comprobar el resultado (info) para ver si se ha actualizado bien.
      dispatch(updateUserSuccess())
      dispatch(goToUserDetail());
      dispatch(getUser(user.username, token))
    } catch (error) {
      dispatch(apiFailure(error));
    }
  };
};

export const getUser = (username, token) => {
  return async function (dispatch, _getState, { services: { ApiService } }) {
    dispatch(apiRequest());
    try {
      let user = await ApiService.getUser(username, token)
      user = { ...user, token: token }
      saveUserInLS(user);
      dispatch(getUserSuccess(user));
    } catch (error) {
      dispatch(apiFailure(error));
    }
  };
};

export const getFavsFromUser = (username, token) => {
  return async function (dispatch, _getState, { services: { ApiService } }) {
    dispatch(apiRequest());
    try {
      const sort = _getState().adverts.sort;
      let sortEnhanced = '';
      if (sort !== undefined) {
        if (sort === false) { sortEnhanced = 'creationDate' }
        if (sort === true) { sortEnhanced = '-creationDate' }
      }      
      let user = await ApiService.getFavsFromUser(username, sortEnhanced, token)
      let favs = user.favs;
      dispatch(divideInPages(favs, 8, sort)); //Parámetro (el 8) debería ser modificable por el usuario.
      dispatch(goToHome());
      dispatch(AdvertsSuccess());
    } catch (error) {
      dispatch(apiFailure(error));
    }
  };
};

// export const getAdvertsFromUser = (username, token) => {
//   return async function (dispatch, _getState, { services: { ApiService } }) {
//     dispatch(apiRequest());
//     try {
//       let adverts = await ApiService.getAdvertsFromUser(username, token)
//       dispatch(divideInPages(adverts, 8, sort)); //Parámetro (el 8) debería ser modificable por el usuario.
//       dispatch(goToHome());
//       dispatch(AdvertsSuccess());
//     } catch (error) {
//       dispatch(apiFailure(error));
//     }
//   };
// };


export const deleteUser = (username, token) => {
  return async function (dispatch, _getState, { services: { ApiService } }) {
    dispatch(apiRequest());
    try {
      await ApiService.deleteUser(username, token)
      dispatch(logout());
      dispatch(deleteUserSuccess());
    } catch (error) {
      dispatch(apiFailure(error));
    }
  };
};

export const markAsFavourite = (user, favourite) => {
  return async function (dispatch, _getState, { services: { ApiService } }) {
    dispatch(apiRequest());
    try {
      user = { ...user, favs: favourite }
      await ApiService.updateUser(user, user.username, user.token)
      dispatch(getAdverts());
      dispatch(getUser(user.username, user.token))
      dispatch(updateUserSuccess())
    } catch (error) {
      dispatch(apiFailure(error));
    }
  };
};


/* Sync_Thunks */

//Testeada
export const logout = () => {
  return function (dispatch, _getState) {
    deleteLS();
    dispatch(logoutSuccess());
  };
};


/* Actions */

//Testeada
export const registerSuccess = () => ({
  type: REGISTER_SUCCESS,
});

//Testeada
export const registerInvalid = error => ({
  type: REGISTER_INVALID,
  error,
});

//Testeada
export const loginSuccess = () => ({
  type: LOGIN_SUCCESS,
});

//Testeada
export const loginInvalid = error => ({
  type: LOGIN_INVALID,
  error,
});

//Testeada
export const logoutSuccess = () => ({
  type: LOGOUT_SUCCESS,
  user: new User(),
});

export const deleteUserSuccess = () => ({
  type: DELETE_USER_SUCCESS,
});

export const getUserSuccess = user => ({
  type: GET_USER_SUCCESS,
  user: user,
});

export const updateUserSuccess = () => ({
  type: UPDATE_USER_SUCCESS,
});



/* ----- ADVERTS Async_Thunks, Sync_Thunks and Actions----- */

/* Async_Thunks */

export const getAdverts = (query) => {
  return async function (dispatch, _getState, { history, services: { ApiService } }) {
    dispatch(apiRequest());
    try {
      const sort = _getState().adverts.sort;
      let sortEnhanced = '';
      if (sort !== undefined) {
        if (sort === false) { sortEnhanced = '' }
        if (sort === true) { sortEnhanced = '-' }
        if (query === '' || query === undefined) { query = 'sort=' + sortEnhanced + 'creationDate' }
        else { query = query + '&sort=' + sortEnhanced + 'creationDate' }
      }
      const adverts = await ApiService.getAdverts(query)
      dispatch(divideInPages(adverts, 8, sort)); //Parámetro (el 8) debería ser modificable por el usuario.
      dispatch(AdvertsSuccess());
    } catch (error) {
      dispatch(apiFailure(error));
    }
  };
};

// Para petición a la API...me hace falta?
// export const getOneAdvert = (id) => {
//   return async function (dispatch, _getState, { history, services: { ApiService } }) {
//     dispatch(apiRequest());
//     try {
//       const advert = await ApiService.getOneAdvert(id)

//       dispatch(divideInPages([advert], 1, true));
//       dispatch(AdvertsSuccess());
//       history.push(`/advert/${id}`);
//     } catch (error) {
//       dispatch(apiFailure(error));
//     }
//   };
// };



export const getUserOwnerFromAdvert = (slugName) => {
  return async function (dispatch, _getState, { history, services: { ApiService } }) {
    dispatch(apiRequest());
    try {
      const advert = await ApiService.getOneAdvert(slugName)
      console.log('advert con populate hecho', advert)
      dispatch(UserOwnerSuccess(advert.userOwner))
      dispatch(AdvertsSuccess());
      
      // history.push(`/advert/${id}`);
    } catch (error) {
      dispatch(apiFailure(error));
    }
  };
};

export const createAdvert = (advert, token) => {
  return async function (dispatch, _getState, { services: { ApiService } }) {
    dispatch(apiRequest());
    try {
      await ApiService.createAdvert(advert, token)
      dispatch(AdvertsSuccess());
      dispatch(getAdverts())
    } catch (error) {
      dispatch(apiFailure(error));
    }
  };
};

export const updateAdvert = (advert, token) => {
  return async function (dispatch, _getState, { services: { ApiService } }) {
    dispatch(apiRequest());
    try {
      await ApiService.updateAdvert(advert, token) //también podríamos comprobar el resultado (info) para ver si se ha actualizado bien.
      dispatch(AdvertsSuccess());
    } catch (error) {
      dispatch(apiFailure(error));
    }
    dispatch(getAdverts())
  };
};

export const deleteAdvert = (slugName, token) => {
  return async function (dispatch, _getState, { services: { ApiService } }) {
    dispatch(apiRequest());
    try {
      await ApiService.deleteAdvert(slugName, token) //también podríamos comprobar el resultado (info) para ver si se ha actualizado bien.
      dispatch(AdvertsSuccess());
      dispatch(goToHome());
      dispatch(getAdverts())
    } catch (error) {
      dispatch(apiFailure(error));
    }
  };
};


export const markAsReserved = (advert, token) => {
  return async function (dispatch, _getState, { services: { ApiService } }) {
    dispatch(apiRequest());
    try {
      if (advert.sold === true) {
        advert = { ...advert, reserved: false }
      } else {
        advert = { ...advert, reserved: !advert.reserved }
      }
      await ApiService.updateAdvert(advert, token)
      dispatch(getAdverts());
      dispatch(AdvertsSuccess())
      
    } catch (error) {
      dispatch(apiFailure(error));
    }
  };
};

export const markAsSold = (advert, token) => {
  return async function (dispatch, _getState, { services: { ApiService } }) {
    dispatch(apiRequest());
    try {
      if (advert.sold === false) { // it means that will be true
        advert = { ...advert, reserved: false }
      }
      advert = { ...advert, sold: !advert.sold }
      await ApiService.updateAdvert(advert, token)
      dispatch(AdvertsSuccess())
      dispatch(getAdverts());
    } catch (error) {
      dispatch(apiFailure(error));
    }
  };
};


/* Sync_Thunks */

/* Actions */

export const divideInPages = (adverts, numberPerPage, sort) => {

  const numberOfPages = Math.ceil(adverts.length / numberPerPage);
  const actualPage = 1;
  let advertsInPages = {};
  let index = 0;

  const filledAdverts = numberPerPage * numberOfPages - adverts.length;
  for (var i = 0; i < filledAdverts; i++) {
    adverts.push(new Advert({
      // _0: undefined,
      // _id: undefined,
      // creationDate: undefined,
      // description: undefined,
      // name: undefined,
      // photo: undefined,
      // price: null,
      // reserved: undefined,
      // sold: undefined,
      // tags: [],
      // type: undefined,
      // userOwner: undefined,
    }))
  }

  adverts.forEach(function (advert, key) {
    if ((key) % numberPerPage === 0) {
      index += 1;
      advertsInPages = {
        ...advertsInPages,
        [index]: [],
      }
    }
    advertsInPages[index].push(advert);
  });

  return {
    type: DIVIDE_IN_PAGES,
    adverts: { actualPage, numberOfPages, advertsInPages, sort },
  }
}

export const pageBack = (actualPage, numberOfPages) => {
  if (actualPage > 1) {
    actualPage = actualPage - 1;
  } else {
    actualPage = numberOfPages;
  }

  return {
    type: PAGE_BACK,
    actualPage: actualPage
  }
}

export const pageForward = (actualPage, numberOfPages) => {
  if (actualPage < numberOfPages) {
    actualPage = actualPage + 1;
  } else {
    actualPage = 1;
  }

  return {
    type: PAGE_FORWARD,
    actualPage: actualPage
  }
}

export const switchSort = (sort) => {
  return {
    type: SWITCH_SORT,
    sort: !sort
  }
}

export const UserOwnerSuccess = (userOwner) => {
  return {
    type: USER_OWNER_SUCCESS,
    userOwner: userOwner
  }
}




//Testeada
export const AdvertsSuccess = () => ({
  type: ADVERTS_SUCCESS,
});




/* ----- TAGS Async_Thunks, Sync_Thunks and Actions----- */

/* Async_Thunks */

export const fetchTags = () => {
  return async function (dispatch, _getState, { services: { ApiService } }) {
    dispatch(apiRequest());
    try {
      const tags = await ApiService.getTags();
      dispatch(getTagsSuccess(tags));
    } catch (error) {
      dispatch(apiFailure(error));
    }
  };
};

/* Sync_Thunks */

/* Actions */

export const getTagsSuccess = tags => ({
  type: GET_TAGS_SUCCESS,
  tags: tags,
});




/* ----- UI Actions----- */

// Testeada indirectamente
export const apiRequest = () => ({
  type: API_REQUEST,
});

export const apiFailure = error => ({
  type: API_FAILURE,
  error,
});

export const apiSuccess = () => ({
  type: API_SUCCESS,
});


/* ----- APPSELECTORS Actions----- */

// Testeada
export const showLoginAction = () => ({
  type: SHOW_LOGIN,
});

// Testeada
export const showRegisterAction = () => ({
  type: SHOW_REGISTER,
});

// Testeada indirectamente
export const showUserRegisteredAction = () => ({
  type: SHOW_USER_REGISTERED,
});

export const showUpdateUserAction = () => ({
  type: SHOW_UPDATE_USER,
});

// Testeada
export const showMainScreenAction = () => ({
  type: SHOW_MAINSCREEN,
});

export const showCreateAdvertAction = () => ({
  type: SHOW_CREATE_ADVERT,
});

export const showUpdateAdvertAction = () => ({
  type: SHOW_UPDATE_ADVERT,
});

export const showAdvertDetailAction = () => ({
  type: SHOW_ADVERT_DETAIL,
});

export const showListAction = () => ({
  type: SHOW_LIST,
});


/* ----- Change of route Sync_Thunks----- */

export const goToHome = () => {
  return function (dispatch, _getState, { history }) {
    dispatch(apiSuccess());  // if there is an error in login/register, and we go back, the error should be dissapear.
    dispatch(showListAction());
    dispatch(showMainScreenAction());
    history.push("/");
  };
};

export const goToLogin = () => {
  return function (dispatch, _getState, { history }) {
    // dispatch(apiSuccess());  // if there is an error in login/register, and we go back, the error should be dissapear.
    // dispatch(showListAction());
    // dispatch(showMainScreenAction());
    console.log('test')
    history.push("/login");
  };
};

export const goToUserDetail = () => {
  return function (dispatch, _getState, { history }) {
    dispatch(showMainScreenAction());
    history.push(`/user`);
  };
};

export const goToAdvertDetail = (slugName) => {
  return function (dispatch, _getState, { history }) {
    dispatch(showAdvertDetailAction())
    history.push(`/advert/${slugName}`);
  };
};

export const goToCreateAdvert = () => {
  return function (dispatch, _getState, { history }) {
    dispatch(showCreateAdvertAction());
    history.push(`/createOrUpdate/`);
  };
};

export const goToUpdateAdvert = (slugName) => {
  return async function (dispatch, _getState, { history }) {
    dispatch(showUpdateAdvertAction());
    history.push(`/createOrUpdate/${slugName}`);
  };
};

