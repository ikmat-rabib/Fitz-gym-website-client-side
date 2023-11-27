import { FaGoogle } from "react-icons/fa6";
import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import { Helmet } from "react-helmet-async";


const LoginPage = () => {

    const { signIn, handleGoogleSignIn } = useContext(AuthContext);
    const [loginError, setLoginError] = useState('')
    const [success, setSuccess] = useState('')

    console.log(loginError, success);

    const location = useLocation();
    const navigate = useNavigate()
    console.log('location of login page', location);


    const handleLogin = e => {
        e.preventDefault()

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);


        if (password.length < 6) {
            setLoginError('Password must be at least 6 character or longer');
            return;
        } else if (!/[A-Z]/.test(password)) {
            setLoginError('Password must have at least one Uppercase character');
            return
        } else if (!/[#?!@$%^&*-]/.test(password)) {
            setLoginError('Password must have at least 1 special character')
            return;
        }

        setLoginError('');
        setSuccess('');

        signIn(email, password)
            .then(result => {
                console.log(result.user)
                toast.success('Login Successful', {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                })
                navigate(location?.state ? location.state : '/')
            })
            .catch(() => {
                toast.error("User Email/Password doesn't match", {
                    position: "top-center",
                    autoClose: 3500,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
            })

    }

    const googleLogin = () => {
        handleGoogleSignIn()
            .then(() => {
                toast.success('Login Successful', {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                })
                navigate(location?.state ? location?.state : '/')
            })

    }

    return (
        <>
            <Helmet>
                <title>FitZ | Login</title>
            </Helmet>
            <div className="bg-white">
                <div className="max-w-6xl mx-auto ">
                    <div className="hero min-h-screen ">
                        <div className="hero-content flex-col lg:flex-row  rounded-xl  bg-white">
                            <div className="text-center lg:text-left space-y-5 text-[#0167BB]">
                                <h1 className="text-5xl font-bold text-center">Login now!</h1>
                                <img className="w-" src="https://i.ibb.co/hm9059Y/Tiny-people-carrying-key-to-open-padlock.jpg" alt="" />
                            </div>
                            <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-blue-200">
                                <form onSubmit={handleLogin} className="card-body py-5">
                                    <div className="form-control">

                                        <label className="label">
                                            <span className="label-text text-[#0167BB]">Email</span>
                                        </label>
                                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                                    </div>

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-[#0167BB]">Password</span>
                                        </label>
                                        <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                    </div>

                                    <div className="form-control mt-6">

                                        <input className="btn bg-[#0167BB] hover:bg-[#219bff] w-full text-white rounded-md uppercase hover:scale-110 hover:-skew-x-12 border-0" type="submit" value="Login" />
                                    </div>

                                </form>

                                <div className="text-slate-600 text-center mb-8">
                                    <h3 className="text-lg font-semibold">Or, Sign in with</h3>
                                    <button onClick={googleLogin} className="p-3 my-3 text-3xl bg-[#0167BB] hover:bg-[#219bff] text-white rounded-md uppercase hover:scale-110 hover:rounded-full hover:border-0"> <FaGoogle></FaGoogle> </button>
                                    <p className="">Do not have an account? <Link className=" font-bold text-[#219bff]" to='/register'>Register Here.</Link></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LoginPage;