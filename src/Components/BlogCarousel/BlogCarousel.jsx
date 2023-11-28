import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';




const BlogCarousel = () => {
    return (
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                centeredSlides={true}
                
                className="mySwiper "
            >
                <SwiperSlide >
                    <div className="card card-compact w-96 bg-base-100 shadow-xl">
                        <figure><img src="https://i.ibb.co/JH86KZH/blog2.jpg" alt="" /></figure>
                        <div className="card-body text-white">
                            <h2 className="card-title text-justify">Unlocking the Benefits of High-Intensity Interval Training (HIIT)</h2>
                            <div className="h-[3px] w-full bg-[#219bff] max-w-full"></div>
                            <div className="flex justify-between ">
                                <p>Author: FitnessEnthusiast123</p>
                                <p className='text-right'>2023-09-15</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide >
                    <div className="card card-compact w-96 bg-base-100 shadow-xl">
                        <figure><img src="https://i.ibb.co/swb0K0t/blog3.jpg" alt="" /></figure>
                        <div className="card-body text-white">
                            <h2 className="card-title text-justify">Nutrition Tips for Muscle Gain: What to Eat Before & After gym</h2>
                            <div className="h-[3px] w-full bg-[#219bff] max-w-full"></div>
                            <div className="flex justify-between ">
                                <p>Author: NutritionExpert456</p>
                                <p className='text-right'>2023-09-18</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide >
                    <div className="card card-compact w-96 bg-base-100 shadow-xl">
                        <figure><img src="https://i.ibb.co/GQRjf2D/blog5.jpg" alt="" /></figure>
                        <div className="card-body text-white">
                            <h2 className="card-title text-justify">The Power of Mindfulness in Yoga Practice</h2>
                            <div className="h-[3px] w-full bg-[#219bff] max-w-full"></div>
                            <div className="flex justify-between ">
                                <p>Author: FitnessEnthusiast123</p>
                                <p className='text-right'>2023-09-15</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide >
                    <div className="card card-compact w-96 bg-base-100 shadow-xl">
                        <figure><img src="https://i.ibb.co/JH86KZH/blog2.jpg" alt="" /></figure>
                        <div className="card-body text-white">
                            <h2 className="card-title text-justify">Unlocking the Benefits of High-Intensity Interval Training (HIIT)</h2>
                            <div className="h-[3px] w-full bg-[#219bff] max-w-full"></div>
                            <div className="flex justify-between ">
                                <p>Author: FitnessEnthusiast123</p>
                                <p className='text-right'>2023-09-15</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide >
                    <div className="card card-compact w-96 bg-base-100 shadow-xl">
                        <figure><img src="https://i.ibb.co/swb0K0t/blog3.jpg" alt="" /></figure>
                        <div className="card-body text-white">
                            <h2 className="card-title text-justify">Unlocking the Benefits of High-Intensity Interval Training (HIIT)</h2>
                            <div className="h-[3px] w-full bg-[#219bff] max-w-full"></div>
                            <div className="flex justify-between ">
                                <p>Author: FitnessEnthusiast123</p>
                                <p className='text-right'>2023-09-15</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide >
                    <div className="card card-compact w-96 bg-base-100 shadow-xl">
                        <figure><img src="https://i.ibb.co/GQRjf2D/blog5.jpg" alt="" /></figure>
                        <div className="card-body text-white">
                            <h2 className="card-title text-justify">Unlocking the Benefits of High-Intensity Interval Training (HIIT)</h2>
                            <div className="h-[3px] w-full bg-[#219bff] max-w-full"></div>
                            <div className="flex justify-between ">
                                <p>Author: FitnessEnthusiast123</p>
                                <p className='text-right'>2023-09-15</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                
            </Swiper>
    );
};

export default BlogCarousel;



