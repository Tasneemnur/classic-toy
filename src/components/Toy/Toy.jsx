import { Link } from "react-router-dom";


const Toy = ({ toy }) => {
  const {_id, toyName, sellerName, category, quantity, price } = toy;
  return (
    <tr>
      <td className="border-none">{sellerName}</td>
      <td>{toyName}</td>
      <td>{category}</td>
      <td>{price}</td>
      <td>{quantity}</td>
      <td><Link to={`/details/${_id}`}><button className="btn bg-stone-400 hover:bg-yellow-500 border-none">View Details</button></Link></td>
    </tr>
  );
};

export default Toy;
