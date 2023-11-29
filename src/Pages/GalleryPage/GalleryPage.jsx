// import { useEffect, useState } from "react";
import Container from "../../Components/Container/Container";
import GalleryCard from "../../Components/GalleryCard/GalleryCard";
import { Helmet } from "react-helmet-async";
import { useInfiniteQuery } from "@tanstack/react-query";
import InfiniteScroll from 'react-infinite-scroll-component';


const getGallery = async ({ pageParam = 0 }) => {
    const res = await fetch(`http://localhost:5000/gallery?limit=12&offset=${pageParam}`);
    const data = await res.json();

    return { ...data, prevOffset: pageParam };
}

const GalleryPage = () => {

    const { data, fetchNextPage, hasNextPage } = useInfiniteQuery({
        queryKey: ['gallery'],
        queryFn: getGallery,
        getNextPageParam: (lastPage) => {
            if (lastPage.prevOffset + 12 > lastPage.galleryCount) {
                return null;
            }
            return lastPage.prevOffset + 12;
        }
    })

    const gallery = data?.pages.reduce((acc, page) => {
        return [...acc, ...page[0].gallery]
    }, [])

    return (
        <>
            <Helmet>
                <title>FitZ | Gallery</title>
            </Helmet>

            <div className="text-center space-y-2 py-32 bg-cover max-h-min opacity-80" style={{ backgroundImage: 'url(https://i.ibb.co/HKngf5w/gallery-banner.jpg)' }}>
                <div className="space-y-3 my-10 ">
                    <h3 className="text-4xl font-bold text-white z-10">Our <span className="text-[#219bff]">Gallery</span></h3>
                    <p className="font-medium text-white">Showcase of beautiful memory</p>
                </div>
            </div>

            <InfiniteScroll
                dataLength={gallery ? gallery.length : 0} //This is important field to render the next data
                next={() => fetchNextPage()}
                hasMore={hasNextPage}
                loader={<span className="loading loading-ring loading-lg"></span>}
            >
                <Container>
                    <div className=" grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                        {gallery &&
                            gallery.map(gImage =>
                                <GalleryCard
                                    key={gImage}
                                    gImage={gImage}
                                ></GalleryCard>)
                        }
                    </div>
                </Container>
            </InfiniteScroll>
        </>
    );
};

export default GalleryPage;







// console.log(gallery);

// const [gallery, setGallery] = useState([])
// const [loading, setLoading] = useState(true)

// useEffect(() => {
//     fetch('http://localhost:5000/gallery')
//         .then(res => res.json())
//         .then(data => {
//             setGallery(data)
//             setLoading(false)
//         })
// }, [])