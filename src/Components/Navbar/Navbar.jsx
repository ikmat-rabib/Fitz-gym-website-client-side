import { Link } from "react-router-dom";




const Navbar = () => {

    const navOptions = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/trainers'>Our Trainers</Link></li>
        <li><Link>Gallery</Link></li>
        <li><Link>Classes</Link></li>
        <li><Link>Blogs</Link></li>
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
                        <a className="btn btn-outline bg-[#0167BB] text-white hover:bg-[#08406d] hover:text-white hover:border-0">Button</a>
                    </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Navbar;