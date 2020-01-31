import Advert from '../models/Advert';

const API_URL = 'https://localhost:3002/apiv1';
//const API_URL = 'https://localhost:3002/apiv1/anuncios?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTMwODI3MTRiYTM4NjNhMWNlZTQyMzQiLCJpYXQiOjE1ODAyMzgwMDAsImV4cCI6MTU4MDQxMDgwMH0.IvXE86dRNT347LFJq84yOkWDNz1ei0qno60hqo0Speg'
const getRequest = (url) => {
  return fetch(url,
   { method: "GET" },
   { 
     Accept: "application/json, text/plain, */*"}
   )
   .then(res => res.json()).catch(err => console.log(err));
}

const createRequest = (url, advert) => {
return fetch(url, {
  method: 'POST', // or 'PUT'
  body: JSON.stringify(advert), // data can be `string` or {object}!
  headers:{
    'Content-Type': 'application/json'
  }
}).then(res => res.json());

}

const updateRequest = (url, advert) => {
  return fetch(url, {
    method: 'PUT', // or 'PUT'
    body: JSON.stringify(advert), // data can be `string` or {object}!
    headers:{
      'Content-Type': 'application/json'
    }
  }).then(res => res.json());
  
  }

const getTags = () => {
  return getRequest(`${API_URL}/tags/`)
  .then(res => res.tags)

}

const getAdvert = (advertID) => {
  return getRequest(`${API_URL}/anuncios/${advertID}`)
  .then(res => new Advert(res.advert))
 

}

const discoverAdverts = () => {
  return getRequest(`${API_URL}/anuncios/`)
  .then(res => res.list.map(adv => new Advert(adv)))
  
}


const searchAdverts = (query) => {
  return getRequest(`${API_URL}/anuncios?${query}`)
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
  getAdvert,
  discoverAdverts,
  searchAdverts,
  createAdvert,
  updateAdvert
};