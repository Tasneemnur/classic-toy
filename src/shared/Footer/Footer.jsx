import React, { useContext } from "react";
import logo from "../../assets/logo.jpeg";
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Footer = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="bg-black">
      <div className="md:mx-20 mx-6">
        <footer className=" text-white mt-5 py-5">
          <div className="grid md:grid-cols-5 grid-cols-2 gap-4">
            <div className="flex items-center justify-center">
              <img src={logo} className="h-16 w-16 rounded-full me-4" alt="" />
              <h1 className="text-xl font-extrabold">Classic Toy</h1>
            </div>
            <div className="py-4">
              <h5 className="text-yellow-500 text-xl font-bold mb-4">
                Look Around
              </h5>
              <ul className="menu menu-vertical">
                <Link to="/">Home</Link>
                <Link to="/allToys">All Toys</Link>
                {user?.email ? (
                  <>
                    <Link to="/myToys">My Toys</Link>
                  </>
                ) : (
                  ""
                )}

                <Link to="/addToy">Add A Toy</Link>
                <Link to="/blogs">Blogs</Link>
              </ul>
            </div>

            <div className="py-4 col-span-2">
              <h5 className="text-yellow-500 text-xl font-bold mb-4">
                Get Notification
              </h5>
              <p className="mb-3">
                Give your email so that you get notification every time any new
                toys arrived in the website.
              </p>
              <form>
                <div className="flex">
                  <input
                    className="form-control me-2 px-2"
                    type="email"
                    placeholder="Your Email Address"
                    aria-label="email"
                  />
                  <div>
                    <button className="bg-yellow-500 border-0 btn" type="email">
                      Subscribe
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div className="py-4">
              <h5 className="text-yellow-500 text-xl font-bold mb-4">
                Get in Touch
              </h5>
              <p className="mb-2">2/A Mirpur,10 no Road, Dhaka</p>
              <p>+88 01800000000</p>
              <p className="mb-2">+88 01700000000</p>
              <p>toys@gmail.com</p>
              <div className="flex space-x-6 mt-5">
                <button>
                  <BsFacebook />
                </button>
                <button>
                  <BsInstagram />
                </button>
                <button>
                  <BsLinkedin />
                </button>
                <button>
                  <BsTwitter />
                </button>
              </div>
            </div>
          </div>
          <p className="text-center md:mt-0 mt-3">
            Classic Toy &copy; Copyright 2023{" "}
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
