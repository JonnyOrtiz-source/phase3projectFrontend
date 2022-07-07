import { useState } from 'react';

function Dropdown() {
// { label, value, options, onChange }
   //    const options = [
   //       { label: 'Fruit', value: 'fruit' },
   //       { label: 'Vegetable', value: 'vegetable' },
   //       { label: 'Meat', value: 'meat' },
   //    ];

   //    const [value, setValue] = useState('fruit');

   const handleChange = (event) => {
      //   setValue(event.target.value);
   };

   return (
      <label>
         {/* {label}
         <select value={value} onChange={onChange}>
            {options.map((option) => (
               <option value={option.value}>{option.label}</option>
            ))}
         </select> */}
      </label>
   );
}

export default Dropdown;
