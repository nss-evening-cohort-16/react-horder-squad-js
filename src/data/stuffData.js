import axios from 'axios';
import firebaseConfig from '../api/apiKeys';

const baseUrl = firebaseConfig.databaseURL;

const getStuff = () => new Promise((resolve, reject) => {
  axios
    .get(`${baseUrl}/stuff.json`)
    .then((response) => {
      resolve(Object.values(response.data));
    })
    .catch(reject);
});

export default getStuff;
