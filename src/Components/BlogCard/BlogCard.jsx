

const BlogCard = ({ blog }) => {

    const { title, author, date, image, _id } = blog

    // const shortContent = content.length > 120 ? `${content.slice(0, 120)}...` : content;

    return (
        <>
            <div className="card card-compact w-full bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body text-white">
                    <h2 className="card-title text-justify">{title}</h2>
                    <div className="h-[3px] w-full bg-[#219bff] max-w-full"></div>
                    <div className="card-actions justify-between ">
                        <p>Author: {author}</p>
                        <p className="text-end">{date}</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BlogCard;