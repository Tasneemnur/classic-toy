import { useLoaderData } from "react-router";
import Toy from "../Toy/Toy";
const AllToys = () => {
  const toys = useLoaderData();
  console.log(toys);
  return (
    <div>
      <div className="overflow-x-auto mx-20 my-10">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th>Seller</th>
              <th>Toy Name</th>
              <th>Sub-Category</th>
              <th>Price</th>
              <th>Available Quantity</th>
              <th>Details</th>
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
