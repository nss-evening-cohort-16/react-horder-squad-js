// import { objectOf } from 'prop-types';
// import React, { useState, useEffect } from 'react';
// import { useHistory } from 'react-router-dom';

// const initialState = {
//   itemDescription: '',
//   itemImage: '',
//   itemName: '',
//   uid: '',
// };

// export default function StuffForm({ obj }) {
//   const [formInput, setFormInput] = useState({});
//   const history = useHistory();

//   useEffect(() => {
//     if (obj.firebaseKey) {
//       setFormInput({
//         itemDescription: obj.itemDescription,
//         itemImage: obj.itemImage,
//         itemName: obj.itemName,
//         uid: obj.uid,
//       });
//     } else {
//       setFormInput(initialState);
//     }
//   }, [obj]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormInput((preState) => ({
//       ...preState,
//       [name]: value,
//     }));
//   };

//   //   const handleSubmit = () => {

//   //   };

//   return (
//     <div>
//       <h1>Hello</h1>
//     </div>
//   );
// }
