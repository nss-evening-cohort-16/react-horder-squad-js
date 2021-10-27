import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { deleteItem } from '../data/stuffData';

export default function Stuff({ stuff, setItems }) {
  const handleDelete = () => {
    deleteItem(stuff.firebaseKey).then((items) => setItems(items));
  };

  return (
    <div>
      <div className="card" style={{ width: '18rem', margin: '3px' }}>
        <div className="card-body">
          <h5 className="card-title">{stuff.itemName}</h5>
          <p className="card-title">{stuff.itemDescription}</p>
          <Link to={`/edit/${stuff.firebaseKey}`} className="btn btn-warning">
            Edit
          </Link>
          <Link to={`/details/${stuff.firebaseKey}`} className="btn btn-info">
            Details
          </Link>
          <button type="button" className="btn btn-danger" onClick={handleDelete}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

Stuff.propTypes = {
  stuff: PropTypes.shape(PropTypes.obj).isRequired,
  setItems: PropTypes.func.isRequired,
};
