import { Link } from "react-router-dom";


const ClassCard = ({ classCard }) => {

    const { name, description, trainer, image, featured, _id } = classCard

    return (
        <>
            <div className="card border border-[#219bff] hover:scale-105 shadow-xl ">
                <figure className="px-10 pt-10">
                    <img src={image} alt="" className="rounded-xl" />
                </figure>
                <div className="card-body p-6 items-center text-white text-center">
                    <div className="flex items-center gap-1">
                        <h2 className="card-title">{name}</h2>
                        {/* <div className="badge badge-info h-auto border-0">
                            {
                                featured ? 'Featured' : <></>
                            }
                        </div> */}
                    </div>
                    <p className="text-justify">{description}</p>
                    <p className="text-start">Trainer: <span className="font-semibold">{trainer}</span></p>
                    <div className="card-actions">
                        <Link to={`/classes/${_id}`} state={{ classCard }}>
                            <button className="btn  bg-[#0167BB] hover:bg-[#219bff] text-white rounded-md uppercase hover:scale-110 hover:-skew-x-12 border-0">Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ClassCard;