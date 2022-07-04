import { Link } from 'react-router-dom';
import ShoeListItem from './ShoeListItem';

function ShoesList({ shoes, deleteShoe }) {
   const shoesEl = shoes.map((shoe) => (
      <ShoeListItem key={shoe.id} shoe={shoe} deleteShoe={deleteShoe} />
   ));
   return (
      <>
         <div>
            <Link to="/shoes">👣 All Shoes</Link>&nbsp; &nbsp; &nbsp; &nbsp;
            <Link to="/shoes/new">+ New Shoe</Link>
         </div>
         <div>{shoesEl}</div>
      </>
   );
}

export default ShoesList;
