import { FcGoogle} from "react-icons/fc";
import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import useTitle from "../../hooks/useTitle";

const Login = () => {
  const { login, googleLogin } = useContext(AuthContext);
  useTitle("Login")
  const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'

  const handleLoginWithEmailAndPass = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    login(email, password)
      .then((result) => {
        const loggedUser = result.user;
        if(loggedUser){
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Login Successfully',
            showConfirmButton: false,
            timer: 1500
          })
        }
        console.log(loggedUser)
        form.reset();
        navigate(from, {replace:true})
      })
      .catch((error) => {
        console.log(error.message);
        if(error.message === "Firebase: Error (auth/wrong-password)."){
         return Swal.fire({
          icon: 'error',
          title: 'Wrong Password'
        })
        }
        if(error.message === "Firebase: Error (auth/user-not-found)."){
          return Swal.fire({
            icon: 'error',
            title: 'Wrong Email'
          })
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
        <div className="w-80 mx-auto"><button onClick={handleLoginWithGoogle} className="btn w-full mx-auto bg-black "><FcGoogle className="me-4 text-xl"/>Sign-in With Google</button></div>
        </div>

  );
};

export default Login;
