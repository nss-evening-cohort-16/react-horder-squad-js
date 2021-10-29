import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import StuffForm from './StuffForm';
import { getSingleItem } from '../data/stuffData';

export default function Edit() {
  const { fbKey } = useParams;
  const [editItem, setEditItem] = useState({});

  useEffect(() => {
    getSingleItem(fbKey).then(setEditItem);
  }, []);
  return (
    <div>
      <StuffForm user={editItem} />
    </div>
  );
}
