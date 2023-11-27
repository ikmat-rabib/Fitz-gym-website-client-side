

const GalleryCard = ({ gImage }) => {

    const { imageName, link } = gImage

    return (
        <div className="flex justify-center ">
            <img className="rounded-xl" src={link} alt={imageName} />
        </div>
    );
};

export default GalleryCard;