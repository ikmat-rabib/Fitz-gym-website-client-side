import { useContext, useState } from "react";
import { FaGoogle } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { updateProfile } from "firebase/auth";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";


const RegisterPage = () => {

    const { createUser, handleGoogleSignIn } = useContext(AuthContext)

    const [registerError, setRegisterError] = useState('')
    const [success, setSuccess] = useState('')

    console.log(success, registerError);

    const navigate = useNavigate()

    const handleRegister = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);

        const name = form.get('name')
        const photo = form.get('photo')
        const email = form.get('email')
        const password = form.get('password')
        console.log(name, email, password, photo);

        if (password.length < 6) {
            setRegisterError('Password must be at least 6 character or longer');
            return;
        } else if (!/[A-Z]/.test(password)) {
            setRegisterError('Password must have at least one Uppercase character');
            return
        } else if (!/[#?!@$%^&*-]/.test(password)) {
            setRegisterError('Password must have at least 1 special character')
            return;
        }

        setRegisterError('');
        setSuccess('');

        createUser(email, password)
            .then(result => {
                console.log(result.user)
                setSuccess('Registration Successful')

                updateProfile(result.user, {
                    displayName: name,
                    photoURL: photo
                })
                    .then()
                    .catch()

                toast.success('Registration Successful', {
                    position: "top-center",
                    autoClose: 4000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
                navigate('/')
            })
            .catch(error => {
                console.error(error)
                setRegisterError(error.message);
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
                                <h1 className="text-5xl font-bold text-center">Register Now!</h1>
                                <img className="w-" src="https://i.ibb.co/N7fVq2L/register.jpg" alt="" />
                            </div>
                            <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

                                <form onSubmit={handleRegister} className="card-body">

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Name</span>
                                        </label>
                                        <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                                    </div>

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Email</span>
                                        </label>
                                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                                    </div>

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Photo URL</span>
                                        </label>
                                        <input type="text" name="photo" placeholder="photo" className="input input-bordered" required />
                                    </div>

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Password</span>
                                        </label>
                                        <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                    </div>

                                    <div className="form-control mt-6">

                                        <input className="btn bg-[#0167BB] hover:bg-[#219bff] w-full text-white rounded-md uppercase hover:scale-110 hover:-skew-x-12 hover:border-0" type="submit" value="Register" />
                                    </div>

                                </form>

                                <div className="text-white text-center mb-8">
                                    <p>or,</p>
                                    <h3 className="text-2xl font-semibold">Sign in with</h3>
                                    <button onClick={handleGoogleSignIn} className="p-3 my-3 text-3xl bg-[#0167BB] hover:bg-[#219bff] text-white rounded-md uppercase hover:scale-110 hover:rounded-full hover:border-0"> <FaGoogle></FaGoogle> </button>
                                    <p className="mb-6">Already have an account? <Link className=" font-bold text-[#219bff]" to='/login'>Login Here.</Link></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default RegisterPage;