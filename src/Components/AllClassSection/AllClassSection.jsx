import useClasses from "../../Hooks/useClasses";
import ClassCard from "../ClassCard/ClassCard";


const AllClassSection = () => {


    const [allClasses] = useClasses()

    return (
        <div className="mt-20">
            <div className="text-center space-y-2 my-10">
                <h3 className="text-4xl font-bold text-white">Our All <span className="text-[#219bff]">Classes</span></h3>
                <p className="font-medium text-slate-200">Find yourself the best classes suits you</p>
            </div>
            <div className=" grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-3 md:px-0">
                {
                    allClasses.map(classCard =>
                        <ClassCard
                            key={classCard._id}
                            classCard={classCard}
                        ></ClassCard>)
                }
            </div>
        </div>
    );
};

export default AllClassSection;