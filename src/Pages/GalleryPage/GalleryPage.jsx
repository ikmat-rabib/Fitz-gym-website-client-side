import { useEffect, useState } from "react";
import Container from "../../Components/Container/Container";
import GalleryCard from "../../Components/GalleryCard/GalleryCard";
import { Helmet } from "react-helmet-async";



const GalleryPage = () => {

    const [gallery, setGallery] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('gallery.json')
            .then(res => res.json())
            .then(data => {
                setGallery(data)
                setLoading(false)
            })
    }, [])

    return (
        <>
            <Helmet>
                <title>FitZ | Gallery</title>
            </Helmet>
            <div className="text-center space-y-2 py-32 bg-cover max-h-min opacity-80" style={{ backgroundImage: 'url(https://i.ibb.co/HKngf5w/gallery-banner.jpg)'}}>
                <div className="space-y-3 my-10 ">
                    <h3 className="text-4xl font-bold text-white z-10">Our <span className="text-[#219bff]">Gallery</span></h3>
                    <p className="font-medium text-white">Showcase of beautiful memory</p>
                </div>
            </div>
            <Container>
                <div className=" grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {
                        gallery.map(gImage =>
                            <GalleryCard
                                key={gImage._id}
                                gImage={gImage}
                            ></GalleryCard>)
                    }
                </div>
            </Container>
        </>
    );
};

export default GalleryPage;