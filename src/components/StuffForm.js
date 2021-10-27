import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { createItem } from '../data/stuffData';

const initialState = {
  firebaseKey: '',
  itemDescription: '',
  itemImage: '',
  itemName: '',
  uid: '',
};

export default function StuffForm({ obj }) {
  const [formInput, setFormInput] = useState({});
  const history = useHistory();

  useEffect(() => {
    if (obj.firebaseKey) {
      setFormInput({
        itemDescription: obj.itemDescription,
        itemImage: obj.itemImage,
        itemName: obj.itemName,
        uid: obj.uid,
      });
    } else {
      setFormInput(initialState);
    }
  }, [obj]);

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
    e.prventDefault();
    if (obj.firebaseKey) {
      // Promises here
      resetForm();
    } else {
      createItem(formInput).then(() => {
        resetForm();
        history.push('/');
      });
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            className="form-control"
            name="itemName"
            value={formInput.itemName}
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
            value={formInput.itemDescription}
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
            value={formInput.itemImage}
            onChange={handleChange}
            placeholder="Stuffs Image"
            required
          />
        </div>
        <div>
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </div>
      </form>
    </>
  );
}

StuffForm.propTypes = {
  obj: PropTypes.shape({
    itemDescription: PropTypes.string,
    itemImage: PropTypes.string,
    itemName: PropTypes.string,
    uid: PropTypes.string,
    firebaseKey: PropTypes.string,
  }),
};

StuffForm.defaultProps = { obj: {} };
