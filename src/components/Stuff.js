import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Stuff({ stuff }) {
  return (
    <div>
      <div className="card" style={{ width: '18rem', margin: '3px' }}>
        <div className="card-body">
          <h5 className="card-title">{stuff.itemName}</h5>
          <p className="card-title">{stuff.itemDescription}</p>
          <Link to={`/edit/${stuff.firebaseKey}`} className="btn btn-warning">
            Edit
          </Link>
          <button type="button" className="btn btn-danger">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

Stuff.propTypes = {
  stuff: PropTypes.shape(PropTypes.obj).isRequired,
};
