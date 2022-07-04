import { NavLink } from 'react-router-dom';

function Navbar() {
   return (
      <div className="bg-blue-100 text-3xl text-black font-bold">
         <nav>
            <NavLink className="inline-grid grid-cols-2 gap-4" to="/shoes">
               Shoes
            </NavLink>
            <NavLink to="/users">Users</NavLink>
         </nav>
      </div>
   );
}

export default Navbar;
