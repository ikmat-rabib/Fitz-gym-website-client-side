import { useEffect, useState } from "react";
import Container from "../../../Components/Container/Container";
import FeaturesCard from "../../../Components/FeaturesCard/FeaturesCard";


const Featured = () => {

    const [featured, setFeatured] = useState([])

    useEffect(() => {
        fetch('features.json')
        .then(res => res.json())
        .then(data => setFeatured(data))
    } ,[])

    return (
        <>
            <Container>
                <div className="text-center space-y-2 mb-10">
                    <h3 className="text-4xl font-bold text-white">Amazing <span className="text-[#219bff]">Features</span></h3>
                    <p className="font-medium text-slate-200">Explore our incredible features.</p>
                </div>

                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {
                        featured.map(item => <FeaturesCard key={item.id} item={item}></FeaturesCard>)
                    }
                </div>
            </Container>
        </>
    );
};

export default Featured;