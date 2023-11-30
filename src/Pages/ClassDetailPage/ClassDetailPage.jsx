import { Helmet } from "react-helmet-async";
import Container from "../../Components/Container/Container";
import { Link, useLoaderData } from "react-router-dom";
import useTrainers from "../../Hooks/useTrainers";


const ClassDetailPage = () => {

    const allClasses = useLoaderData()
    const [trainerData] = useTrainers()

    const { name, description, trainer, slot, featured, image, day, _id } = allClasses

    
    
    const matchingTrainers = trainerData.filter((taeget) => taeget.trainerName === trainer);
    const trainerIds = matchingTrainers.map((taeget) => taeget._id);
    

    console.log(trainerIds);

    return (
        <>
            <Helmet>
                <title>FitZ | Class Detail</title>
            </Helmet>

            <Container>
                <div className="text-le flex justify-evenly items-center space-y-4 my-10">
                    <img className="w-1/4 rounded-2xl" src={image} alt="" />
                    <div className="space-y-3 w-2/4">
                        <h3 className="font-bold text-3xl text-[#219bff]">{name}</h3>
                        <p> <span className="font-semibold">Trainer:</span> {trainer}</p>
                        <p><span className="font-semibold">Class Day:</span> {day}</p>
                        <p> <span className="font-semibold">Class Time:</span> {slot}</p>
                        <p><span className="font-semibold">Description:</span> {description}</p>
                        <p><span className="font-semibold">Age:</span> {featured} years.</p>
                    </div>
                </div>




                <Link to={`/trainers/${trainerIds}`} >
                    <button className="btn  bg-[#0167BB] hover:bg-[#219bff] text-white rounded-md uppercase hover:scale-110 hover:-skew-x-12 border-0">Details</button>
                </Link>
            </Container>
        </>
    );
};

export default ClassDetailPage;