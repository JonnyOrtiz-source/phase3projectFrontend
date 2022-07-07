import { useState } from 'react';
// import Dropdown from './Dropdown';

function NewUserShoeForm({
   user,
   toggleShowNewUserShoeForm,
   handleAddUserShoe,
}) {
   const [shoe_type, setShoeType] = useState('');
   const [purchase_date, setPurchaseDate] = useState('');
   const [color, setColor] = useState('');
   const [size, setSize] = useState('');
   const [UPC, setUPC] = useState('');

   const handleSubmit = async (e) => {
      e.preventDefault();
      const formData = {
         shoe_type,
         purchase_date,
         color,
         size,
         UPC,
         user_id: user.id,
      };
      handleAddUserShoe(formData);
   };

   return (
      <div>
         <form onSubmit={handleSubmit}>
            {/* <Dropdown
               label="What do we eat?"
               options={options}
               value={value}
               onChange={handleChange}
            />{' '} */}
            <label htmlFor="shoeType">Shoe Type: &nbsp;</label>
            <input
               className="text-black"
               required
               name="shoeType"
               type="text"
               onChange={(e) => setShoeType(e.target.value)}
            />
            <label htmlFor="purchaseDate">Purchase Date: &nbsp;</label>
            <input
               className="text-black"
               required
               name="purchaseDate"
               type="date"
               onChange={(e) => setPurchaseDate(e.target.value)}
            />
            <label htmlFor="color">Color: &nbsp;</label>
            <input
               className="text-black"
               required
               name="color"
               type="text"
               onChange={(e) => setColor(e.target.value)}
            />
            <label htmlFor="size">Size: &nbsp;</label>
            <input
               className="text-black"
               required
               name="size"
               type="text"
               onChange={(e) => setSize(e.target.value)}
            />
            <label htmlFor="UPC">UPC: &nbsp;</label>
            <input
               className="text-black"
               required
               name="UPC"
               type="text"
               onChange={(e) => setUPC(e.target.value)}
            />
            <button onClick={toggleShowNewUserShoeForm}>Cancel</button>{' '}
            &nbsp;&nbsp;
            <button type="submit">Add Shoe</button>
         </form>
      </div>
   );
}

export default NewUserShoeForm;
