import { Rating } from "@mui/material";
import { useLoaderData } from "react-router-dom";
import { HiOutlineMail } from "react-icons/hi";

const ToyDetails = () => {
  const toy = useLoaderData();
  const {
    photo,
    toyName,
    sellerName,
    sellerEmail,
    price,
    rating,
    quantity,
    description,
  } = toy;
  console.log(toy);
  return (
    <div className="hero min-h-screen px-20 mb-14 mt-6">
      <div className="hero-content flex-col lg:flex-row gap-9">
        <img src={photo} className="w-[485px] rounded-lg h-[485px] shadow-2xl" />
        <div>
          <h1 className="text-4xl font-bold">{toyName}</h1>
          <div className="mt-3 text-xl text-yellow-500 font-bold me-5">
            {sellerName}
          </div>
          <div className="flex items-center mt-2 font-semibold text-gray-500">
            <p className="me-3 text-xl">
              <HiOutlineMail />
            </p>
            <p>{sellerEmail}</p>
          </div>
          <p className="py-6 text-sm text-gray-400">{description}</p>
          <div className="flex items-center">
          <p className="me-10 font-semibold text-gray-500">Price: $ {price}</p>
          <p className="me-10 font-semibold text-gray-500">Available Quantity: {quantity}</p>
          </div>
          <div className="mt-4">
          <Rating name="half-rating" defaultValue={rating} precision={0.5} />
          </div>
          
          
        </div>
      </div>
    </div>
  );
};

export default ToyDetails;
