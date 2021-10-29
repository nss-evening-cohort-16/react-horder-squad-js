import React, { useState, useEffect } from 'react';
import { useParams, Link, useHistory } from 'react-router-dom';
import { getSingleItem, deleteItem } from '../data/stuffData';

export default function ItemDetails() {
  const { fbKey } = useParams({});
  const [item, setItem] = useState({});

  const history = useHistory();

  const handleDelete = () => {
    deleteItem(item.firebaseKey).then(() => history.push('/'));
  };

  useEffect(() => {
    getSingleItem(fbKey).then((stuff) => setItem(stuff));
  }, []);

  return (
    <div className="item-details-container">
      <img
        className="item-details-img"
        src={item.itemImage}
        alt={item.itemName}
      />
      <h1>{item.itemName}</h1>
      <p>{item.itemDescription}</p>
      <Link to={`/edit/${item.firebaseKey}`} className="btn btn-warning">
        Edit
      </Link>
      <Link to={`/details/${item.firebaseKey}`} className="btn btn-info">
        Details
      </Link>
      <button type="button" className="btn btn-danger" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
}
