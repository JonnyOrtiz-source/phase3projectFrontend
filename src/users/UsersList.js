import { Link } from 'react-router-dom';
import UserListItem from './UserListItem';

function UsersList({ users, deleteUser }) {
   const usersEl = users.map((user) => (
      <UserListItem key={user.id} user={user} deleteUser={deleteUser} />
   ));
   return (
      <>
         <div>
            <Link to="/users">👣 All Users</Link>&nbsp; &nbsp; &nbsp; &nbsp;
            <Link to="/users/new">+ New User</Link>
         </div>
         <div>{usersEl}</div>
      </>
   );
}

export default UsersList;
