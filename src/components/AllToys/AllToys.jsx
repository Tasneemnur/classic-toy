import { useState } from "react";
import { useLoaderData } from "react-router";
import useTitle from "../../hooks/useTitle";
import Toy from "../Toy/Toy";
const AllToys = () => {
  useTitle("All Toys")
  const loadedToys = useLoaderData();
  const [toys,setToys] = useState(loadedToys);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.toyName.value;
    const matchedToy = toys.filter(toy => toy.toyName === name)
    setToys(matchedToy);
  }
  console.log(toys);
  return (
    <div>
      <div className="mx-20 my-10">
        <div className="mb-10 mx-8">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Toy name"
              name="toyName"
              className="input input-bordered w-72"
              required
            />

            <input
              type="submit"
              className="btn ms-3 bg-yellow-500 border-none"
              value="search"
            />
          </form>
        </div>
        <table className="table text-center">
          <thead className=" bg-yellow-400">
            <tr>
              <th className="bg-stone-500 text-white">Seller</th>
              <th className="bg-stone-500 text-white">Toy Name</th>
              <th className="bg-stone-500 text-white">Sub-Category</th>
              <th className="bg-stone-500 text-white">Price</th>
              <th className="bg-stone-500 text-white">Available Quantity</th>
              <th className="bg-stone-500 text-white">Details</th>
            </tr>
          </thead>
          <tbody>
            {toys.map((toy) => (
              <Toy key={toy._id} toy={toy}></Toy>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllToys;
