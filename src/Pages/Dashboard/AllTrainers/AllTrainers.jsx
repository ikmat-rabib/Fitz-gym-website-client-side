import useTrainers from "../../../Hooks/useTrainers";


const AllTrainers = () => {

    const [trainers] = useTrainers()

    return (
        <div>
            <div className="w-2/5 mx-auto bg-red-500 my-3 rounded-lg">
                <h2 className="text-2xl text-center font-semibold py-3">Total Trainer: {trainers.length}</h2>
            </div>
            <div className="overflow-x-auto">
                <table className="table w-3/5 mx-auto text-white">
                    <thead className=" ">
                        <tr className="bg-blue-700 text-white">
                            <th>#</th>
                            <th>Trainer Name</th>
                            <th>Trainer Email</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {
                            trainers.map((item, idx) => <tr className="text-" key={item._id}>

                                <td>{idx+1}</td>
                                <td>{item.trainerName}</td>
                                <td>{item.trainer_email}</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllTrainers;