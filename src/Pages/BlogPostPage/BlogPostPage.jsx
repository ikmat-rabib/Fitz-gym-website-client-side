import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import Container from "../../Components/Container/Container";
import { FaThumbsDown, FaThumbsUp } from "react-icons/fa6";


const BlogPostPage = () => {

    const post = useLoaderData()

    const { title, author, date, image, content } = post

    return (
        <>
            <Helmet>
                <title>FitZ | Forum Post</title>
            </Helmet>
            <Container>
                <div className="grid grid-cols-6 items-baseline ">

                    <div className="col-span-5">
                        <h3 className="font-bold text-3xl text-center ">{title}</h3>
                        {/* <div className="flex justify-center items-center gap-11 my-5">
                            <p> <span className="font-semibold">Author:</span>  {author}.</p>
                            <p><span className="font-semibold">Date:</span> {date}</p>
                        </div> */}
                        <div className="w-5/6 mx-auto space-y-4 my-10">
                            <img className="w-1/4 rounded-2xl float-left mr-5 mb-" src={image} alt="" />
                            <p className="text-justify"><span className="font-semibold">Description:</span> {content}</p>
                            <p className="flex justify-end items-center gap-5">
                                <button className="text-4xl font-bold text-[#219bff]"><FaThumbsUp className="hover:scale-110"></FaThumbsUp></button>
                                <button className="text-4xl font-bold text-red-600"><FaThumbsDown className="hover:scale-90"></FaThumbsDown></button>
                            </p>
                        </div>
                    </div>

                    <div className="col-span-1 ">
                        <h3 className="font-bold text-lg text-center underline">Know The Author</h3>
                        <div className="space-y-1">
                            <p> <span className="font-semibold">Author:</span>  {author}.</p>
                            <p><span className="font-semibold">Date:</span> {date}</p>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default BlogPostPage;