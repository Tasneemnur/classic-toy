
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const Update = () => {
    const loadedToy = useLoaderData();
    const {_id, price, quantity, description} = loadedToy;

    const handleUpdate = (event) => {
        event.preventDefault();
    const form = event.target;
    const price = form.price.value;
    const quantity = form.quantity.value;
    const description = form.description.value;
    const toy = {price, quantity, description}

    fetch(`http://localhost:5000/toys/${_id}`, {
        method: "PUT",
        headers: {
            'content-type': "application/json"
        },
        body: JSON.stringify(toy)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
        if (data.modifiedCount > 0) {
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Toy Information Updated Successfully',
                showConfirmButton: false,
                timer: 1500
              })
        }
    })
    }
    return (
        <div className='mb-24'>
        <h1 className="text-3xl text-center font-bold mt-10 mb-3">
          Update <span className="text-yellow-500">Toy information</span>
        </h1>
        <hr className="w-[335px] mx-auto mb-10 bg-stone-400 h-1" />
        <form onSubmit={handleUpdate} className="w-2/4 mx-auto">
          <div className="grid grid-cols-2 gap-x-8 gap-y-4">
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                type="text"
                placeholder="price"
                name="price"
                className="input input-bordered w-full max-w-xs"
                defaultValue={price}
                required
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Available Quantity</span>
              </label>
              <input
                type="text"
                placeholder="quantity"
                name="quantity"
                className="input input-bordered w-full max-w-xs"
                defaultValue={quantity}
                required
              />
            </div>
            <div className="form-control w-full  col-span-2">
              <label className="label">
                <span className="label-text">Detail Description</span>
              </label>
              <textarea
                className="textarea textarea-bordered h-24"
                name="description"
                placeholder="detail description"
                defaultValue={description}
                required
              ></textarea>
            </div>
            <div className="form-control mt-6 w-full col-span-2">
              <input
                className="btn bg-yellow-500 border-none hover:bg-yellow-600"
                type="submit"
                value="Add"
              />
            </div>
          </div>
        </form>
      </div>
    );
};

export default Update;