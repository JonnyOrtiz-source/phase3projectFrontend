import { useHistory } from 'react-router-dom';
import { useForm } from '../hooks/useForm';

function NewShoeForm({ BASE_URL, addShoe }) {
   const initialData = {
      shoe_name: '',
      brand: '',
      sex: '',
      image_url: 'https://jallieortiz.com/media/Benji.jpeg',
   };

   const { formData, setFormData, handleChange } = useForm(initialData);

   const history = useHistory();

   const handleSubmit = async (e) => {
      e.preventDefault();

      const configObj = {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
         },
         body: JSON.stringify({ ...formData }),
      };

      fetch(`${BASE_URL}/shoes`, configObj)
         .then((r) => r.json())
         .then((newShoe) => {
            addShoe(newShoe);
            setFormData({
               shoe_name: '',
               brand: '',
               sex: '',
               image_url: '',
            });
            history.push(`/shoes/`);
         });
   };

   return (
      <div>
         <p className="text-2xl font-bold underline">New Shoe</p>
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
               Add Shoe
            </button>
         </form>
      </div>
   );
}

export default NewShoeForm;
