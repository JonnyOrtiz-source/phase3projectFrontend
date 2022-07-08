import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import NewUserShoeForm from './NewUserShoeForm';

function UserDetail({ user = {}, addUserShoe, deleteUserShoe, deleteUser }) {
   const { id, first_name, last_name, shoes } = user;
   const [showNewUserShoeForm, setShowNewUserShoeForm] = useState(false);

   const BASE_URL = 'http://localhost:9292';
   const [allShoes, setAllShoes] = useState([]);

   useEffect(() => {
      fetch(`${BASE_URL}/shoes`, {
         method: 'GET',
         headers: {
            'Content-type': 'application/json',
            Accept: 'application/json',
         },
      })
         .then((r) => r.json())
         .then((shoes) => setAllShoes(shoes))
         .catch((err) => {
            alert(err);
         });
   }, []);

   const toggleShowNewUserShoeForm = () => {
      setShowNewUserShoeForm(!showNewUserShoeForm);
   };

   const handleAddUserShoeSubmit = (formData) => {
      addUserShoe(id, formData);
      toggleShowNewUserShoeForm();
   };

   return (
      <div>
         <div>
            <div className="text-2xl font-bold">
               {first_name} {last_name}
            </div>
            <Link
               to={`/users/{id}/edit`}
               className="bg-orange-500 hover:bg-orange-400 text-white font-bold py-2 px-4 border-b-4 border-orange-700 hover:border-orange-500 rounded"
            >
               ✍🏼{' '}
            </Link>
            <button
               className="bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded"
               onClick={() => deleteUser(id)}
            >
               ❌
            </button>
         </div>
         <div>
            <div className="text-2xl">
               Shoes{' '}
               {!showNewUserShoeForm && (
                  <button onClick={toggleShowNewUserShoeForm}>
                     ➕ Add Shoe
                  </button>
               )}
            </div>
         </div>
         <ul>
            {shoes?.map((userShoe) => (
               <li key={userShoe.id}>
                  <Link to={`/shoes/${userShoe.id}`}>
                     Shoe Type: {userShoe.user_shoes[0].shoe_type} {'  '}
                     Brand: {userShoe.brand} {'  '} Shoe Name:{' '}
                     {userShoe.shoe_name}
                     {'  '}
                     <br /> Sex: {userShoe.sex} Purchase Date: {'  '}
                     {userShoe.user_shoes[0].purchase_date} {'  '} Color:
                     {'  '}
                     {userShoe.user_shoes[0].color} {'  '} Size:{'  '}
                     {userShoe.user_shoes[0].size}
                     <span hidden>{userShoe.user_shoes[0].id}</span>
                  </Link>{' '}
                  &nbsp;&nbsp;
                  <button
                     className="bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded"
                     onClick={() =>
                        deleteUserShoe(id, userShoe.user_shoes[0].id)
                     }
                  >
                     ❌ <span className="text-sm">shoe</span>
                  </button>
                  <hr />
               </li>
            ))}
            {showNewUserShoeForm && (
               <li key="theNewUserShoeForm">
                  <NewUserShoeForm
                     user={user}
                     toggleShowNewUserShoeForm={toggleShowNewUserShoeForm}
                     handleAddUserShoe={handleAddUserShoeSubmit}
                     allShoes={allShoes}
                  />
               </li>
            )}
         </ul>
      </div>
   );
}

export default UserDetail;
