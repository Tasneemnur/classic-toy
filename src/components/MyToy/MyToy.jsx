import { MdDelete } from "react-icons/md";
import { AiFillEdit } from "react-icons/ai";
import Swal from "sweetalert2";

const MyToy = ({ myToy, myToys, setMyToys }) => {
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
  const handleDelete = (id) => {
    Swal.fire({
        text: "Do you really want to delete this Toy?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Ok'
      }).then((result) => {
        if (result.isConfirmed) {
        
        fetch(`http://localhost:5000/toys/${id}`, {
        method: 'DELETE'
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
        if(data.deletedCount > 0){
            Swal.fire(
                'Deleted!',
                'Your Toy has been deleted.',
                'success'
              )
              const remaining = myToys.filter(toy => toy._id !== id)
              setMyToys(remaining)
        }
    })

        }
      })

  }
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
       <><button className="text-2xl me-4"><AiFillEdit /></button> <button onClick={() => handleDelete(_id)} className="text-2xl text-red-600"><MdDelete /></button></> 
      </td>
      <th></th>
    </tr>
  );
};

export default MyToy;
