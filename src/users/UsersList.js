import { Link } from 'react-router-dom';
import UserListItem from './UserListItem';

function UsersList({ users, deleteUser }) {
   const usersEl = users.map((user) => (
      <UserListItem key={user.id} user={user} deleteUser={deleteUser} />
   ));
   return (
      <>
         <div className="text-2xl font-bold">
            <Link
               className="inline-grid grid-cols-2 gap-54 underline"
               to="/users"
            >
               👥 All Users
            </Link>
            <Link to="/users/new">|➕ New User|</Link>
         </div>
         <div className="inline-grid grid-cols-3 gap-4">{usersEl}</div>
      </>
   );
}

export default UsersList;
