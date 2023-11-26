import { Link } from "react-router-dom";
import Container from "../Container/Container";


const BecomeTrainer = () => {
    return (
        <div className="bg-[#0167BB]">
            <Container>
                <div className="text-center space-y-2 mb-10">
                    <h3 className="text-4xl font-bold text-white">Become Our <span className="text-[#13234e]">Trainer</span></h3>
                    <p className="font-medium text-slate-200">Join us to take your experience into  the next level</p>
                </div>
                <Link to=''>
                    <button className="btn bg-[#0167BB] hover:bg-[#219bff] w-full text-white rounded-md uppercase hover:scale-110 hover:-skew-x-12 hover:border-0" >Become a Trainer</button>
                </Link>

            </Container>
        </div>
    );
};

export default BecomeTrainer;