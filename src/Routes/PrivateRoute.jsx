import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()
    console.log(location.pathname);

    if (loading) {
        return <div className="flex justify-center items-center min-h-screen">

            <span className="loading loading-ring loading-lg text-[#219bff]"></span>

            {/* <span className="loading loading-spinner text-info"></span> */}

        </div>
    }

    if (user) {
        return children;
    }

    return <Navigate to='/login' state={location.pathname} ></Navigate>
};

export default PrivateRoute;