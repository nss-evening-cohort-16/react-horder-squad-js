import React from 'react';
import { useParams } from 'react-router-dom';

export default function ItemDetails() {
  const { fbKey } = useParams();
  return (
    <div className="item-details-container">
      <p />
    </div>
  );
}
