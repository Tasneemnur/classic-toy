import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import MyToy from "../MyToy/MyToy";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [myToys, setMyToys] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/toys?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setMyToys(data));
  }, []);
  return <div>
    <div className="overflow-x-auto w-full">
  <table className="table w-full">
  
    <thead>
      <tr>
        <th>Picture</th>
        <th>Toy Name</th>
        <th>Sub-Category</th>
        <th>Price</th>
        <th>Quantity</th>
        <th>Rating</th>
        <th>Description</th>
        <th></th>
        <th></th>
      </tr>
    </thead>
    <tbody>
    {
        myToys.map(myToy => <MyToy key={myToy._id} myToy={myToy}></MyToy> )
    }
    </tbody>
    </table>
  </div>;
  </div>
};

export default MyToys;
