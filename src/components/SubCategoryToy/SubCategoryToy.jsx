import { Rating } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const SubCategoryToy = ({ toyCar }) => {
  const { _id,toyName, price, photo, rating } = toyCar;
  return (
    <div className="card w-[353px] bg-base-100 shadow-xl">
      <figure>
        <img
        className="w-[353px] h-80"
          src={photo}
          alt="toy"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title font-semibold">{toyName}</h2>
        <p className="text-gray-600">Price: $ {price}</p>
        <div className="flex items-center">
        <p className="border-3"><Rating name="half-rating" defaultValue={rating} precision={0.5} /></p><p className="text-gray-600">{rating} out of 5</p>
        </div>
        <div className="card-actions ">
            <Link to={`/details/${_id}`}><button className="btn bg-stone-500 border-none">View Details</button></Link>
          
        </div>
      </div>
    </div>
  );
};

export default SubCategoryToy;
