import { Link } from 'react-router-dom';

function UserListItem({
   user: { id, first_name, last_name, username },
   deleteUser,
}) {
   return (
      <div className="card" key={id}>
         <h1>User Name: {username}</h1>
         <p>First Name: {first_name}</p>
         <p>Last Name: {last_name}</p>
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
