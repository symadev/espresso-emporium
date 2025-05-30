import { useLoaderData } from "react-router-dom";

const Update = () => {
    const coffee = useLoaderData()
    const {_id, name,  details, photo} = coffee;
    const handleUpdateSubmit = (event) => {
      event.preventDefault();
  
      const form = event.target;
      const name = form.name.value;
      const details = form.details.value;
      const photo = form.photo.value;
      const updatedCoffee = { name,  details, photo };
      console.log(updatedCoffee);
  
      fetch(`http://localhost:5000/coffee/${_id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updatedCoffee),
  })
  .then(res => res.json())
  .then(data => {
    if (data.message) {
      console.log('Coffee added:', data);
    } else {
      console.error('Error adding coffee:', data);
    }
  })
  .catch(error => console.error('Error adding coffee:', error));
  
    };
  
    return (
      <form onSubmit={handleUpdateSubmit}>
        <div className="flex justify-center items-center min-h-screen text-white">
          <div className="bg-yellow-700 p-10 rounded-lg shadow-lg max-w-3xl w-full">
            <h2 className="text-2xl font-bold text-center mb-2">Add New Coffee</h2>
            <p className="text-center text-white mb-6">
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
            </p>
  
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center">
                <label className="w-24">Name</label>
                <input type="text" name="name" placeholder="Enter coffee name" defaultValue={name} className="input input-bordered flex-1 bg-white text-black" />
              </div> 
              <div className="flex items-center">
                <label className="w-24">Details</label>
                <input type="text" name="details" placeholder="Enter coffee details" defaultValue={details} className="input input-bordered flex-1 bg-white text-black" />
              </div>
            </div>
  
            <div className="flex items-center mt-4">
              <label className="w-24">Photo</label>
              <input type="url" name="photo" placeholder="Enter photo URL"  defaultValue={ photo} className="input input-bordered flex-1 bg-white text-black" />
            </div>
  
            <button className="btn w-full md:w-50 border-0 bg-white text-black mt-4 hover:bg-yellow-600">Update New Coffee Item</button>
          </div>
        </div>
      </form>
    );
  };
  
  export default Update;
  