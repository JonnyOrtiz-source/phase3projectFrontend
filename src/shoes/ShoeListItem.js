import { Link } from 'react-router-dom';

function ShoeListItem({
   shoe: { id, shoe_name, brand, sex, image_url },
   deleteShoe,
}) {
   return (
      <div key={id}>
         <figure>
            <img src={image_url} alt={shoe_name} />
            <h1>{shoe_name}</h1>
            <p>{brand}</p>
            <p>{sex}</p>
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
