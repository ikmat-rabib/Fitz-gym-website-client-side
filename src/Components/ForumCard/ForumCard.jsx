import { Link } from "react-router-dom";


const ForumCard = ({ blog }) => {

    const { title, author, date, image, _id, content } = blog

    const shortContent = content.length > 180 ? `${content.slice(0, 180)}...` : content;

    return (
        <>
            <div className="card lg:card-side bg-base-100 rounded-lg shadow-xl">
                <figure ><img className="bg-cover" src={image} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <div className="flex justify-between">
                        <small>Author: {author}</small>
                        <small className="">Published: {date}</small>
                    </div>
                    <p>{shortContent}</p>
                    <div className="card-actions justify-between">

                        <Link to={`/blogs/${_id}`} state={{ blog }}>
                            <button className="btn bg-[#0167BB] hover:bg-[#219bff] text-white rounded-md uppercase hover:scale-110 hover:-skew-x-12 border-0">read this post</button>
                        </Link>
                    </div>
                </div>
            </div>
           
        </>
    );
};

export default ForumCard;