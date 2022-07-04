import { Link } from 'react-router-dom';

function UserListItem({
   user: { id, first_name, last_name, username, password },
   deleteUser,
}) {
   return (
      <div key={id}>
         <h1>{username}</h1>
         <p>{first_name}</p>
         <p>{last_name}</p>
         <p>{password}</p>
         <div>
            <Link to={`/users/${id}`}></Link>
            <div>
               <Link to={`/users/${id}/edit`}>✍🏼</Link>&nbsp; &nbsp;
               <button onClick={() => deleteUser(id)}>❌</button>
            </div>
         </div>
      </div>
   );
}
export default UserListItem;
