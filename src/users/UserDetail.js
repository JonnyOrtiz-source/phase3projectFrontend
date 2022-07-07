import { useState } from 'react';
import { Link } from 'react-router-dom';
import NewUserShoeForm from './NewUserShoeForm';

function UserDetail({ user = {}, addUserShoe, deleteUserShoe, deleteUser }) {
   const { id, first_name, last_name, shoes } = user;
   console.log(shoes);
   const [showNewUserShoeForm, setShowNewUserShoeForm] = useState(false);

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
            <h1>
               {first_name} {last_name}
            </h1>
            <Link to={`/users/{id}/edit`}>✍🏼 </Link>
            <button onClick={() => deleteUser(id)}>❌</button>
         </div>
         <div>
            <h1>
               Shoes{' '}
               {!showNewUserShoeForm && (
                  <button onClick={toggleShowNewUserShoeForm}>
                     ➕ Add Shoe
                  </button>
               )}
            </h1>
         </div>
         <ul>
            {shoes?.map((userShoe) => (
               <li key={userShoe.id}>
                  <Link to={`/shoes/${userShoe.shoe_id}`}>
                     Shoe Type: {userShoe.user_shoes[0].shoe_type} &nbsp; Brand:{' '}
                     {userShoe.brand} &nbsp; Shoe Name: {userShoe.shoe_name}{' '}
                     &nbsp; Sex: {userShoe.sex} &nbsp; Purchase Date:{' '}
                     {userShoe.user_shoes[0].purchase_date}&nbsp; Color:{' '}
                     {userShoe.user_shoes[0].color} &nbsp; Size:{' '}
                     {userShoe.user_shoes[0].size}
                  </Link>{' '}
                  &nbsp;&nbsp;
                  <button onClick={() => deleteUserShoe(id, userShoe.id)}>
                     ❌
                  </button>
               </li>
            ))}
            {showNewUserShoeForm && (
               <li key="theNewUserShoeForm">
                  <NewUserShoeForm
                     user={user}
                     toggleShowNewUserShoeForm={toggleShowNewUserShoeForm}
                     handleAddUserShoe={handleAddUserShoeSubmit}
                  />
               </li>
            )}
         </ul>
      </div>
   );
}

export default UserDetail;
