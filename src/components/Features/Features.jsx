import {BsFillTrophyFill, BsFillTagFill} from "react-icons/bs"
import {CiDeliveryTruck} from "react-icons/ci"
import {MdEventAvailable} from "react-icons/md"
import one from "../../images/one.jpg"

const Features = () => {
    return (
        <div className="md:mx-20 mx-3">
            <h1 className="text-3xl font-bold text-center mt-20">OUR<span className="text-yellow-500 ms-5">FEATURES</span></h1>
            <p className="text-center mt-2 text-gray-600"> We try to give you the best toy cars so that your kids keep smiling.</p>
            <div className="grid md:grid-cols-4 grid-cols-2 gap-6 my-16">
                <div className="card w-full bg-base-100 shadow-xl items-center justify-center p-5"><p className="text-yellow-500 mx-auto text-5xl"><BsFillTrophyFill/></p>
                <h1 className="text-center mt-5 text-xl font-bold">First Class Services</h1>
                <p className=" text-center mt-2 mb-10 text-gray-500">We provide first class services to our customers.</p>
                </div>
                <div className="row-span-2 col-span-2 px-28 justify-center items-center md:flex hidden">
                    <img  src={one} alt=""/>
                </div>
                <div className="card w-full bg-base-100 shadow-xl items-center justify-center p-5"><p className="text-yellow-500 mx-auto text-5xl"><BsFillTagFill/></p>
                <h1 className="text-center mt-5 text-xl font-bold">Quality at Minimum Expense</h1>
                <p className=" text-center mt-2 mb-10 text-gray-500">We give best toy in cheap price.</p>
                </div>
                <div className="card w-full bg-base-100 shadow-xl items-center justify-center p-5"><p className="text-yellow-500 mx-auto text-6xl"><CiDeliveryTruck/></p>
                <h1 className="text-center mt-4 text-xl font-bold">Free Delivery Service</h1>
                <p className=" text-center mt-2 mb-10 text-gray-500">Get free delivery on at least four orders from our site.</p>
                </div>
                <div className="card w-full bg-base-100 shadow-xl items-center justify-center p-5"><p className="text-yellow-500 mx-auto text-5xl"><MdEventAvailable/></p>
                <h1 className="text-center mt-5 text-xl font-bold">24/7 Availability</h1>
                <p className=" text-center mt-2 mb-10 text-gray-500">Our members are 24/7 available to take your orders from the site.</p>
                </div>
            </div>


            
        </div>
    );
};

export default Features;