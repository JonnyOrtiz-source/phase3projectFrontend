import { Link } from 'react-router-dom';

function ShoeListItem({
   shoe: { id, shoe_name, brand, sex, image_url },
   deleteShoe,
}) {
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
            <h1>Shoe Name: {shoe_name}</h1>
            <p>Brand: {brand}</p>
            <p>Sex: {sex}</p>
         </figure>
         <div>
            <Link to={`/shoes/${id}`}></Link>
            <div>
               <Link to={`/shoes/${id}/edit`}>✍🏼</Link>&nbsp; &nbsp;
               <button onClick={() => deleteShoe(id)}>❌</button>
            </div>
         </div>
      </div>
   );
}
export default ShoeListItem;
