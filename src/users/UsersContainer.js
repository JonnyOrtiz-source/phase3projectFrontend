import { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import UsersList from './UsersList';
import UserDetail from './UserDetail';
import NewUserForm from './NewUserForm';
import UserEditForm from './UserEditForm';

function UsersContainer() {
   const BASE_URL = 'http://localhost:9292';
   const [users, setUsers] = useState([]);
   const [status, setStatus] = useState(false);

   useEffect(() => {
      fetch(`${BASE_URL}/users`)
         .then((r) => r.json())
         .then((users) => {
            setUsers(users);
            setStatus(true);
         })
         .catch((err) => {
            alert(err);
         });
   }, []);

   const addUser = (newUser) => {
      setUsers((users) => [...users, newUser]);
   };

   const updateUser = (updatedUser) => {
      const updatedUsers = users.map((prevUser) => {
         if (prevUser.id === updatedUser.id) {
            return updatedUser;
         } else {
            return prevUser;
         }
      });
      setUsers(updatedUsers);
   };

   const deleteUser = (deletedUser) => {
      const updatedUsers = users.filter((user) => user.id !== deletedUser.id);
      setUsers(updatedUsers);
   };

   return (
      <div>
         <Switch>
            <Route exact path="/users">
               <UsersList
                  BASE_URL={BASE_URL}
                  users={users}
                  deleteUser={deleteUser}
               />
            </Route>
            <Route exact path="/users/new">
               <NewUserForm BASE_URL={BASE_URL} addUser={addUser} />
            </Route>
            {status && (
               <Route
                  exact
                  path="/users/:id"
                  render={({ match }) => (
                     <UserDetail
                        deleteUser={deleteUser}
                        user={users?.find(
                           (user) => user.id === parseInt(match.params.id)
                        )}
                     />
                  )}
               />
            )}
            <Route
               exact
               path="/users/:id/edit"
               render={({ match }) => (
                  <UserEditForm
                     BASE_URL={BASE_URL}
                     user={users.find(
                        (user) => user.id === parseInt(match.params.id)
                     )}
                     updateUser={updateUser}
                     users={users}
                  />
               )}
            />
         </Switch>
      </div>
   );
}
export default UsersContainer;
