import { updateProfile } from "firebase/auth";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProvider";

const Registration = () => {
  const { createUser} = useContext(AuthContext);
  const handleCreateUser = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const name = form.name.value;
    const photo = form.photo.value;

    if (password.length < 6) {
      return Swal.fire({
        icon: 'error',
        title: 'Password must be at least 6 characters long'
      })
    }

    createUser(email, password)
      .then((result) => {
        const registerUser = result.user;
        console.log(registerUser);
        form.reset();
        updateUserData(registerUser, name, photo);
      })
      .catch((error) => {
        console.error(error);
      });

    const updateUserData = (user, name, photo) => {
      updateProfile(user, {
        displayName: name,
        photoURL: photo,
      })
        .then(() => {
          console.log("user name and URL updated");
        })
        .catch((error) => {
         console.log(error)
        });
    };
  }
  return (
    <div className="hero my-12">
      <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100">
        <div className="card-body">
          <form onSubmit={handleCreateUser}>
          <h1 className="text-5xl font-bold text-center mb-4">Register</h1>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="name"
              name="name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              name="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              name="password"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              placeholder="photo url"
              name="photo"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6">
          <button type="submit" className="btn bg-black border-none">Register</button>
          </div>
          </form>
          <p className="text-sm mt-2">
            Already have an account? Please <Link to="/login" className="text-primary underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Registration;
