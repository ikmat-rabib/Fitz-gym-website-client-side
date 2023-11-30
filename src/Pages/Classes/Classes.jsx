import { Helmet } from "react-helmet-async";
import Container from "../../Components/Container/Container";
import ClassTable from "../../Components/ClassTable/ClassTable";
import AllClassSection from "../../Components/AllClassSection/AllClassSection";


const Classes = () => {



    return (
        <>
            <Helmet>
                <title>FitZ | Classes</title>
            </Helmet>
            <Container>
                <div className="text-center space-y-2 mb-10">
                    <h3 className="text-4xl font-bold text-white">Class <span className="text-[#219bff]">Schedule</span></h3>
                    <p className="font-medium text-slate-200">Find yourself the best classes suits you</p>
                </div>
                <ClassTable ></ClassTable>
                <AllClassSection></AllClassSection>
            </Container>
        </>
    );
};

export default Classes;