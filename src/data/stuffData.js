import axios from 'axios';
import firebaseConfig from '../api/apiKeys';

const fbUrl = firebaseConfig.databaseURL;

const getItems = async () => {
  const stuff = await axios.get(`${fbUrl}/stuff.json`);
  const stuffData = Object.values(stuff.data);
  return stuffData;
};

const getSingleItem = async (fbKey) => {
  const item = await axios.get(`${fbUrl}/stuff/${fbKey}.json`);
  const itemData = item.data;
  return itemData;
};

const createItem = (itemObj) => new Promise((resolve, reject) => {
  axios
    .post(`${fbUrl}/stuff.json`, itemObj)
    .then((obj) => {
      const fbKey = { firebaseKey: obj.data.name };
      axios.patch(`${fbUrl}/stuff/${obj.data.name}.json`, fbKey).then(() => {
        getItems().then(resolve);
      });
    })
    .catch(reject);
});

const deleteItem = (fbKey) => new Promise((resolve, reject) => {
  axios
    .delete(`${fbUrl}/stuff/${fbKey}.json`)
    .then(() => getItems().then(resolve))
    .catch(reject);
});

const updateItem = (updateObj) => new Promise((resolve, reject) => {
  axios
    .patch(`${fbUrl}/stuff/${updateObj.firebaseKey}.json`, updateObj)
    .then(() => getItems(updateObj.uid).then(resolve))
    .catch(reject);
});

export {
  getItems, updateItem, deleteItem, createItem, getSingleItem,
};
