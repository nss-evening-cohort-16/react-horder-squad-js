import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { createItem, updateItem, getSingleItem } from '../data/stuffData';

const initialState = {
  firebaseKey: '',
  itemDescription: '',
  itemImage: '',
  itemName: '',
  uid: '',
};

export default function StuffForm({ user }) {
  const [formInput, setFormInput] = useState({});
  const { fbKey } = useParams();
  const history = useHistory();

  useEffect(() => {
    if (fbKey) {
      getSingleItem().then(() => {
        setFormInput({
          itemDescription: user.itemDescription,
          itemImage: user.itemImage,
          itemName: user.itemName,
          uid: user.uid,
        });
      });
    } else {
      setFormInput(initialState);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((preState) => ({
      ...preState,
      [name]: value,
    }));
  };

  const resetForm = () => {
    setFormInput({ ...initialState });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (fbKey) {
      updateItem(fbKey).then(() => {
        resetForm();
      });
    } else {
      createItem({ ...formInput, uid: user.uid }).then(() => {
        resetForm();
        history.push('/');
      });
    }
  };

  return (
    <>
      <form className="stuff-form junk-div-style" onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            className="form-control"
            name="itemName"
            value={formInput.itemName || ''}
            onChange={handleChange}
            placeholder="Stuffs Name"
            required
          />
        </div>
        <div>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            name="itemDescription"
            value={formInput.itemDescription || ''}
            onChange={handleChange}
            placeholder="Stuffs Description"
            required
          />
        </div>
        <div>
          <input
            type="url"
            className="form-control"
            name="itemImage"
            value={formInput.itemImage || ''}
            onChange={handleChange}
            placeholder="Stuffs Image"
            required
          />
        </div>
        <div className="form-btn-group">
          <button type="submit" className="btn btn-success">
            {fbKey ? 'Edit' : 'Submit'}
          </button>
        </div>
      </form>
    </>
  );
}

StuffForm.propTypes = {
  user: PropTypes.shape({
    itemDescription: PropTypes.string,
    itemImage: PropTypes.string,
    itemName: PropTypes.string,
    uid: PropTypes.string,
    firebaseKey: PropTypes.string,
  }),
};

StuffForm.defaultProps = { user: {} };
