import { MdDelete } from "react-icons/md";
import { AiFillEdit } from "react-icons/ai";

const MyToy = ({ myToy }) => {
  const {
    _id,
    toyName,
    photo,
    category,
    price,
    rating,
    quantity,
    description,
  } = myToy;
  return (
    <tr>
      <td>
        <div className="avatar">
          <div className="mask rounded-md w-20 h-20">
            <img src={photo} alt="Avatar Tailwind CSS Component" />
          </div>
        </div>
      </td>
      <td>{toyName}</td>
      <td>{category}</td>
      <td>{price}</td>
      <td>{quantity}</td>
      <td>{rating}</td>
      <td>
       <><button className="text-2xl me-4"><AiFillEdit /></button> <button className="text-2xl text-red-600"><MdDelete /></button></> 
      </td>
      <th></th>
    </tr>
  );
};

export default MyToy;
