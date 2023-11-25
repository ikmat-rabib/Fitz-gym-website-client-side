

const FeaturesCard = ({item}) => {

    const {name, description, icon} = item

    return (
        <>
            <div className="card bg-[#0d1427] shadow-xl hover:shadow-[#219bff]  group">
                <figure className="w-28 h-28 mx-auto mt-10 rounded-full group-hover:bg-[#219bff]">
                    <img src={icon} alt="" className=" invert group-hover:invert-0" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p className="text-justify">{description}</p>
                </div>
            </div>
        </>
    );
};

export default FeaturesCard;