import React from 'react';
import PropTypes from 'prop-types';
import StuffForm from './StuffForm';

export default function NewStuff({ user }) {
  return (
    <div>
      <StuffForm user={user} />
    </div>
  );
}

NewStuff.propTypes = {
  user: PropTypes.shape(PropTypes.object),
};

NewStuff.defaultProps = { user: {} };
