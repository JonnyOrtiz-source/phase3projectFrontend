import { useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useForm } from '../hooks/useForm';

function ShoeEditForm({ BASE_URL, shoe = {}, updateShoe }) {
   const initialData = {
      first_name: '',
      last_name: '',
      username: '',
      password: '',
   };

   const { formData, setFormData, handleChange } = useForm(initialData);

   const history = useHistory();
   const { id } = useParams();

   useEffect(() => {
      fetch(`${BASE_URL}/shoes/${id}`)
         .then((r) => r.json())
         .then((shoe) => setFormData(shoe));
   }, [id, BASE_URL, setFormData]);

   const handleSubmit = (e) => {
      e.preventDefault();
      const configObj = {
         method: 'PATCH',
         headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
         },
         body: JSON.stringify(formData),
      };

      fetch(`${BASE_URL}/shoes/${id}`, configObj)
         .then((r) => r.json())
         .then((updatedShoe) => {
            updateShoe(updatedShoe);
            history.push(`/shoes`);
         });
   };

   return (
      <>
         <h1 className="text-2xl font-bold underline">
            Edit Shoe: {shoe.shoe_name}
         </h1>
         <form onSubmit={handleSubmit}>
            <fieldset className="p-4">
               <label htmlFor="shoe_name">Shoe Name: &nbsp;</label>
               <input
                  className="text-black"
                  type="text"
                  name="shoe_name"
                  id="shoe_name"
                  value={formData.shoe_name}
                  onChange={handleChange}
               />
            </fieldset>
            <fieldset className="p-4">
               <label htmlFor="brand">Brand: &nbsp;</label>
               <input
                  className="text-black"
                  type="text"
                  name="brand"
                  id="brand"
                  value={formData.brand}
                  onChange={handleChange}
               />
            </fieldset>
            <fieldset className="p-4">
               <label htmlFor="sex">Sex: &nbsp;</label>
               <input
                  className="text-black"
                  type="text"
                  name="sex"
                  id="sex"
                  value={formData.sex}
                  onChange={handleChange}
               />
            </fieldset>
            <fieldset className="p-4">
               <label htmlFor="image_url">Image URL: &nbsp;</label>
               <input
                  className="text-black"
                  type="text"
                  name="image_url"
                  id="image_url"
                  value={formData.image_url}
                  onChange={handleChange}
               />
            </fieldset>
            <button
               className="bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 border-b-4 border-green-700 hover:border-green-500 rounded"
               type="submit"
            >
               Update Shoe
            </button>
         </form>
      </>
   );
}

export default ShoeEditForm;
