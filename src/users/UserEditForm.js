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
         <h1>Edit User: {user.username}</h1>
         <form onSubmit={handleSubmit}>
            <fieldset>
               <label htmlFor="first_name">First Name: &nbsp;</label>
               <input
                  type="text"
                  name="first_name"
                  id="first_name"
                  value={first_name}
                  onChange={(e) => setFirst_Name(e.target.value)}
               />
            </fieldset>
            <fieldset>
               <label htmlFor="last_name">Last Name: &nbsp;</label>
               <input
                  type="text"
                  name="last_name"
                  id="last_name"
                  value={last_name}
                  onChange={(e) => setLast_Name(e.target.value)}
               />
            </fieldset>
            <fieldset>
               <label htmlFor="username">User Name: &nbsp;</label>
               <input
                  type="text"
                  name="username"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
               />
            </fieldset>
            <fieldset>
               <label htmlFor="password">Password: &nbsp;</label>
               <input
                  type="text"
                  name="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
               />
            </fieldset>
            <button type="submit">Update User</button>
         </form>
      </>
   );
}

export default UserEditForm;
