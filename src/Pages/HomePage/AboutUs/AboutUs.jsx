import Container from "../../../Components/Container/Container";
import { FaCheck } from "react-icons/fa6";


const AboutUs = () => {
    return (
        <div className="bg-[#0d1427] ">
            <Container>
                <div className="md:flex justify-between items-center">

                    <div className="md:w-1/2 p-3 md:p-0 space-y-3">
                        <h3 className="text-4xl font-bold text-white">About <span className="text-[#219bff]">Our Team</span></h3>
                        <p className="font-medium text-slate-200">Dedicated to excellence, our passionate team of fitness experts is committed to guiding and inspiring you on your wellness journey. Together, let's achieve your health and fitness goals.</p>
                        <p className="flex items-center gap-2 font-medium text-slate-200"><FaCheck className="text-[#219bff]"></FaCheck>Expert Trainers</p>
                        <p className="flex items-center gap-2 font-medium text-slate-200"><FaCheck className="text-[#219bff]"></FaCheck>Personalized Fitness Plans</p>
                        <p className="flex items-center gap-2 font-medium text-slate-200"><FaCheck className="text-[#219bff]"></FaCheck>Wellness Assessments</p>
                        <p className="flex items-center gap-2 font-medium text-slate-200"><FaCheck className="text-[#219bff]"></FaCheck>Community Events</p>
                    </div>

                    <div className="md:w-1/2 flex justify-center mt-5 md:mt-0 md:justify-end">
                        <div className="w-80 h-60 border-4 border-[#219bff] hover:bg-[#219bff] rounded-lg relative">
                            <img className="w-80 rounded-lg shadow-2xl hover:shadow-[#219bff] absolute bottom-3 right-[10px]" src="https://i.ibb.co/xhvZSHk/trainers.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default AboutUs;