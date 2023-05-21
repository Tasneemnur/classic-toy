import { useContext, useEffect, useState } from "react";
import useTitle from "../../hooks/useTitle";
import { AuthContext } from "../../providers/AuthProvider";
import MyToy from "../MyToy/MyToy";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  useTitle("My Toys")
  const [myToys, setMyToys] = useState([]);
  useEffect(() => {
    fetch(`https://assignment-11-toy-car-zone-server-tasneemnur.vercel.app/toys?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setMyToys(data));
  }, [user]);
  return (
    <div className="mx-20 my-12">
      <div className="text-right mx-32 mb-10">
      <select className="select select-bordered max-w-xs text-center">
        <option>Ascending</option>
        <option>Descending</option>
      </select>
      </div>
      <div className="w-full">
        <table className="table text-center mx-auto">
          <thead>
            <tr>
              <th>Picture</th>
              <th>Toy Name</th>
              <th>Sub-Category</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Rating</th>
              <th>Details</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {myToys.map((myToy) => (
              <MyToy
                key={myToy._id}
                myToy={myToy}
                myToys={myToys}
                setMyToys={setMyToys}
              ></MyToy>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyToys;
