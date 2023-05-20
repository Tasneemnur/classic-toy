import { useLoaderData } from "react-router";
import Toy from "../Toy/Toy";
const AllToys = () => {
  const toys = useLoaderData();
  console.log(toys);
  return (
    <div>
      <div className="mx-20 my-10">
        <table className="table text-center mx-auto">
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
