import { Helmet } from "react-helmet-async";
import Container from "../../Components/Container/Container";
import useBlogs from "../../Hooks/useBlogs";
import BlogCard from "../../Components/BlogCard/BlogCard";


const Forum = () => {

    const [blogs] = useBlogs()

    return (
        <>
            <Helmet>
                <title>FitZ | Forum</title>
            </Helmet>
            <Container>
                <div className="text-center space-y-2 mb-10">
                    <h3 className="text-4xl font-bold text-white">The <span className="text-[#219bff]">Forum</span></h3>
                    <p className="font-medium text-slate-200">Update yourself with the recent reading</p>
                </div>

                <div className=" grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {
                        blogs.map(blog =>
                            <BlogCard
                                key={blog._id}
                                blog={blog}
                            ></BlogCard>)
                    }
                </div>
            </Container>
        </>
    );
};

export default Forum;