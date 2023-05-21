import { Link, useRouteError } from "react-router-dom";
import useTitle from "../../hooks/useTitle";
import img from "../../images/error.jpg"

const ErrorPage = () => {
    useTitle("Error")
    const { error, status } = useRouteError();
    return (
        <div className="hero min-h-screen"
        style={{ backgroundImage: `url(${img})`}}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body items-center text-center">
            <h1 className="font-extrabold card-title text-5xl ">Error<span className="text-yellow-500"> {status || 404} </span></h1>
            <p className="my-4 font-semibold ">{error?.message}</p>
            <Link to="/"><button className="bg-yellow-500 btn border-none font-bold">Back to Homepage</button></Link>
            </div>
        </div>
        </div>
    );
};

export default ErrorPage;