import AboutUs from "../AboutUs/AboutUs";
import Banner from "../Banner/Banner";
import Featured from "../Featured/Featured";
import Newsletter from "../Newsletter/Newsletter";
import Reviews from "../Reviews/Reviews";


const HomePage = () => {
    return (
        <>
           <Banner></Banner>
           <AboutUs></AboutUs>
           <Featured></Featured>
           <Newsletter></Newsletter>
           <Reviews></Reviews>
        </>
    );
};

export default HomePage;