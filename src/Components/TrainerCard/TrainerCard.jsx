import { FaInstagram } from "react-icons/fa6";
import { Link } from "react-router-dom";


const TrainerCard = ({ trainer }) => {

    const { trainerName, trainerPic, availableTime, socialLink, yearsExp, _id } = trainer

    return (
        <>
            <div className="card bg-[#0d1427] shadow-xl hover:shadow-[#219bff] relative group">
                <figure className=" ">
                    <img src={trainerPic} alt="" className="rounded-2xl " />
                </figure>
                <div className="card-body w-full items-center  space-y-3 text-white absolute bottom-[0px] rounded-b-2xl bg-slate-700 bg-opacity-60 md:hidden group-hover:block">
                    <h2 className="text-3xl font-semibold text-center text-white ">{trainerName}</h2>
                    <p className="font-medium text-center underline">{availableTime}</p>
                    <p className="text-center"> Years of Experience: {yearsExp}</p>
                    <div className="flex justify-between items-center">
                        <Link to={`/trainers/${_id}`} state={{ trainer }}>
                            <button className="btn bg-[#0167BB] hover:bg-[#219bff] text-white rounded-md uppercase hover:scale-110 hover:-skew-x-12 border-0">Know More</button>
                        </Link>
                        <Link to={socialLink} className="text-4xl flex justify-center font-bold text-[#219bff]"><FaInstagram></FaInstagram></Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TrainerCard;