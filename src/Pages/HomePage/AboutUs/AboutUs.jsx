import Container from "../../../Components/Container/Container";
import { FaCheck } from "react-icons/fa6";


const AboutUs = () => {
    return (
        <div className="bg-[#0d1427] ">
            <Container>
                <div className="flex justify-between items-center">
                    <div className="w-1/2 space-y-3">
                        <h3 className="text-4xl font-bold text-white">About <span className="text-[#219bff]">Our Team</span></h3>
                        <p className="font-medium text-slate-200">Dedicated to excellence, our passionate team of fitness experts is committed to guiding and inspiring you on your wellness journey. Together, let's achieve your health and fitness goals.</p>
                        <p className="flex items-center gap-2 font-medium text-slate-200"><FaCheck className="text-[#219bff]"></FaCheck>Expert Trainers</p>
                        <p className="flex items-center gap-2 font-medium text-slate-200"><FaCheck className="text-[#219bff]"></FaCheck>Personalized Fitness Plans</p>
                        <p className="flex items-center gap-2 font-medium text-slate-200"><FaCheck className="text-[#219bff]"></FaCheck>Wellness Assessments</p>
                        <p className="flex items-center gap-2 font-medium text-slate-200"><FaCheck className="text-[#219bff]"></FaCheck>Community Events</p>
                    </div>
                    <div className="w-1/2 flex justify-end">
                        <div className="w-80 ">
                            <img className="rounded-lg shadow-2xl shadow-[#219bff] " src="https://i.ibb.co/xhvZSHk/trainers.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default AboutUs;