
import Container from "../../../Components/Container/Container";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { FaStar } from "react-icons/fa6";


const Reviews = () => {


    return (
        <>
            <Container>
                <div className="text-center space-y-2 mb-10">
                    <h3 className="text-4xl font-bold text-white">Our <span className="text-[#219bff]">Clients</span></h3>
                    <p className="font-medium text-slate-200">Our clients experience says it all</p>
                </div>


                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className="card bg-[#0d1427] py-10 ">
                            <figure className="w-20 h-20 mx-auto  rounded-full group-hover:bg-[#219bff]">
                                <img src='https://i.ibb.co/gWkQfyg/member1.png' alt="" className="  " />
                            </figure>
                            <div className="card-body items-center text-center">
                                <p className="text-justify flex text-amber-500"><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar></p>
                                <p className="text-justify">Amazing yoga studio! The serene ambiance makes every session a peaceful retreat.</p>
                                <h2 className="card-title">Alice Johnson</h2>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="card bg-[#0d1427] py-10 ">
                            <figure className="w-20 h-20 mx-auto  rounded-full group-hover:bg-[#219bff]">
                                <img src='https://i.ibb.co/ryWr1c3/member2.png' alt="" className="  " />
                            </figure>
                            <div className="card-body items-center text-center">
                                <p className="text-justify flex text-amber-500"><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar></p>
                                <p className="text-justify">AThe running zone is fantastic! Well-maintained treadmills and a great cardio space.</p>
                                <h2 className="card-title">Sara Smith</h2>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="card bg-[#0d1427] py-10 ">
                            <figure className="w-20 h-20 mx-auto  rounded-full group-hover:bg-[#219bff]">
                                <img src='https://i.ibb.co/CnqsZrz/member4.png' alt="" className="  " />
                            </figure>
                            <div className="card-body items-center text-center">
                                <p className="text-justify flex text-amber-500"><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar></p>
                                <p className="text-justify">Amazing yoga studio! The serene ambiance makes every session a peaceful retreat.</p>
                                <h2 className="card-title">Emily Davis</h2>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="card bg-[#0d1427] py-10 ">
                            <figure className="w-20 h-20 mx-auto  rounded-full group-hover:bg-[#219bff]">
                                <img src='https://i.ibb.co/QY7w2n5/member3.png' alt="" className="  " />
                            </figure>
                            <div className="card-body items-center text-center">
                                <p className="text-justify flex text-amber-500"><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar></p>
                                <p className="text-justify">Great bodybuilding area! The variety of weights and machines make it easy to target specific muscle groups.</p>
                                <h2 className="card-title">Chris Anderson</h2>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="card bg-[#0d1427] py-10 ">
                            <figure className="w-20 h-20 mx-auto  rounded-full group-hover:bg-[#219bff]">
                                <img src='https://i.ibb.co/gWkQfyg/member1.png' alt="" className="  " />
                            </figure>
                            <div className="card-body items-center text-center">
                                <p className="text-justify flex text-amber-500"><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar></p>
                                <p className="text-justify">The weightlifting zone is superb! Comprehensive equipment for various weightlifting routines.</p>
                                <h2 className="card-title">Michael Brown</h2>
                            </div>
                        </div>
                    </SwiperSlide>

                </Swiper>

            </Container>
        </>
    );
};

export default Reviews;


<>

</>
