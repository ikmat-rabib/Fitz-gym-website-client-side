import { Helmet } from "react-helmet-async";
import Container from "../../Components/Container/Container";


const Forum = () => {
    return (
        <>
            <Helmet>
                <title>FitZ | Forum</title>
            </Helmet>
            <Container>
                <div className="text-center space-y-2 mb-10">
                    <h3 className="text-4xl font-bold text-white">The <span className="text-[#219bff]">Forum</span></h3>
                    <p className="font-medium text-slate-200">Update yourself with the recent reading</p>
                </div>
            </Container>
        </>
    );
};

export default Forum;