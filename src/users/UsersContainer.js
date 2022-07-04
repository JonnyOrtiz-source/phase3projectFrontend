import { useState, useEffect } from 'react';
import { Switch, Route, useHistory, useLocation } from 'react-router-dom';
import UsersList from './UsersList';
import NewUserForm from './NewUserForm';
import UserEditForm from './UserEditForm';

function UsersContainer() {
   const BASE_URL = 'http://localhost:9292';
   const [users, setUsers] = useState([]);

   useEffect(() => {
      fetch(`${BASE_URL}/users`, {
         method: 'GET',
         headers: {
            'Content-type': 'application/json',
            Accept: 'application/json',
         },
      })
         .then((r) => r.json())
         .then((users) => setUsers(users))
         .catch((err) => {
            alert(err);
         });
   }, []);

   const history = useHistory();
   const location = useLocation();

   const addUser = (formData) => {
      fetch(`${BASE_URL}/users`, {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
         },
         body: JSON.stringify(formData),
      })
         .then((res) => res.json())
         .then((newUser) => {
            setUsers(users.concat(newUser));
            history.push(`/users/${newUser.id}`);
         });
   };

   const updateUser = (id, formData) => {
      fetch(`${BASE_URL}/users/${id}`, {
         method: 'PATCH',
         headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
         },
         body: JSON.stringify(formData),
      })
         .then((res) => res.json())
         .then((updatedUser) => {
            setUsers(
               users.map((user) =>
                  user.id === parseInt(id) ? updatedUser : user
               )
            );
            history.push(`/users/${updatedUser.id}`);
         });
   };

   const deleteUser = (userId) => {
      if (window.confirm('Are you sure you want to delete this user?')) {
         setUsers(users.filter((user) => user.id !== parseInt(userId)));
         fetch(`${BASE_URL}/users/${userId}`, {
            method: 'DELETE',
            headers: { Accept: 'application/json' },
         })
            .then((res) => res.json())
            .then((deletedUser) => {
               console.log('deleted', deletedUser.name);
               if (location.pathname !== '/users') {
                  history.push('/users');
               }
            });
      }
   };

   return (
      <div>
         <Switch>
            <Route exact path="/users">
               <UsersList users={users} deleteUser={deleteUser} />
            </Route>
            <Route exact path="/users/new">
               <NewUserForm users={users} addUser={addUser} />
            </Route>
            <Route
               exact
               path="/users/:id/edit"
               render={({ match }) => (
                  <UserEditForm
                     user={users.find(
                        (user) => user.id === parseInt(match.params.id)
                     )}
                     updateUser={updateUser}
                  />
               )}
            />
         </Switch>
      </div>
   );
}
export default UsersContainer;
