import { Helmet } from "react-helmet-async";
import Container from "../../Components/Container/Container";
import useBlogs from "../../Hooks/useBlogs";
import ForumCard from "../../Components/ForumCard/ForumCard";
import { useLoaderData } from "react-router-dom";
import { useState } from "react";


const Forum = () => {

    const [currentPage, setCurrentPage] = useState(1)

    const [blogs] = useBlogs()
    const loadCount = useLoaderData()
    const { count } = loadCount

    const itemsPerPage = 4
    const numberOfPages = Math.ceil(count / itemsPerPage)
    const pages = [...Array(numberOfPages).keys()].map(page => page + 1);

    const handlePageClick = (page) => {
        setCurrentPage(page);
    };

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

                <div className=" grid grid-cols-1 gap-10">

                    {
                        blogs
                            .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
                            .map((blog) => (
                                <ForumCard key={blog._id} blog={blog}></ForumCard>
                            ))}

                </div>

                <div className="text-center mt-10 ">
                    {/* <p>currentPage: {currentPage}</p> */}
                    {
                        pages.map(page =>
                            <button
                                onClick={() => handlePageClick(page)}
                                className={`btn mx-1 text-white ${currentPage === page ? 'bg-[#0167BB]' : ''}`}
                                key={page}>{page}
                            </button>)
                    }
                </div>
            </Container>
        </>
    );
};

export default Forum;