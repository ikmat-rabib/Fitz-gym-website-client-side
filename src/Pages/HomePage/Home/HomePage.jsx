import { Helmet } from "react-helmet-async";
import AboutUs from "../AboutUs/AboutUs";
import Banner from "../Banner/Banner";
import Blogs from "../Blogs/Blogs";
import Featured from "../Featured/Featured";
import Newsletter from "../Newsletter/Newsletter";
import OurTeam from "../OurTeam/OurTeam";
import Reviews from "../Reviews/Reviews";


const HomePage = () => {
    return (
        <>
            <Helmet>
                <title>FitZ | Home</title>
            </Helmet>
            <Banner></Banner>
            <AboutUs></AboutUs>
            <Featured></Featured>
            <OurTeam></OurTeam>
            <Newsletter></Newsletter>
            <Reviews></Reviews>
            <Blogs></Blogs>
        </>
    );
};

export default HomePage;