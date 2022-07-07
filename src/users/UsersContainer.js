import { useState, useEffect } from 'react';
import { Switch, Route, useHistory, useLocation } from 'react-router-dom';
import UsersList from './UsersList';
import UserDetail from './UserDetail';
import NewUserForm from './NewUserForm';
import UserEditForm from './UserEditForm';

function UsersContainer() {
   const BASE_URL = 'http://localhost:9292';
   const [users, setUsers] = useState([]);
   const history = useHistory();
   const location = useLocation();

   useEffect(() => {
      fetch(`${BASE_URL}/users`)
         .then((r) => r.json())
         .then((users) => setUsers(users))
         .catch((err) => {
            alert(err);
         });
   }, []);

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

   const addUserShoe = (userId, formData) => {
      fetch(`${BASE_URL}/user_shoes`, {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
         },
         body: JSON.stringify(formData),
      })
         .then((res) => res.json())
         .then((newUserShoe) => {
            setUsers(
               users.map((user) => {
                  if (user.id === newUserShoe.user_id) {
                     return {
                        ...user,
                        user_shoes: user.user_shoes.concat(newUserShoe),
                     };
                  } else {
                     return user;
                  }
               })
            );
         });
   };

   const deleteUserShoe = (userId, userShoeId) => {
      if (window.confirm('Are you sure you want to delete this user shoe?')) {
         const userToUpdate = users.find(
            (user) => user.id === parseInt(userId)
         );
         // optimistically update the ui
         const updatedUsers = users.map((user) => {
            if (user === userToUpdate) {
               return {
                  ...userToUpdate,
                  user_shoes: user.user_shoes.filter((userShoe) => {
                     return userShoe.id !== userShoeId;
                  }),
               };
            } else {
               return user;
            }
         });
         setUsers(updatedUsers);
         // update the API
         fetch(`${process.env.REACT_APP_API_URL}/user_shoes/${userShoeId}`, {
            method: 'DELETE',
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
               path="/users/:id"
               render={({ match }) => (
                  <UserDetail
                     deleteUserShoe={deleteUserShoe}
                     deleteUser={deleteUser}
                     addUserShoe={addUserShoe}
                     user={users.find(
                        (user) => user.id === parseInt(match.params.id)
                     )}
                  />
               )}
            />

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
