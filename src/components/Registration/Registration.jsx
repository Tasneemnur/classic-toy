import { Link } from "react-router-dom";

const Registration = () => {
  return (
    <div className="hero my-12">
      <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100">
        <div className="card-body">
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
            <button className="btn btn-primary">Register</button>
          </div>
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
