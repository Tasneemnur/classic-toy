import { MdDelete } from "react-icons/md";
import { AiFillEdit } from "react-icons/ai";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const MyToy = ({ myToy, myToys, setMyToys }) => {
  const { _id, toyName, photo, category, price, rating, quantity } = myToy;
  const handleDelete = (id) => {
    Swal.fire({
      text: "Do you really want to delete this Toy?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://assignment-11-toy-car-zone-server.vercel.app/toys/${id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your Toy has been deleted.", "success");
              const remaining = myToys.filter((toy) => toy._id !== id);
              setMyToys(remaining);
            }
          });
      }
    });
  };

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
        <Link to={`/details/${_id}`}>
          <div className="badge badge-outline">View Details</div>
        </Link>
      </td>
      <td>
        <>
          <Link to={`/update/${_id}`}>
            <button className="text-2xl me-4">
              <AiFillEdit />
            </button>
          </Link>
          <button
            onClick={() => handleDelete(_id)}
            className="text-2xl text-red-600"
          >
            <MdDelete />
          </button>
        </>
      </td>
      <th></th>
    </tr>
  );
};

export default MyToy;
