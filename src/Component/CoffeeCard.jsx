import Swal from "sweetalert2";

const CoffeeCard = ({ coffee }) => {
const handleDelete=_id=>{
    console.log(_id);
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
        //   Swal.fire({
        //     title: "Deleted!",
        //     text: "Your file has been deleted.",
        //     icon: "success"
        //   });
        fetch(`http://localhost:5000/coffee/${_id}`, {
            method: 'DELETE',
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data.deletedCount > 0) {
                Swal.fire(
                    "Deleted!",
                    "Your coffee has been deleted.",
                    "success"
                )};
        })

        

        }
      });
}

    const {_id, name, chef, supplier, taste, photo } = coffee;

    return (
        <div className="card card-side bg-base-100 shadow-xl p-4 flex items-center">
            <figure>
                <img className="w-36 h-36 object-cover rounded-lg" src={photo} alt={name} />
            </figure>
            <div className="flex justify-between w-full px-4">
                <div className="card-body text-lg">
                    <h2><span className="font-semibold">Name:</span> {name}</h2>
                    <h3><span className="font-semibold">Chef:</span> {chef}</h3>
                    <h3><span className="font-semibold">Supplier:</span> {supplier}</h3>
                    <h3><span className="font-semibold">Taste:</span> {taste}</h3>
                </div>
                <div className="flex flex-col space-y-4">
                    <button className="btn btn-primary">View</button>
                    <button className="btn btn-secondary">Edit</button>
                    <button onClick={()=>handleDelete(_id)} className="btn btn-error">Delete</button>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;
