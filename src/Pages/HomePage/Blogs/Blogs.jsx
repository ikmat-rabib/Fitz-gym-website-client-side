import Container from "../../../Components/Container/Container";
import BlogCarousel from "../../../Components/BlogCarousel/BlogCarousel";


const Blogs = () => {


    return (
        <>
            <Container>
                <div className="text-center space-y-2 mb-10">
                    <h3 className="text-4xl font-bold text-white">Featured <span className="text-[#219bff]">Blogs</span></h3>
                    <p className="font-medium text-slate-200">Update yourself with the recent reading</p>
                </div>

                <BlogCarousel></BlogCarousel>
            </Container>
        </>
    );
};

export default Blogs;