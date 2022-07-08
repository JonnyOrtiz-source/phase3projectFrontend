import { useState } from 'react';

const Dropdown = ({ label, value, options, handleChange }) => {
   return (
      <label>
         {label}
         <select className="text-black" value={value} onChange={handleChange}>
            {options.map((option) => (
               <option value={option.value}>{option.label}</option>
            ))}
         </select>
      </label>
   );
};

function NewUserShoeForm({
   user,
   toggleShowNewUserShoeForm,
   handleAddUserShoe,
   allShoes,
}) {
   const [shoe_type, setShoeType] = useState('');
   const [purchase_date, setPurchaseDate] = useState('');
   const [color, setColor] = useState('');
   const [size, setSize] = useState('');
   const [UPC, setUPC] = useState('');

   const options = allShoes.map((shoe) => {
      return { label: shoe.shoe_name, value: shoe.id };
   });

   const [shoe_id, setShoe_Id] = useState(options[0].shoe_name);

   const handleChange = (e) => {
      setShoe_Id(e.target.value);
   };

   const handleSubmit = async (e) => {
      e.preventDefault();
      const formData = {
         shoe_type,
         purchase_date,
         color,
         size,
         UPC,
         user_id: user.id,
         shoe_id,
      };
      handleAddUserShoe(formData);
   };

   return (
      <div className="font-bold">
         <form onSubmit={handleSubmit}>
            <Dropdown
               label="Select shoe: "
               options={options}
               value={shoe_id}
               handleChange={handleChange}
            />{' '}
            <br />
            <label htmlFor="shoeType">Shoe Type: &nbsp;</label>
            <input
               className="text-black"
               required
               name="shoeType"
               type="text"
               onChange={(e) => setShoeType(e.target.value)}
            />{' '}
            &nbsp; &nbsp;
            <label htmlFor="purchaseDate">Purchase Date: &nbsp;</label>
            <input
               className="text-black"
               required
               name="purchaseDate"
               type="date"
               onChange={(e) => setPurchaseDate(e.target.value)}
            />
            <br />
            <label htmlFor="color">Color: &nbsp;</label>
            <input
               className="text-black"
               required
               name="color"
               type="text"
               onChange={(e) => setColor(e.target.value)}
            />{' '}
            &nbsp; &nbsp;
            <label htmlFor="size">Size: &nbsp;</label>
            <input
               className="text-black"
               required
               name="size"
               type="text"
               onChange={(e) => setSize(e.target.value)}
            />{' '}
            &nbsp; &nbsp;
            <label htmlFor="UPC">UPC: &nbsp;</label>
            <input
               className="text-black"
               required
               name="UPC"
               type="text"
               onChange={(e) => setUPC(e.target.value)}
            />
            <br />
            <button
               onClick={toggleShowNewUserShoeForm}
               className="bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded"
            >
               Cancel
            </button>{' '}
            &nbsp;&nbsp;
            <button
               type="submit"
               className="bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 border-b-4 border-green-700 hover:border-green-500 rounded"
            >
               Add Shoe
            </button>
         </form>
      </div>
   );
}

export default NewUserShoeForm;
