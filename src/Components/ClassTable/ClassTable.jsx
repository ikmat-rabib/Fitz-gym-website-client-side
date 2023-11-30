import useClasses from "../../Hooks/useClasses";


const ClassTable = () => {

    const [classes] = useClasses()

    const daysOfWeek = Array.from(new Set(classes.map(item => item.day)));
    const timeSlots = Array.from(new Set(classes.map(item => item.slot)));

    return (
        <>
            <table className="glass w-5/6 mx-auto shadow-xl" border="2">
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
                                <td className="text-center border-r border-b-2 text-slate-50" key={slot}>
                                    {classes
                                        .filter(item => item.day === day && item.slot === slot).map(item => item.name).join(', ')}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default ClassTable;

