import Container from "../../../Components/Container/Container";
import BlogCarousel from "../../../Components/BlogCarousel/BlogCarousel";
import { Link } from "react-router-dom";


const Blogs = () => {


    return (
        <>
            <Container >
                <div className="text-center space-y-2 mb-10">
                    <h3 className="text-4xl font-bold text-white">Featured <span className="text-[#219bff]">Blogs</span></h3>
                    <p className="font-medium text-slate-200">Update yourself with the recent reading</p>
                </div>

                <BlogCarousel></BlogCarousel>


                <div className="flex justify-center my-5">
                    <Link to={'/forum'} className="btn bg-[#0167BB] hover:bg-[#219bff] text-white rounded-md uppercase hover:scale-110 hover:-skew-x-12 border-0">visit our forum</Link>
                </div>

            </Container>
        </>
    );
};

export default Blogs;