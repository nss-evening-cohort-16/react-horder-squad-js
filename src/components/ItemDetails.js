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
    <div className="item-details-container junk-div-style">
      <img className="item-details-img" src={item.itemImage} alt={item.itemName} />
      <h1>{item.itemName}</h1>
      <p>{item.itemDescription}</p>
      <div className="card-btn-container">
        <Link to={`/edit/${item.firebaseKey}`} className="btn btn-success">
          <i className="far fa-edit" /> Edit
        </Link>
        <Link to={`/details/${item.firebaseKey}`} className="btn btn-primary">
          <i className="far fa-file-alt" /> Details
        </Link>
        <button type="button" className="btn btn-danger" onClick={handleDelete}>
          <i className="far fa-trash-alt" /> Delete
        </button>
      </div>
    </div>
  );
}
