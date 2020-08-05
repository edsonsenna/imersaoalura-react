import config from '../config/index'; 

const URL_VIDEOS = `${config.API_URL}videos`;

function create(video) {


    return fetch(URL_VIDEOS, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(video),
    })
    .then(async (response) => {
      if(response.ok) {
          return await response.json();
      }

      throw new Error('Unable to retrieve information from the API.');
    });
}

export default {
    create
};