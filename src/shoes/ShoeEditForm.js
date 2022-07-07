import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function ShoeEditForm({ shoe = {}, updateShoe }) {
   const [shoe_name, setShoe_Name] = useState(shoe.shoe_name);
   const [brand, setBrand] = useState(shoe.brand);
   const [sex, setSex] = useState(shoe.sex);
   const [image_url, setImageUrl] = useState(shoe.image_url);
   const { id } = useParams();

   useEffect(() => {
      setShoe_Name(shoe.shoe_name);
      setBrand(shoe.brand);
      setSex(shoe.sex);
      setImageUrl(shoe.image_url);
   }, [shoe]);

   const handleSubmit = (e) => {
      e.preventDefault();

      updateShoe(id, {
         shoe_name,
         brand,
         sex,
         image_url,
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
                  value={shoe_name}
                  onChange={(e) => setShoe_Name(e.target.value)}
               />
            </fieldset>
            <fieldset className="p-4">
               <label htmlFor="brand">Brand: &nbsp;</label>
               <input
                  className="text-black"
                  type="text"
                  name="brand"
                  id="brand"
                  value={brand}
                  onChange={(e) => setBrand(e.target.value)}
               />
            </fieldset>
            <fieldset className="p-4">
               <label htmlFor="sex">Sex: &nbsp;</label>
               <input
                  className="text-black"
                  type="text"
                  name="sex"
                  id="sex"
                  value={sex}
                  onChange={(e) => setSex(e.target.value)}
               />
            </fieldset>
            <fieldset className="p-4">
               <label htmlFor="image_url">Image URL: &nbsp;</label>
               <input
                  className="text-black"
                  type="text"
                  name="image_url"
                  id="image_url"
                  value={image_url}
                  onChange={(e) => setImageUrl(e.target.value)}
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
