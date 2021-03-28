import axios from 'axios';

const URL = 'https://rickandmortyapi.com/api/character';

export default function requestApi() {
  return axios.get(URL).then((response) => {
    return response.data.results;
  });
}
