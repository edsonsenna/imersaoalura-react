import config from '../config/index'; 

const URL_CATEGORIES = `${config.API_URL}categories`;


function getAll() {

    return fetch(URL_CATEGORIES)
    .then(async (response) => {
      if(response.ok) {
          return await response.json();
      }

      throw new Error('Unable to retrieve information from the API.');
    });
}

function getAllWithVideos() {

    return fetch(URL_CATEGORIES + '?_embed=videos')
    .then(async (response) => {
      if(response.ok) {
          return await response.json();
      }

      throw new Error('Unable to retrieve information from the API.');
    });
}

export default {
    getAll,
    getAllWithVideos
};