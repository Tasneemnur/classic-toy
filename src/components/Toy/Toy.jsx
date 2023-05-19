import React from "react";

const Toy = ({ toy }) => {
  const { _id, toyName, sellerName, category, quantity, price } = toy;
  return (
    <tr>
      <td>{sellerName}</td>
      <td>{toyName}</td>
      <td>{category}</td>
      <td>{price}</td>
      <td>{quantity}</td>
      <td><button className="btn bg-yellow-500 border-none hover:bg-yellow-600">View Details</button></td>
    </tr>
  );
};

export default Toy;
