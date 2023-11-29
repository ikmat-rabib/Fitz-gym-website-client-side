import { Helmet } from "react-helmet-async";
import Container from "../../Components/Container/Container";
import usePlans from "../../Hooks/usePlans";
import PlansCard from "../../Components/PlansCard/PlansCard";


const Booking = () => {

    const [plans] = usePlans()

    return (
        <>
            <Helmet>
                <title>FitZ | Booking</title>
            </Helmet>
            <Container>
            <div className="text-center space-y-2 mb-10">
                    <h3 className="text-4xl font-bold text-white">Your <span className="text-[#219bff]">Bookings</span></h3>
                    <p className="font-medium text-slate-200">Check all the Bookings here</p>
                </div>
                <div className=" grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {
                        plans.map(plan =>
                            <PlansCard
                                key={plan._id}
                                plan={plan}
                            ></PlansCard>)
                    }

                </div>
            </Container>
        </>
    );
};

export default Booking;