import React, { useState } from 'react';

function NewShoeForm({ addShoe }) {
   const [shoe_name, setShoe_Name] = useState('');
   const [brand, setBrand] = useState('');
   const [sex, setSex] = useState('');
   const [image_url, setImageUrl] = useState(
      'https://res.cloudinary.com/dnocv6uwb/image/upload/v1609370267/dakota-and-lennon-square-compressed_hoenfo.jpg'
   );

   const handleSubmit = async (e) => {
      e.preventDefault();

      addShoe({
         shoe_name,
         brand,
         sex,
         image_url,
      });
   };

   return (
      <div>
         <h1>New Shoe</h1>
         <form onSubmit={handleSubmit}>
            <fieldset>
               <label htmlFor="shoe_name">Shoe Name: &nbsp;</label>
               <input
                  type="text"
                  name="shoe_name"
                  id="shoe_name"
                  value={shoe_name}
                  onChange={(e) => setShoe_Name(e.target.value)}
               />
            </fieldset>
            <fieldset>
               <label htmlFor="brand">Brand: &nbsp;</label>
               <input
                  type="text"
                  name="brand"
                  id="brand"
                  value={brand}
                  onChange={(e) => setBrand(e.target.value)}
               />
            </fieldset>
            <fieldset>
               <label htmlFor="sex">Sex: &nbsp;</label>
               <input
                  type="text"
                  name="sex"
                  id="sex"
                  value={sex}
                  onChange={(e) => setSex(e.target.value)}
               />
            </fieldset>
            <fieldset>
               <label htmlFor="image_url">Image URL: &nbsp;</label>
               <input
                  type="text"
                  name="image_url"
                  id="image_url"
                  value={image_url}
                  onChange={(e) => setImageUrl(e.target.value)}
               />
            </fieldset>
            <button type="submit">Add Shoe</button>
         </form>
      </div>
   );
}

export default NewShoeForm;
