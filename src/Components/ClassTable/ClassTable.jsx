import useClasses from "../../Hooks/useClasses";


const ClassTable = () => {

    const [classes] = useClasses()

    const daysOfWeek = Array.from(new Set(classes.map(item => item.day)));
    const timeSlots = Array.from(new Set(classes.map(item => item.slot)));

    return (
        <>
            <table className="glass rounded-b-2xl w-5/6 mx-auto" border="2">
                <thead className="bg-[#219bff] text-white m-5">
                    <tr className="">
                        <th className=" py-3 text-center">Day vs Time</th>
                        {timeSlots.map(slot => (
                            <th className="py-3  text-center bg-red-500" key={slot}>{slot}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {daysOfWeek.map(day => (
                        <tr key={day}>
                            <td className="py-3 text-white text-center">{day}</td>
                            {timeSlots.map(slot => (
                                <td className="text-center border-b-2" key={slot}>
                                    {classes
                                        .filter(item => item.day === day && item.slot === slot).map(item => item.name).join(', ')}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
{/* <h3 className="text-2xl font-semibold text-white text-center my-3">The <span className="text-[#219bff]">Schedule</span></h3> */}
        </>
    );
};

export default ClassTable;

