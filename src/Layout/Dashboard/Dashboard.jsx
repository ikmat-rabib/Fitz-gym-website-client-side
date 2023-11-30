import { NavLink, Outlet } from "react-router-dom";


const Dashboard = () => {
    return (
        <div className="text-white">
            <h2 className="text-center text-3xl font-extrabold bg-teal-700 py-2 text-slate-100">Dashboard</h2>
            <div className="flex">
                <div className="w-60 min-h-screen bg-sky-800">
                    <ul className="menu">
                        <li><NavLink className="text-lg " to='/dashboard/allSubacriber'>All Subacriber</NavLink>
                        </li>
                        <li><NavLink className="text-lg " to='/dashboard/allTrainers'>All Trainers</NavLink>
                        </li>
                        <li><NavLink className="text-lg " to='/dashboard/appliedTrainers'>Applied Trainers</NavLink>
                        </li>
                        <li><NavLink className="text-lg " to='/dashboard/balance'>Balance</NavLink>
                        </li>
                        <div className="divider"></div>
                        <li><NavLink className="text-lg " to='/'>Home</NavLink>
                        </li>
                    </ul>
                </div>
                <div className="flex-1">
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;