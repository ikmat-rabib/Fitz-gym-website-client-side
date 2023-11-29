import { FaStar } from "react-icons/fa6";
import { Link } from "react-router-dom";


const PlansCard = ({ plan }) => {

    const { name, description, classes, price, facilities } = plan

    const allClasses = classes.join(', ');
    const allFacilities = facilities.join(', ');

    return (
        <div className="card glass shadow-xl">
            <div className="card-body p-0 items-center  text-white">
                {/* <h2 className="card-title text-5xl bg-[#219bff] my-5">{name}</h2>
                <p className="text-slate-300">{description}</p> */}
                <div className="w-full text-center relative rounded-t-2xl space-y-5 bg-[#0167BB] py-8">
                    <h2 className=" text-5xl ">{name}</h2>
                    <p className="text-slate-100">{description}</p>
                    {
                        (name === "Diamond") ?
                            <div className="absolute -top-5 right-4 p-2  rounded-es-badge bg-red-700">
                                <p className=" text-3xl animate-pulse"><FaStar/><FaStar/><FaStar/></p>
                            </div> : ""
                    }
                    {
                        (name === "Gold") ?
                            <div className="absolute -top-5 right-4 p-2 rounded-es-badge bg-red-700">
                                <p className=" text-3xl animate-pulse"><FaStar/><FaStar/></p>
                            </div> : ""
                    }
                    {
                        (name === "Silver") ?
                            <div className="absolute -top-5 right-4 p-2 rounded-bl-badge bg-red-700">
                                <p className=" text-3xl animate-pulse"><FaStar/></p>
                            </div> : ""
                    }
                </div>
                <div className="space-y-4 my-5 px-8">

                    {/* <div className="w-1/5 h-[3px] bg-[#219bff]"></div> */}
                    <p>Classes: {allClasses}</p>
                    <div className="w-1/5 h-[3px] bg-[#219bff]"></div>
                    <p>Facilities: {allFacilities}</p>
                    <div className="w-1/5 h-[3px] bg-[#219bff]"></div>
                    <p>Price: <span className="text-2xl">${price}</span></p>
                    <div className="w-1/5 h-[3px] bg-[#219bff]"></div>
                </div>
                <Link to={`/payment`} state={{ plan }}>
                            <button className="btn bg-[#0167BB] hover:bg-[#219bff] text-white rounded-md uppercase hover:scale-105 hover:-skew-x-12 border-0 mb-8">Know More</button>
                        </Link>
            </div>
        </div>
    );
};

export default PlansCard;