import { useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useForm } from '../hooks/useForm';

function UserEditForm({ BASE_URL, user = {}, updateUser }) {
   const initialData = {
      first_name: '',
      last_name: '',
      username: '',
      password: '',
   };

   const { formData, setFormData, handleChange } = useForm(initialData);

   const history = useHistory();
   const { id } = useParams();

   useEffect(() => {
      fetch(`${BASE_URL}/users/${id}`)
         .then((r) => r.json())
         .then((user) => setFormData(user));
   }, [id, BASE_URL, setFormData]);

   const handleSubmit = (e) => {
      e.preventDefault();
      const configObj = {
         method: 'PATCH',
         headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
         },
         body: JSON.stringify(formData),
      };

      fetch(`${BASE_URL}/users/${id}`, configObj)
         .then((r) => r.json())
         .then((updatedUser) => {
            updateUser(updatedUser);
            history.push(`/users/${id}`);
         });
   };

   return (
      <>
         <p className="text-2xl font-bold underline">
            Edit User: {user.username}
         </p>
         <form onSubmit={handleSubmit}>
            <fieldset className="p-4">
               <label htmlFor="first_name">First Name: &nbsp;</label>
               <input
                  className="text-black"
                  type="text"
                  name="first_name"
                  id="first_name"
                  value={formData.first_name}
                  onChange={handleChange}
               />
            </fieldset>
            <fieldset className="p-4">
               <label htmlFor="last_name">Last Name: &nbsp;</label>
               <input
                  className="text-black"
                  type="text"
                  name="last_name"
                  id="last_name"
                  value={formData.last_name}
                  onChange={handleChange}
               />
            </fieldset>
            <fieldset className="p-4">
               <label htmlFor="username">User Name: &nbsp;</label>
               <input
                  className="text-black"
                  type="text"
                  name="username"
                  id="username"
                  value={formData.username}
                  onChange={handleChange}
               />
            </fieldset>
            <fieldset className="p-4">
               <label htmlFor="password">Password: &nbsp;</label>
               <input
                  className="text-black"
                  type="text"
                  name="password"
                  id="password"
                  value={formData.password}
                  onChange={handleChange}
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
