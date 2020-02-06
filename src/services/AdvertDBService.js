import Advert from '../models/Advert';


const API_URL = process.env.REACT_APP_API_URL;

// Token aquí para pruebas. Hay que cogerlo siempre del store de Redux.
const tokenJWT = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTM0NmY1NzNlMmQwZjBhMzg3Y2U0M2EiLCJpYXQiOjE1ODA1NTQ0MDAsImV4cCI6MTU4MDcyNzIwMH0.NhmWWzP6nL4alyszgoxxa3wp73n1_nrgIIiS-xCWMUo';

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

const getOneAdvert = (advertID) => {
  return getRequest(`${API_URL}/anuncios/${advertID}`)
    .then(res => new Advert(res.advert))


}

const discoverAdverts = () => {
  return getRequest(`${API_URL}/anuncios/`)
    .then(res => res.list.map(adv => new Advert(adv)))

}

const searchAdverts = (query, token) => {
  return getRequest(`${API_URL}/anuncios?${query}`, token)
    .then(res => res.list.map(adv => new Advert(adv)))

}

const createAdvert = (advert) => {
  return createRequest(`${API_URL}/anuncios`, advert)
    .catch(error => console.error('Error:', error))
    .then(response => response)

}

const updateAdvert = (advert, id) => {
  return updateRequest(`${API_URL}/anuncios/${id}`, advert)
    .catch(error => console.error('Error:', error))
    .then(response => response)

}

export {
  getTags,
  getOneAdvert,
  discoverAdverts,
  searchAdverts,
  createAdvert,
  updateAdvert,
  loginJWT,
  registerNewUser,
};