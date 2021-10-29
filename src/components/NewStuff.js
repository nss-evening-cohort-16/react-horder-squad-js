import React from 'react';
import PropTypes from 'prop-types';
import StuffForm from './StuffForm';

export default function NewStuff({ user }) {
  return (
    <>
      <h1 className="page-header">Hoard More Stuff</h1>
      <div className="form-container">
        <StuffForm user={user} />
      </div>
    </>
  );
}

NewStuff.propTypes = {
  user: PropTypes.shape(PropTypes.obj),
};

NewStuff.defaultProps = { user: {} };
