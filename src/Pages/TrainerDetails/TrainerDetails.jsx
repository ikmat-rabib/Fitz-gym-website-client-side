import { Link, useLoaderData } from "react-router-dom";
import Container from "../../Components/Container/Container";
import { FaInstagram } from "react-icons/fa6";
import { Helmet } from "react-helmet-async";
import BecomeTrainer from "../../Components/BecomeTrainer/BecomeTrainer";


const TrainerDetails = () => {

    const trainer = useLoaderData()

    const { trainerName, trainerPic, details, availableTime, socialLink, yearsExp } = trainer

    return (
        <>
            <Helmet>
                <title>FitZ | Trainer Details</title>
            </Helmet>
            <Container>
                <div className="text-le flex justify-evenly items-center space-y-4 my-10">
                    <img className="w-1/4 rounded-2xl" src={trainerPic} alt="" />
                    <div className="space-y-3 w-2/4">
                        <h3 className="font-bold text-3xl">{trainerName}</h3>
                        <p> <span className="font-semibold">Available:</span>  {availableTime}.</p>
                        <p><span className="font-semibold">Description:</span> {details}</p>
                        <p><span className="font-semibold">Experience:</span> {yearsExp} years.</p>
                        <p className="flex items-center gap-5"><span className="font-semibold">Social:</span> <Link to={socialLink} className="text-4xl font-bold text-[#219bff]"><FaInstagram></FaInstagram></Link></p>
                    </div>
                </div>
            </Container>
            <BecomeTrainer></BecomeTrainer>
        </>
    );
};

export default TrainerDetails;