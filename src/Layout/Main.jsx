import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Main = () => {

    const location = useLocation()
    const noHeaderFooter1 = location.pathname.includes('login')
    const noHeaderFooter2 = location.pathname.includes('register')

    return (
        <div>
            {(noHeaderFooter1 || noHeaderFooter2) || <Navbar></Navbar>}
            <div className="bg-[#000219]">
            <Outlet></Outlet>
            </div>
            {(noHeaderFooter1 || noHeaderFooter2)|| <Footer></Footer>}
            <ToastContainer />
        </div>
    );
};

export default Main;