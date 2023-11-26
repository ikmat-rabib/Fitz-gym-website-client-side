import { Link } from "react-router-dom";
import Container from "../../Components/Container/Container";


const ErrorPage = () => {
    return (
        <>
            <div className="bg-white h-screen">
                <Container>
                    <img className="w-96 mx-auto" src="https://i.ibb.co/wwyDfLn/404-error-isometric-background.jpg" alt="" />
                    <div className=" my-10 flex justify-center">
                        <Link to='/'><button className="btn my-10 bg-[#0167BB] hover:bg-[#219bff] text-white rounded-md uppercase hover:scale-110 hover:-skew-x-12 border-0" >Go Home</button></Link>
                    </div>
                </Container>
            </div>
        </>
    );
};

export default ErrorPage;