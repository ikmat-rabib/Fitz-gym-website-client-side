import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";




const Navbar = () => {

    const { user, logOut } = useContext(AuthContext)

    const handleSignOut = () => {
        logOut()
            .then()
            .catch()
    }

    const navOptions = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/trainers'>Our Trainers</Link></li>
        <li><Link to='/gallery'>Gallery</Link></li>
        <li><Link to='/classes'>Classes</Link></li>
        <li><Link to='/forum'>Forum</Link></li>
    </>

    return (
        <>
            <div className=" bg-[#0167BB] text-white">
                <div className="max-w-6xl mx-auto ">
                    <div className="navbar">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#0167BB] rounded-box w-52">
                                {navOptions}
                            </ul>
                        </div>
                        <a className="btn btn-ghost text-xl">FitZ</a>
                    </div>

                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {navOptions}
                        </ul>
                    </div>

                    <div className="navbar-end">
                    {
                        user ?
                            <div className="dropdown dropdown-end dropdown-hover ">
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar ">
                                    
                                        <img className="w-10 rounded-full" src={user.photoURL} />
                                    
                                </label>
                                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-[#0167BB] text-white rounded-box w-52">
                                    <li><span><small className=" ">User: {user.displayName}</small></span></li>
                                    <li><span><small className=" ">Email: {user.email}</small></span></li>
                                    <li><button onClick={handleSignOut} className="btn btn-sm bg-[#0167BB] hover:bg-[#219bff] text-white rounded-md uppercase hover:scale-105 hover:-skew-x-6 hover:border-0">Sign Out</button></li>
                                </ul>
                            </div>
                            :
                            <div className="space-x-3 flex  items-center">
                                <Link to='/login'>
                                    <button className="btn btn-sm bg-[#0167BB] hover:bg-[#219bff]  text-white rounded-md uppercase hover:scale-110 hover:-skew-x-12 hover:border-0">Login</button>
                                </Link>
                                <p>or</p>
                                <Link to='/register'>
                                    <button className="btn btn-sm bg-[#0167BB] hover:bg-[#219bff]  text-white rounded-md uppercase hover:scale-110 hover:-skew-x-12 hover:border-0">Register</button>
                                </Link>
                            </div>
                    }
                    </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Navbar;