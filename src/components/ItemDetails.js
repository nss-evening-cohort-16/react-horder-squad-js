import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getSingleItem } from '../data/stuffData';

export default function ItemDetails() {
  const { fbKey } = useParams({});
  const [item, setItem] = useState({});

  useEffect(() => {
    getSingleItem(fbKey).then((stuff) => setItem(stuff));
  }, []);

  return (
    <div className="item-details-container">
      <img className="item-details-img" src={item.itemImage} alt={item.itemName} />
      <h1>{item.itemName}</h1>
      <p>{item.itemDescription}</p>
    </div>
  );
}
