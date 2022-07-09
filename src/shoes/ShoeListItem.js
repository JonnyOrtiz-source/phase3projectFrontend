import { Link } from 'react-router-dom';

function ShoeListItem({ BASE_URL, shoe, deleteShoe }) {
   const { id, shoe_name, brand, sex, image_url } = shoe;

   const handleDelete = () => {
      fetch(`${BASE_URL}/shoes/${id}`, {
         method: 'DELETE',
      });
      deleteShoe(shoe);
   };

   return (
      <div className="card" key={id}>
         <figure>
            <img
               src={
                  image_url ||
                  'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg?20200913095930'
               }
               alt={shoe_name}
            />
            <p>Shoe Name: {shoe_name}</p>
            <p>Brand: {brand}</p>
            <p>Sex: {sex}</p>
         </figure>
         <div>
            <Link to={`/shoes/${id}`}></Link>
            <div>
               <Link
                  className="bg-orange-500 hover:bg-orange-400 text-white font-bold py-2 px-4 border-b-4 border-orange-700 hover:border-orange-500 rounded"
                  to={`/shoes/${id}/edit`}
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
export default ShoeListItem;
