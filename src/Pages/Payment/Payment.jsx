import { Helmet } from "react-helmet-async";
import Container from "../../Components/Container/Container";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";


const Payment = () => {
    
    const auth = useContext(AuthContext);

    return (
        <>
            <Helmet>
                <title>FitZ | Booking</title>
            </Helmet>

            <Container>
                <div className="text-center space-y-2 mb-10">
                    <h3 className="text-4xl font-bold text-white">Your <span className="text-[#219bff]">Payment</span></h3>
                    <p className="font-medium text-slate-200">Check all the Info and Confirm Payment</p>
                </div>
                
            </Container>
        </>
    );
};

export default Payment;