import { NavLink } from 'react-router-dom';

function Navbar() {
   return (
      <div>
         <nav>
            <NavLink to="/shoes">Shoes</NavLink>
            <NavLink to="/users">Users</NavLink>
         </nav>
      </div>
   );
}

export default Navbar;
