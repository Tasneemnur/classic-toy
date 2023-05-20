import one from"../../images/toy4.jpg"
import two from"../../images/t2.jpg"
import three from"../../images/t3.jpeg"
import four from"../../images/t5.jpg"
import five from"../../images/truck4.jpg"
import six from"../../images/t6.jpeg"
import seven from"../../images/t7.jpeg"
import eight from"../../images/police3.jpg"
import nine from"../../images/t9.jpeg"

const Gallery = () => {
    return (
        <div className="mx-3 md:mx-0">
            <h1 className="text-3xl font-bold text-center mt-16">O U R <span className="text-yellow-500 ms-5">  G A L L E R Y</span></h1>
            <p className="text-center mt-2 text-gray-600">This is the gallery section where we show you all the best collection of kids toy cars.</p>
            <div className="grid md:grid-cols-4 grid-cols-2 gap-6 my-12">
                <div className="bg-base-100 shadow-xl p-10">
                    <img src={one} alt="" />
                </div>
                <div className="bg-base-100 shadow-xl px-10 pt-20">
                    <img src={two}  alt="" />
                </div>
                <div className="bg-base-100 shadow-xl px-10 pt-16 ">
                    <img src={three} alt="" />
                </div>
                {/* <div className=" bg-base-100 shadow-xl p-10">
                    <img src={four} className="w-80 h-80" alt="" />
                </div> */}
                <div className="bg-base-100 shadow-xl px-10 md:pt-7 py-7">
                    <img src={five} className="" alt="" />
                </div>
                <div className="bg-base-100 shadow-xl px-10 md:py-12 pt-10">
                    <img src={six}  alt=""  />
                </div>
                <div className="bg-base-100 shadow-xl px-10 md:pt-10 py-10 md:pb-0">
                    <img src={seven} className="w-full" alt="" />
                </div>
                <div className="bg-base-100 shadow-xl p-10">
                    <img src={eight} className="w-full" alt="" />
                </div>
                <div className="bg-base-100 shadow-xl px-10 py-16 md:pt-24">
                    <img src={nine} className="w-full"  alt="" />
                </div>
            </div>
        </div>
    );
};

export default Gallery;