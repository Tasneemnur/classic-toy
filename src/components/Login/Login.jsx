
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {
  const {user, login, googleLogin } = useContext(AuthContext);

  const handleLoginWithEmailAndPass = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    login(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser)
        form.reset();
      })
      .catch((error) => {
        console.log(error.message);
        if(error.message === "Firebase: Error (auth/wrong-password)."){
         return alert("Wrong Password")
        }
        if(error.message === "Firebase: Error (auth/user-not-found)."){
          return alert("Wrong Email")
        }
      });
  }
  const handleLoginWithGoogle = () => {
    googleLogin()
    .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser.photoURL);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
 <div className="md:mx-20">
      <div className="hero mt-10 mb-8">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 ">
            <div className="card-body">
            <form onSubmit={handleLoginWithEmailAndPass}>
            <h1 className="text-5xl font-bold text-center mb-4">Login</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  name="email"
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
                  className="input input-bordered"
                  name="password"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn bg-black border-none">Login</button>
              </div>
              </form>
              <p className="text-sm mt-2">New to this Website? Please <Link to="/register" className="text-primary underline">Register</Link></p>
            </div> 
          </div>
        </div>
        <div className="divider w-96 mx-auto font-semibold mb-8">OR</div>
        <div className="w-80 mx-auto"><button onClick={handleLoginWithGoogle} className="btn w-full mx-auto bg-black">Sign-in With Google</button></div>
        </div>

  );
};

export default Login;
