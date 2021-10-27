import React, { useState, useEffect } from 'react';
import Stuff from '../components/Stuff';
import { getItems } from '../data/stuffData';

export default function Home() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    let isMounted = true;
    getItems().then((stuffArray) => {
      if (isMounted) setItems(stuffArray);
    });
    return () => {
      isMounted = false;
    }; // cleanup function
  }, []);

  return (
    <div className="container">
      {items ? (
        <>
          <h1 className="text-center">All Stuff</h1>
          <div className="d-flex flex-wrap">
            {items.map((stuff) => (
              <Stuff key={stuff.firebaseKey} stuff={stuff} setItems={setItems} />
            ))}
          </div>
        </>
      ) : (
        'Add Stuff'
      )}
    </div>
  );
}
