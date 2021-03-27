import axios from 'axios';

const URL = 'https://rickandmortyapi.com/api/character';

export default function requestApi() {
  axios.get(URL).then((response) => response);
}
