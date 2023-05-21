import bg from "../../images/3rd.jpeg"
import c1 from "../../images/c1.png"
import c2 from "../../images/c2.png"
import c3 from "../../images/c3.png"
import c4 from "../../images/c4.jpeg"
const Clients = () => {
  return (
    <div>
        <h1 className="text-3xl font-bold text-center mt-24">OUR<span className="text-yellow-500 ms-5">CLIENTS</span></h1>
            <p className="text-center mt-2 text-gray-600">These are some of the renowned clients of us to whom we supply our toys.</p>
      <div
        className="hero min-h-min mt-12"
        style={{
          backgroundImage: `url(${bg})`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
       <div className="mx-20 grid grid-cols-2 md:grid-cols-4 gap-10 p-20">
        <div className="card glass w-48 shadow-xl p-6">
            <img className="w-full rounded-full" src={c1} alt="" />
        </div>
        <div className="card w-48 glass shadow-xl p-6">
        <img className="w-full rounded-full" src={c2} alt="" />
        </div>
        <div className="card w-48 glass shadow-xl p-6">
        <img className=" w-full rounded-full" src={c3} alt="" />
        </div>
        <div className="card w-48 glass shadow-xl p-6">
        <img className="w-full rounded-full" src={c4} alt="" />
        </div>
       </div>
      </div>
    </div>
  );
};

export default Clients;
