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
          <h1 className="page-header">All Stuff</h1>
          <div className="card-container">
            {items.map((stuff) => (
              <Stuff
                key={stuff.firebaseKey}
                stuff={stuff}
                setItems={setItems}
              />
            ))}
          </div>
        </>
      ) : (
        'Add Stuff'
      )}
    </div>
  );
}
