import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './Navbar';
import ShoesContainer from './shoes/ShoesContainer';
import UsersContainer from './users/UsersContainer';

function Main() {
   return (
      <Router>
         <Navbar />
         <Switch>
            <Route path="/shoes">
               <ShoesContainer />
            </Route>
            <Route path="/users">
               <UsersContainer />
            </Route>
         </Switch>
      </Router>
   );
}

export default Main;
