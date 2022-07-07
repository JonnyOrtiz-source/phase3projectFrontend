import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function UserEditForm({ user = {}, updateUser }) {
   const [first_name, setFirst_Name] = useState(user.first_name);
   const [last_name, setLast_Name] = useState(user.last_name);
   const [username, setUsername] = useState(user.username);
   const [password, setPassword] = useState(user.password);
   const { id } = useParams();

   useEffect(() => {
      setFirst_Name(user.first_name);
      setLast_Name(user.last_name);
      setUsername(user.username);
      setPassword(user.password);
   }, [user]);

   const handleSubmit = (e) => {
      e.preventDefault();

      updateUser(id, {
         first_name,
         last_name,
         username,
         password,
      });
   };

   return (
      <>
         <h1 className="text-2xl font-bold underline">
            Edit User: {user.username}
         </h1>
         <form onSubmit={handleSubmit}>
            <fieldset className="p-4">
               <label htmlFor="first_name">First Name: &nbsp;</label>
               <input
                  className="text-black"
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
                  className="text-black"
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
                  className="text-black"
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
                  className="text-black"
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
               Update User
            </button>
         </form>
      </>
   );
}

export default UserEditForm;
