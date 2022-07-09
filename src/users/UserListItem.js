import { Link } from 'react-router-dom';

function UserListItem({ BASE_URL, user, deleteUser }) {
   const { id, first_name, last_name } = user;

   const handleDelete = () => {
      fetch(`${BASE_URL}/users/${id}`, {
         method: 'DELETE',
      });
      deleteUser(user);
   };

   return (
      <div className="card" key={id}>
         <p>First Name: {first_name}</p>
         <p>Last Name: {last_name}</p>
         <div>
            <Link to={`/users/${id}`}></Link>
            <div>
               <Link
                  className="bg-orange-500 hover:bg-orange-400 text-white font-bold py-2 px-4 border-b-4 border-orange-700 hover:border-orange-500 rounded"
                  to={`/users/${id}/edit`}
               >
                  ✍🏼
               </Link>
               &nbsp; &nbsp;
               <button
                  className="bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded"
                  onClick={() => handleDelete(id)}
               >
                  ❌
               </button>
            </div>
         </div>
      </div>
   );
}
export default UserListItem;
