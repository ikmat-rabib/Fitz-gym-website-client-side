import { useEffect, useState } from "react";
import Container from "../../Components/Container/Container";
import GalleryCard from "../../Components/GalleryCard/GalleryCard";



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
            <Container>
                <div className="text-center space-y-2 mb-10">
                    <h3 className="text-4xl font-bold text-white">Our <span className="text-[#219bff]">Gallery</span></h3>
                    <p className="font-medium text-slate-200">Showcase of beautiful memory</p>
                </div>

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