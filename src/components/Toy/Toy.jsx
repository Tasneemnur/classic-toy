import React from "react";

const Toy = ({ toy }) => {
  const { _id, toyName, sellerName, category, quantity, price } = toy;
  return (
    <tr>
      <td className="border-none">{sellerName}</td>
      <td>{toyName}</td>
      <td>{category}</td>
      <td>{price}</td>
      <td>{quantity}</td>
      <td><button className="btn bg-gray-400 hover:bg-yellow-500 border-none">View Details</button></td>
    </tr>
  );
};

export default Toy;
