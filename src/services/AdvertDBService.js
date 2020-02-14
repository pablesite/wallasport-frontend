import Advert from '../models/Advert';


const API_URL = process.env.REACT_APP_API_URL;

// Token aquí para pruebas. Hay que cogerlo siempre del store de Redux.
const tokenJWT = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTQ0NDg4ODIzNmEyNjUzMzg4ZDdhNmEiLCJpYXQiOjE1ODE2NzAzMzMsImV4cCI6MTU4MTg0MzEzM30.Ik1IeQlZVkriFu3WtwQaPL5NxsSblw6to3dxLPrndDY';

/* ------ API generic requests ------ */

const getRequest = (url, token) => {
  return fetch(
    url,
    {
      method: 'GET',
      headers:
      {
        'Accept': "application/json, text/plain, */*",
        'Authorization': token 
      }
    }
  )
    .catch(err => console.log(err)) // Este error aparece cuando por ejemplo la API no redirecciona bien a las rutas. EN vez de hacer nada con él, pinto API Unavailable. Se podría mejorar.
    .then(res => res.json());
}


const createRequest = (url, body, token) => {

  return fetch(
    url,
    {
      method: 'POST',
      headers:
      {
        'Content-Type': 'application/json',
        'Authorization': tokenJWT
      },
      body: JSON.stringify(body)

    }
  )
    .catch(err => console.log(err))
    .then(res => res.json());
}


const createRequestWithPhoto = (url, body, token) => {

  const formData = new FormData()

  for(const name in body) {
    formData.append(name, body[name]);
  }

  return fetch(
    url,
    {
      method: 'POST',
      headers:
      {
         'Authorization': tokenJWT
      },
      body: formData,
    }
  )
    .catch(err => console.log(err))
    .then(res => res.json());
}



const updateRequest = (url, body, token) => {
  return fetch(
    url,
    {
      method: 'PUT',
      body: JSON.stringify(body),
      headers:
      {
        'Content-Type': 'application/json',
        'Authorization': tokenJWT
      },
    }
  )
    .catch(err => console.log(err))
    .then(res => res.json());
}


const updateRequestWithPhoto = (url, body, token) => {

  const formData = new FormData()

  for(const name in body) {
    formData.append(name, body[name]);
  }

  return fetch(
    url,
    {
      method: 'PUT',
      headers:
      {
         'Authorization': tokenJWT
      },
      body: formData,
    }
  )
    .catch(err => console.log(err))
    .then(res => res.json());
}



const deleteRequest = (url, body, token) => {

  return fetch(
    url,
    {
      method: 'DELETE',
      headers:
      {
        'Content-Type': 'application/json',
        'Authorization': tokenJWT
      },
      body: JSON.stringify(body)

    }
  )
    .catch(err => console.log(err))
    .then(res => res.json());
}


/* ------ Specific functions ------ */

const loginJWT = (user) => {
  return createRequest(`${API_URL}/login`, user)
    .catch(error => console.error('Error:', error))
    .then(response => response)

}

const registerNewUser = (user) => {
  return createRequest(`${API_URL}/register`, user)
    .catch(error => console.error('Error:', error))
    .then(response => response)

}

const getTags = () => {
  return getRequest(`${API_URL}/tags/`)
    .then(res => res.tags)

}

// De momento no se usa
const getOneAdvert = (advertID) => {
  return getRequest(`${API_URL}/adverts/${advertID}`)
    .then(res => new Advert(res.advert))


}

const discoverAdverts = () => {
  return getRequest(`${API_URL}/adverts/`)
    .then(res => res.list.map(adv => new Advert(adv)))

}

const getAdverts = (query) => {
  return getRequest(`${API_URL}/adverts?${query}`)
    .then(res => res.list.map(adv => new Advert(adv)))

}

const createAdvert = (advert, token) => {
  return createRequestWithPhoto(`${API_URL}/adverts`, advert, token)
    .catch(error => console.error('Error:', error))
    .then(response => response)

}

const updateAdvert = (advert, slugName, token) => {
  return updateRequestWithPhoto(`${API_URL}/adverts/${slugName}`, advert, token)
    .catch(error => console.error('Error:', error))
    .then(response => response)
}

const deleteAdvert = (slugName, token) => {
  return deleteRequest(`${API_URL}/adverts/${slugName}`, token)
    .catch(error => console.error('Error:', error))
    .then(response => response)
}


export {
  getTags,
  getOneAdvert,
  discoverAdverts,
  getAdverts,
  createAdvert,
  updateAdvert,
  deleteAdvert,
  loginJWT,
  registerNewUser,
};