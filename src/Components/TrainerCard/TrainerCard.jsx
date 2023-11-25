import { FaInstagram } from "react-icons/fa6";
import { Link } from "react-router-dom";


const TrainerCard = ({trainer}) => {

    const {trainerName, trainerPic, availableTime, socialLink, experience} = trainer

    return (
        <>
            <div className="card bg-[#0d1427] shadow-xl hover:shadow-[#219bff] relative group">
                <figure className=" ">
                    <img src={trainerPic} alt="" className="rounded-2xl " />
                </figure>
                <div className="card-body items-center space-y-3 text-white absolute bottom-[0px] rounded-b-2xl bg-slate-700 bg-opacity-60 md:hidden group-hover:block">
                    <h2 className="text-3xl font-semibold text-center text-white ">{trainerName}</h2>
                    <p className="font-medium text-center">{availableTime}</p>
                    <p className="text-justify">{experience}</p>
                    <Link to={socialLink} className="text-3xl flex justify-center "><FaInstagram></FaInstagram></Link>
                </div>
            </div>
        </>
    );
};

export default TrainerCard;