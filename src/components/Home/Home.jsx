
import banner2 from "../../assets/banner2.jpeg";
import useTitle from "../../hooks/useTitle";
import Category from "../Category/Category";
import Clients from "../Clients/Clients";
import Features from "../Features/Features";
import Gallery from "../Gallery/Gallery";

const Home = () => {
  useTitle("Home")
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{ backgroundImage: `url(${banner2})` }}
      >
        <div className="hero-overlay bg-opacity-50"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">
              Get the Best Toy For{" "}
              <span className="text-yellow-400">Your Kid</span>{" "}
            </h1>
            <p className="mb-5">
              This Website provide you the best collection of toy cars. You can
              easily purchase different types of toy cars for kids from this website.
            </p>
            <button className="btn bg-white text-black hover:text-white">Get Started</button>
          </div>
        </div>
      </div>
      <div className="md:mx-20">
      <Gallery></Gallery>
      <Category></Category>
      </div>
      <div>
      <Clients></Clients>
      <Features></Features>
      </div>
      
    </div>
  );
};

export default Home;
