import Advert from '../models/Advert';

const API_URL = process.env.REACT_APP_API_URL;

/* ------ API generic requests ------ */

const getRequest = (url) => {
  return fetch(
    url,
    {
      method: 'GET',
      headers: { 'Accept': "application/json, text/plain, */*", }
    }
  )
    .catch(err => console.log(err)) // Este error aparece cuando por ejemplo la API no redirecciona bien a las rutas. EN vez de hacer nada con él, pinto API Unavailable. Se podría mejorar.
    .then(res => res.json());
}

const getRequestPrivate = (url, token) => {
  return fetch(
    url,
    {
      method: 'GET',
      headers: { 'Accept': "application/json, text/plain, */*", 'Authorization': token }
    }
  )
    .catch(err => console.log(err)) // Este error aparece cuando por ejemplo la API no redirecciona bien a las rutas. EN vez de hacer nada con él, pinto API Unavailable. Se podría mejorar.
    .then(res => res.json());
}


const createRequestPublic = (url, body) => {
  return fetch(
    url,
    {
      method: 'POST',
      headers: {'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    }
  )
    .catch(err => console.log(err))
    .then(res => res.json());
}

// const createRequestPrivate = (url, body, token) => {
//   return fetch(
//     url,
//     {
//       method: 'POST',
//       headers: {'Content-Type': 'application/json','Authorization': token },
//       body: JSON.stringify(body)
//     }
//   )
//     .catch(err => console.log(err))
//     .then(res => res.json());
// }

const createRequestWithPhoto = (url, body, token) => {
  const formData = new FormData()
  for (const name in body) { formData.append(name, body[name]) }
  return fetch(
    url,
    {
      method: 'POST',
      headers: {'Authorization': token },
      body: formData,
    }
  )
    .catch(err => console.log(err))
    .then(res => res.json());
}

const createRequestWithPhotoPublic = (url, body) => {
  const formData = new FormData()
  for (const name in body) { formData.append(name, body[name]) }
  return fetch(
    url,
    {
      method: 'POST',
      body: formData,
    }
  )
    .catch(err => console.log(err))
    .then(res => res.json());
}

// const updateRequest = (url, body, token) => {
//   return fetch(
//     url,
//     {
//       method: 'PUT',
//       body: JSON.stringify(body),
//       headers: {'Content-Type': 'application/json', 'Authorization': token },
//     }
//   )
//     .catch(err => console.log(err))
//     .then(res => res.json());
// }

const updateRequestWithPhoto = (url, body, token) => {
  const formData = new FormData()
  for (const name in body) { formData.append(name, body[name]) }
  return fetch(
    url,
    {
      method: 'PUT',
      headers: {'Authorization': token },
      body: formData,
    }
  )
    .catch(err => console.log(err))
    .then(res => res.json());
}



const deleteRequest = (url, token) => {
  return fetch(
    url,
    {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json', 'Authorization': token },
    }
  )
    .catch(err => console.log(err))
    .then(res => res.json());
}


/* ------ Specific functions ------ */

const loginJWT = (user) => {
  return createRequestPublic(`${API_URL}/login`, user)
    .catch(error => console.error('Error:', error))
    .then(response => response)
}

const registerNewUser = (user) => {
  return createRequestWithPhotoPublic(`${API_URL}/register`, user)
    .catch(error => console.error('Error:', error))
    .then(response => response)

}

const getUser = (username, token) => {
  return getRequestPrivate(`${API_URL}/user/${username}`, token)
    .catch(error => console.error('Error:', error))
    .then(res => res.user)
}

const updateUser = (user, username, token) => {
  return updateRequestWithPhoto(`${API_URL}/user/${username}`, user, token)
    .catch(error => console.error('Error:', error))
    .then(res => res.user)
}

const deleteUser = (username, token) => {
  return deleteRequest(`${API_URL}/user/${username}`, token)
    .catch(error => console.error('Error:', error))
    .then(response => response)
}




const getTags = () => {
  return getRequest(`${API_URL}/tags/`)
    .catch(error => console.error('Error:', error))
    .then(res => res.tags)
}

// De momento no se usa
const getOneAdvert = (advertID) => {
  return getRequest(`${API_URL}/adverts/${advertID}`)
    .catch(error => console.error('Error:', error))
    .then(res => new Advert(res.advert))
}

// De momento no se usa
const discoverAdverts = () => {
  return getRequest(`${API_URL}/adverts/`)
    .catch(error => console.error('Error:', error))
    .then(res => res.list.map(adv => new Advert(adv)))
}

const getAdverts = (query) => {
  return getRequest(`${API_URL}/adverts?${query}`)
    .catch(error => console.error('Error:', error))
    .then(res => res.list.map(adv => new Advert(adv)))

}

const createAdvert = (advert, token) => {
  return createRequestWithPhoto(`${API_URL}/adverts`, advert, token)
    .catch(error => console.error('Error:', error))
    .then(response => response)

}

const updateAdvert = (advert, token) => {
  return updateRequestWithPhoto(`${API_URL}/adverts/${advert.slugName}`, advert, token)
    .catch(error => console.error('Error:', error))
    .then(response => response)
}

const deleteAdvert = (slugName, token) => {
  return deleteRequest(`${API_URL}/adverts/${slugName}`, token)
    .catch(error => console.error('Error:', error))
    .then(response => response)
}


export {
  loginJWT,
  getUser,
  updateUser,
  registerNewUser,
  deleteUser,
  discoverAdverts,
  getAdverts,
  getOneAdvert,
  createAdvert,
  updateAdvert,
  deleteAdvert,
  getTags,

};