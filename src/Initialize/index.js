import React, { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

function Initialize() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((authed) => {
      if (authed) {
        const userObj = {
          uid: authed.uid,
          fullName: authed.displayName,
          profilePic: authed.photoURL,
          user: authed.email.split('@')[0],
        };
        setUser(userObj);
      } else if (user || user === null) {
        setUser(false);
      }
    });
  }, []);

  return <div className="App">{/* {user ? () : ()} */}</div>;
}

export default Initialize;
