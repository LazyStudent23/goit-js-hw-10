import axios from 'axios';

const BASE_URL = `https://api.thecatapi.com/v1/`;
axios.defaults.headers.common['x-api-key'] =
  'live_RYTotlA6fQ3ig4y8SmGanFeLZxUetBbmuZj60PDZpuXaPh9W7kEbGCDntGIzbwFU';

function fetchBreeds() {
  return axios.get(`${BASE_URL}breeds`).then(response => {
    return response.data;
  });
}

function fetchCatByBreed(breedId) {
  return axios
    .get(`${BASE_URL}images/search?breed_ids=${breedId}`)
    .then(response => {
      return response.data;
    });
}

export { fetchBreeds };
export { fetchCatByBreed };
