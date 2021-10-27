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

const updateStuff = (stuffObj) => new Promise((resolve, reject) => {
  axios
    .patch(`${baseUrl}/stuff/${stuffObj.firebaseKey}.json`, stuffObj)
    .then(() => getStuff().then(resolve))
    .catch(reject);
});

export { getStuff, updateStuff };
