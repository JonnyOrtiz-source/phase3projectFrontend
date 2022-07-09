import { Link } from 'react-router-dom';
import ShoeListItem from './ShoeListItem';

function ShoesList({ BASE_URL, shoes, deleteShoe }) {
   const shoesEl = shoes.map((shoe) => (
      <ShoeListItem
         BASE_URL={BASE_URL}
         key={shoe.id}
         shoe={shoe}
         deleteShoe={deleteShoe}
      />
   ));
   return (
      <div>
         <div className="text-2xl font-bold">
            <Link
               className="inline-grid grid-cols-2 gap-60 underline"
               to="/shoes"
            >
               👣 All Shoes
            </Link>
            <Link to="/shoes/new">|➕ Add Shoe|</Link>
         </div>
         <div className="inline-grid grid-cols-3 gap-4">{shoesEl}</div>
      </div>
   );
}

export default ShoesList;
