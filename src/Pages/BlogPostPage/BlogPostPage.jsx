import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import Container from "../../Components/Container/Container";
import LikeDislikeButton from "../../Components/LikeDislikeButton/LikeDislikeButton";
// import { FaThumbsDown, FaThumbsUp } from "react-icons/fa6";


const BlogPostPage = () => {

    const post = useLoaderData()

    const { title, author, date, image, content } = post

    return (
        <>
            <Helmet>
                <title>FitZ | Forum Post</title>
            </Helmet>
            <Container>
                <div className="md:grid md:grid-cols-11 flex-col">

                    <div className="col-span-9">
                        <h3 className="font-bold text-3xl text-center ">{title}</h3>
                        <div className="w-11/12 mx-auto space-y-4 my-10">
                            <img className="md:w-1/4 rounded-2xl md:float-left mr-3 mb-" src={image} alt="" />
                            <p className="text-justify"><span className="font-semibold"></span> {content}</p>
                            <p className="flex justify-center md:justify-end items-center gap-5">
                                <LikeDislikeButton></LikeDislikeButton>
                            </p>
                        </div>
                    </div>

                    <div className="col-span-2 px-3 md:px-0 md:pt-10">
                        <h3 className="font-bold text-lg text-center underline">Know The Author</h3>
                        <div className="space-y-1">
                            <p><span className="font-semibold">Author:</span> {author}.</p>
                            <p><span className="font-semibold">Published:</span> {date}</p>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default BlogPostPage;