import logo from "../../assets/logo.jpeg";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Header = () => {
  const {user, logout} = useContext(AuthContext);
  const handleLogout = () => {
    logout()
      .then(() => {
        console.log("logout successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="md:mx-20">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 space-y-4 text-gray-500"
            >
              <Link to="/">Home</Link>
              <Link to="/allToys">All Toys</Link>
              <Link to="/myToys">My Toys</Link>
              <Link to="/addToy">Add A Toy</Link>
              <Link to="/blogs">Blogs</Link>
            </ul>
          </div>
          <img src={logo} className="h-20 w-20" alt="" />
          <h1 className="text-xl font-bold">Classic Toy</h1>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal space-x-8 text-gray-500">
            <Link to="/">Home</Link>
            <Link to="/allToys">All Toys</Link>
            {
              user?.email ?
               <>
              <Link to="/myToys">My Toys</Link>
              </> : ""
            }
            
            <Link to="/addToy">Add A Toy</Link>
            <Link to="/blogs">Blogs</Link>
          </ul>
        </div>
        {
          user ?
            <div className="mt-3 md:mt-0 navbar-end">
                <img
                  src={user.photoURL}
                  alt=""
                  className="rounded-md h-12 w-12"
                  title={user.displayName}
                />
                <button
                  onClick={handleLogout}
                  className="ms-4 btn bg-black"
                >
                  Log out
                </button>
              </div> : <div className="navbar-end">
          <Link to="/login" className="btn bg-black">Login</Link>
        </div>
        }
        
      </div>
    </div>
  );
};

export default Header;
