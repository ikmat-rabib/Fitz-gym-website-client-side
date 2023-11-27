

const GalleryCard = ({ gImage }) => {

    const { imageName, link } = gImage

    return (
        <div>
            <img src={link} alt={imageName} />
        </div>
    );
};

export default GalleryCard;