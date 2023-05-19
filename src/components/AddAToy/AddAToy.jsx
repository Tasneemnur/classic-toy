import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const AddAToy = () => {
  const { user } = useContext(AuthContext);
  return (
    <form className="w-2/4 mx-auto ">
      <div className="grid grid-cols-2 gap-x-8 gap-y-4">
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Toy Name</span>
          </label>
          <input
            type="text"
            placeholder="name"
            name="toyName"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Picture URL</span>
          </label>
          <input
            type="text"
            placeholder="photo url"
            name="photo"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Seller Name</span>
          </label>
          <input
            type="text"
            placeholder="seller name"
            name="SellerName"
            defaultValue={user?.displayName}
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Seller Email</span>
          </label>
          <input
            type="email"
            placeholder="seller email"
            name="sellerEmail"
            defaultValue={user?.email}
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Sub Category</span>
          </label>
          <select className="select select-bordered" name="category">
            <option>Sports Car</option>
            <option>Truck</option>
            <option>Mini Police Car</option>
          </select>
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <input
            type="text"
            placeholder="price"
            name="price"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Rating</span>
          </label>
          <input
            type="text"
            placeholder="rating"
            name="rating"
            className="input input-bordered w-full max-w-xs"
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
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Detail Description</span>
          </label>
          <textarea
            className="textarea textarea-bordered h-24"
            name="description"
            placeholder="detail description"
          ></textarea>
        </div>
      </div>
    </form>
  );
};

export default AddAToy;
