import { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import ShoesList from './ShoesList';
import NewShoeForm from './NewShoeForm';
import ShoeEditForm from './ShoeEditForm';

function ShoesContainer() {
   const BASE_URL = 'http://localhost:9292';
   const [shoes, setShoes] = useState([]);
   const [status, setStatus] = useState(false);

   useEffect(() => {
      fetch(`${BASE_URL}/shoes`, {
         method: 'GET',
         headers: {
            'Content-type': 'application/json',
            Accept: 'application/json',
         },
      })
         .then((r) => r.json())
         .then((shoes) => {
            setShoes(shoes);
            setStatus(true);
         })
         .catch((err) => {
            alert(err);
         });
   }, []);

   const addShoe = (newShoe) => {
      setShoes((shoes) => [...shoes, newShoe]);
   };

   const updateShoe = (updatedShoe) => {
      const updatedShoes = shoes.map((prevShoe) => {
         if (prevShoe.id === updatedShoe.id) {
            return updatedShoe;
         } else {
            return prevShoe;
         }
      });
      setShoes(updatedShoes);
   };

   const deleteShoe = (deletedShoe) => {
      const updatedShoes = shoes.filter((shoe) => shoe.id !== deletedShoe.id);
      setShoes(updatedShoes);
   };

   return (
      <div>
         <Switch>
            {status && (
               <Route exact path="/shoes">
                  <ShoesList
                     BASE_URL={BASE_URL}
                     shoes={shoes}
                     deleteShoe={deleteShoe}
                  />
               </Route>
            )}
            <Route exact path="/shoes/new">
               <NewShoeForm BASE_URL={BASE_URL} addShoe={addShoe} />
            </Route>
            <Route
               exact
               path="/shoes/:id/edit"
               render={({ match }) => (
                  <ShoeEditForm
                     BASE_URL={BASE_URL}
                     shoe={shoes.find(
                        (shoe) => shoe.id === parseInt(match.params.id)
                     )}
                     updateShoe={updateShoe}
                  />
               )}
            />
         </Switch>
      </div>
   );
}

export default ShoesContainer;
