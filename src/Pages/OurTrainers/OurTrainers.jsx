import useTrainers from "../../Hooks/useTrainers";
import { Helmet } from "react-helmet-async";
import Container from "../../Components/Container/Container";
import TrainerCard from "../../Components/TrainerCard/TrainerCard";


const OurTrainers = () => {
    const [trainers] = useTrainers()

    return (
        <>
            <Helmet>
                <title>FitZ | Our Trainers</title>
            </Helmet>

            <Container>
                <div className="text-center space-y-2 mb-10">
                    <h3 className="text-4xl font-bold text-white">Our <span className="text-[#219bff]">Team</span></h3>
                    <p className="font-medium text-slate-200">We have the best Trainers around here</p>
                </div>
                <div className=" grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {
                        trainers.map(trainer =>
                            <TrainerCard
                                key={trainer._id}
                                trainer={trainer}
                            ></TrainerCard>)
                    }
                </div>
            </Container>
        </>
    );
};

export default OurTrainers;