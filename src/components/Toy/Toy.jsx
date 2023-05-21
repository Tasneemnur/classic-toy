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
      <td><Link to={`/details/${_id}`}><div className="badge badge-outline">View Details</div>
      </Link></td>
    </tr>
  );
};

export default Toy;
