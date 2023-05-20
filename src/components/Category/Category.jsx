import { useEffect, useState } from "react";
import "react-tabs/style/react-tabs.css";
import SubCategoryToy from "../SubCategoryToy/SubCategoryToy";

const Category = () => {
  const [toys, setToys] = useState([]);
  const [activeTab, setActiveTab] = useState("Sports Car");

  useEffect(() => {
    fetch(`http://localhost:5000/categories/${activeTab}`)
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, [activeTab]);

  const handleClick = (tab) => {
    setActiveTab(tab);
  };
  return (
    <div className="md:mx-0 mx-3">
      <h1 className="text-3xl font-bold text-center mt-20">SHOP<span className="ms-5">BY</span><span className="text-yellow-500 ms-5">CATEGORY</span></h1>
            <p className="text-center mt-2 text-gray-600">There are three different category of kids toy cars. Purchase according to your choice. </p>
      <div className="text-center my-10">
        <button
          onClick={() => handleClick("Sports Car")}
          className={`${
            activeTab == "Sports Car" ? "bg-yellow-500" : "bg-stone-500"
          } border-stone-600 border-e-2 text-white font-bold px-5 py-3`}
        >
          Sports Car
        </button>
        <button
          onClick={() => handleClick("Truck")}
          className={`${
            activeTab == "Truck" ? "bg-yellow-500" : "bg-stone-500"
          } border-stone-600 border-e-2  text-white font-bold px-5 py-3`}
        >
          Truck
        </button>
        <button
          onClick={() => handleClick("Mini Police Car")}
          className={`${
            activeTab == "Mini Police Car" ? "bg-yellow-500" : "bg-stone-500"
          } text-white font-bold px-5 py-3`}
        >
          Mini Police Car
        </button>
      </div>
     <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
      {
        toys.map(toyCar => <SubCategoryToy key={toyCar._id} toyCar={toyCar}></SubCategoryToy>)
      }
     </div>
    </div>
  );
};

export default Category;
