import { Link, useLoaderData } from "react-router-dom";
import Container from "../../Components/Container/Container";
import { FaInstagram } from "react-icons/fa6";
import { Helmet } from "react-helmet-async";
import BecomeTrainer from "../../Components/BecomeTrainer/BecomeTrainer";
import Featured from "../HomePage/Featured/Featured";
import Blogs from "../HomePage/Blogs/Blogs";


const TrainerDetails = () => {

    const trainer = useLoaderData()

    const { trainerName, age, trainerPic, yearsExp, socialLink, skills, availableTimeInWeek, availableTimeInDay, description } = trainer

     const allSkills = skills.join(', ')
     const allAvailTimeWeek = availableTimeInWeek.join(', ')
     const allAvailTimeDay = availableTimeInDay.join(', ')

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
                        <p> <span className="font-semibold">Skills:</span> {allSkills}</p>
                        <p> <span className="font-semibold">Available Days in Week:</span> {allAvailTimeWeek}.</p>
                        <p> <span className="font-semibold">Available Slots in a Day:</span> {allAvailTimeDay}.</p>
                        <p><span className="font-semibold">Description:</span> {description}</p>
                        <p><span className="font-semibold">Experience:</span> {yearsExp} years.</p>
                        <p><span className="font-semibold">Age:</span> {age} years.</p>
                        <p className="flex items-center gap-5"><span className="font-semibold">Social:</span> <Link to={socialLink} className="text-4xl font-bold text-[#219bff]"><FaInstagram className="hover:scale-105"></FaInstagram></Link></p>
                    </div>
                </div>
            </Container>
            <BecomeTrainer></BecomeTrainer>
            <Blogs></Blogs>
        </>
    );
};

export default TrainerDetails;