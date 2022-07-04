import React, { useState } from 'react';

function NewUserForm({ addUser }) {
   const [first_name, setFirst_Name] = useState('');
   const [last_name, setLast_Name] = useState('');
   const [username, setUsername] = useState('');
   const [password, setPassword] = useState('');

   const handleSubmit = async (e) => {
      e.preventDefault();

      addUser({
         first_name,
         last_name,
         username,
         password,
      });
   };

   return (
      <div>
         <h1 className="text-2xl font-bold underline">New User</h1>
         <form onSubmit={handleSubmit}>
            <fieldset className="p-4">
               <label htmlFor="first_name">First Name: &nbsp;</label>
               <input
                  type="text"
                  name="first_name"
                  id="first_name"
                  value={first_name}
                  onChange={(e) => setFirst_Name(e.target.value)}
               />
            </fieldset>
            <fieldset className="p-4">
               <label htmlFor="last_name">Last Name: &nbsp;</label>
               <input
                  type="text"
                  name="last_name"
                  id="last_name"
                  value={last_name}
                  onChange={(e) => setLast_Name(e.target.value)}
               />
            </fieldset>
            <fieldset className="p-4">
               <label htmlFor="username">User Name: &nbsp;</label>
               <input
                  type="text"
                  name="username"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
               />
            </fieldset>
            <fieldset className="p-4">
               <label htmlFor="password">Password: &nbsp;</label>
               <input
                  type="text"
                  name="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
               />
            </fieldset>
            <button
               className="bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 border-b-4 border-green-700 hover:border-green-500 rounded"
               type="submit"
            >
               Add User
            </button>
         </form>
      </div>
   );
}

export default NewUserForm;
