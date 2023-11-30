import { Helmet } from "react-helmet-async";
import Container from "../../Components/Container/Container";
import useClasses from "../../Hooks/useClasses";
import { useLoaderData } from "react-router-dom";


const ClassDetailPage = () => {
    
    const allClasses = useLoaderData()

    return (
        <>
            <Helmet>
                <title>FitZ | Class Detail</title>
            </Helmet>
            <Container>
                <div className="text-center space-y-2 my-10">
                    <h3 className="text-4xl font-bold text-white">Our All <span className="text-[#219bff]">Classes</span></h3>
                    <p className="font-medium text-slate-200">Find yourself the best classes suits you</p>
                </div>
                <div className="text-le flex justify-evenly items-center space-y-4 my-10">
                    <img className="w-1/4 rounded-2xl" src={trainerPic} alt="" />
                    <div className="space-y-3 w-2/4">
                        <h3 className="font-bold text-3xl">{trainerName}</h3>
                        <p> <span className="font-semibold">Skills:</span> {allSkills}</p>
                        <p> <span className="font-semibold">Available Days in Week:</span> {allAvailTimeWeek}.</p>
                        <p> <span className="font-semibold">Available Slots in a Day:</span> <Link>{allAvailTimeDay}</Link>.</p>
                        <p><span className="font-semibold">Description:</span> {description}</p>
                        <p><span className="font-semibold">Experience:</span> {yearsExp} years.</p>
                        <p><span className="font-semibold">Age:</span> {age} years.</p>
                        <p className="flex items-center gap-5"><span className="font-semibold">Social:</span> <Link to={socialLink} className="text-4xl font-bold text-[#219bff]"><FaInstagram className="hover:scale-105"></FaInstagram></Link></p>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default ClassDetailPage;