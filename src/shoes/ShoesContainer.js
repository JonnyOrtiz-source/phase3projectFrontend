import { useState, useEffect } from 'react';
import { Switch, Route, useHistory, useLocation } from 'react-router-dom';
import ShoesList from './ShoesList';
import NewShoeForm from './NewShoeForm';
import ShoeEditForm from './ShoeEditForm';

function ShoesContainer() {
   const BASE_URL = 'http://localhost:9292';
   const [shoes, setShoes] = useState([]);

   useEffect(() => {
      fetch(`${BASE_URL}/shoes`, {
         method: 'GET',
         headers: {
            'Content-type': 'application/json',
            Accept: 'application/json',
         },
      })
         .then((r) => r.json())
         .then((shoes) => setShoes(shoes))
         .catch((err) => {
            alert(err);
         });
   }, []);

   const history = useHistory();
   const location = useLocation();

   const addShoe = (formData) => {
      fetch(`${BASE_URL}/shoes`, {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
         },
         body: JSON.stringify(formData),
      })
         .then((res) => res.json())
         .then((newShoe) => {
            setShoes(shoes.concat(newShoe));
            history.push(`/shoes/${newShoe.id}`);
         });
   };

   const updateShoe = (id, formData) => {
      fetch(`${BASE_URL}/shoes/${id}`, {
         method: 'PATCH',
         headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
         },
         body: JSON.stringify(formData),
      })
         .then((res) => res.json())
         .then((updatedShoe) => {
            setShoes(
               shoes.map((shoe) =>
                  shoe.id === parseInt(id) ? updatedShoe : shoe
               )
            );
            history.push(`/shoes/${updatedShoe.id}`);
         });
   };

   const deleteShoe = (shoeId) => {
      if (window.confirm('Are you sure you want to delete this shoe?')) {
         setShoes(shoes.filter((shoe) => shoe.id !== parseInt(shoeId)));
         fetch(`${BASE_URL}/shoes/${shoeId}`, {
            method: 'DELETE',
            headers: { Accept: 'application/json' },
         })
            .then((res) => res.json())
            .then((deletedShoe) => {
               console.log('deleted', deletedShoe.name);
               if (location.pathname !== '/shoes') {
                  history.push('/shoes');
               }
            });
      }
   };

   return (
      <div>
         <Switch>
            <Route exact path="/shoes">
               <ShoesList shoes={shoes} deleteShoe={deleteShoe} />
            </Route>
            <Route exact path="/shoes/new">
               <NewShoeForm shoes={shoes} addShoe={addShoe} />
            </Route>
            <Route
               exact
               path="/shoes/:id/edit"
               render={({ match }) => (
                  <ShoeEditForm
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
