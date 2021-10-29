import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { deleteItem } from '../data/stuffData';

export default function Stuff({ stuff, setItems }) {
  const handleDelete = () => {
    deleteItem(stuff.firebaseKey).then((items) => setItems(items));
  };

  return (
    <>
      <div className="stuff-card junk-div-style">
        <div className="card-interior">
          <h5 className="card-title">{stuff.itemName}</h5>
          <p className="card-title">{stuff.itemDescription}</p>
          <div className="card-btn-container">
            <Link to={`/edit/${stuff.firebaseKey}`} className="btn btn-success">
              <i className="far fa-edit" /> Edit
            </Link>
            <Link to={`/details/${stuff.firebaseKey}`} className="btn btn-primary">
              <i className="far fa-file-alt" /> Details
            </Link>
            <button type="button" className="btn btn-danger" onClick={handleDelete}>
              <i className="far fa-trash-alt" /> Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

Stuff.propTypes = {
  stuff: PropTypes.shape(PropTypes.obj).isRequired,
  setItems: PropTypes.func.isRequired,
};
