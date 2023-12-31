import useNewsletter from "../../../Hooks/useNewsletter";


const AllSubscriber = () => {

    const [newsletter] = useNewsletter()

    return (
        <>
            <div className="w-2/5 mx-auto bg-red-500 my-3 rounded-lg">
                <h2 className="text-2xl text-center font-semibold py-3">Total Subscribers: {newsletter.length}</h2>
            </div>
            <div className="overflow-x-auto">
                <table className="table w-3/5 mx-auto text-white">
                    <thead className=" ">
                        <tr className="bg-blue-700 text-white">
                            <th>#</th>
                            <th>Name</th>
                            <th>Job</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            newsletter.map((item, idx) => <tr className="text-" key={item._id}>

                                <td>{idx+1}</td>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default AllSubscriber;