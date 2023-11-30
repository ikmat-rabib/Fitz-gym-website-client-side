import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import useBlogs from '../../Hooks/useBlogs';
import BlogCard from '../BlogCard/BlogCard';




const BlogCarousel = () => {

const [blogData] = useBlogs()

    return (
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                centeredSlides={true}
                
                // className="mySwiper w-full"
                
            >
                {
                    blogData.map(blog => <SwiperSlide key={blog._id} blog={blog}>

                        <BlogCard  blog={blog}></BlogCard>

                    </SwiperSlide>) 
                }
               
                
            </Swiper>
    );
};

export default BlogCarousel;



