import { IoIosMail } from "react-icons/io";
import { Link, useNavigate } from 'react-router-dom';
import { FaGoogle } from "react-icons/fa";
import Swal from 'sweetalert2';
import { useContext, useState } from 'react';
import { TbPassword } from "react-icons/tb";
import { AuthContext } from '../authProvider/AuthProvider';
import axios from "axios";

const Login = () => {
    const { loginUser, loginWithGoogle } = useContext(AuthContext);
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);

    const togglePassword = () => {
        setShowPassword((prev) => !prev);
    };

    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // Validation checks
        if (!email || !password) {
            Swal.fire({
                icon: "error",
                title: "Validation Error",
                text: "All fields are required.",
            });
            return;
        }

        if (!emailRegex.test(email)) {
            Swal.fire({
                icon: "error",
                title: "Email Error",
                text: "Please enter a valid email address.",
            });
            return;
        }

        if (!passwordRegex.test(password)) {
            Swal.fire({
                icon: "error",
                title: "Password Error",
                text: "Password must contain at least one uppercase letter, one lowercase letter, and be at least 6 characters long.",
            });
            return;
        }

        console.log(email, password);

        loginUser(email, password)
            .then(result => {
                e.target.reset();
                Swal.fire({
                    title: "Good job!",
                    text: "Login Successfully!",
                    icon: "success"
                });
                const user = { email: email}
                axios.post('http://localhost:5000/jwt', user, { withCredentials: true })
                .then(res => {
                    console.log(res.data);
                })
                navigate('/');
            })
            .catch(error => {
                Swal.fire({
                    title: "Error!",
                    text: error.message,
                    icon: "error"
                });
            });
    };

    const handleGoogleLogin = () => {
        loginWithGoogle()
        .then(result => {
            Swal.fire({
                title: "Good job!",
                text: "Login Successfully!",
                icon: "success"
            });
            navigate('/');
        })
        .then(error => Swal.fire({
            title: "Error!",
            text: error.message,
            icon: "error"
        }));
    }

    return (
        <div>
            <div className="">
                <div className="min-h-screen flex flex-col items-center justify-center py-6 px-4">
                    <div className="grid md:grid-cols-2 items-center gap-4 max-w-6xl w-full">
                        <div className="border border-gray-300 rounded-lg p-6 max-w-md shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)] max-md:mx-auto">
                            <form onSubmit={handleLogin} className="space-y-4">
                                <div className="mb-8">
                                    <h3 className="text-gray-800 text-3xl font-extrabold">Sign in</h3>
                                    <p className="text-gray-500 text-sm mt-4 leading-relaxed">
                                        Sign in to your account and explore a world of possibilities. Your journey begins here.
                                    </p>
                                </div>

                                <div>
                                    <label className="text-gray-800 text-sm mb-2 block">Email</label>
                                    <div className="relative flex items-center">
                                        <input
                                            name="email"
                                            type="email"
                                            className="w-full text-sm text-gray-800 border border-gray-300 px-4 py-3 rounded-lg outline-blue-600"
                                            placeholder="Enter user email"
                                        />
                                        <IoIosMail className="absolute right-4 text-gray-400" />
                                    </div>
                                </div>
                                <div>
                                    <label className="text-gray-800 text-sm mb-2 block">Password</label>
                                    <div className="relative flex items-center">
                                        <input
                                            name="password"
                                            type={showPassword ? "text" : "password"}
                                            className="w-full text-sm text-gray-800 border border-gray-300 px-4 py-3 rounded-lg outline-blue-600"
                                            placeholder="Enter password"
                                        />
                                        <TbPassword className="absolute right-4 text-gray-400" />
                                    </div>
                                </div>

                                <div className="flex flex-wrap items-center justify-between gap-4">
                                    <div className="flex items-center">
                                        <input
                                            onClick={togglePassword}
                                            type="checkbox"
                                            className="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                                        />
                                        <label  htmlFor="remember-me" className="ml-3 block text-sm text-gray-800">
                                            Show Password
                                        </label>
                                    </div>

                                    <div className="text-sm">
                                        <Link to="/forget-password" className="text-blue-600 hover:underline font-semibold">
                                            Forgot your password?
                                        </Link>
                                    </div>
                                </div>

                                <div className="!mt-8">
                                    <button
                                        type="submit"
                                        className="w-full shadow-xl py-3 px-4 text-sm tracking-wide rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
                                    >
                                        Log in
                                    </button>
                                </div>
                                <div className="text-center text-gray-800 text-sm mt-4">
                                    OR
                                </div>
                                <div>
                                    <button
                                        onClick={handleGoogleLogin}
                                        type="button"
                                        className="w-full shadow-xl py-3 px-4 text-sm tracking-wide rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
                                    >
                                        <FaGoogle className="inline-block mr-2" />
                                        Sign in with Google
                                    </button>
                                </div>

                                <p className="text-sm !mt-8 text-center text-gray-800">
                                    Don't have an account{' '}
                                    <Link to="/register" className="text-blue-600 font-semibold hover:underline ml-1 whitespace-nowrap">
                                        Register here
                                    </Link>
                                </p>
                            </form>
                        </div>
                        <div className="lg:h-[400px] md:h-[300px] max-md:mt-8">
                            <img
                                src="https://readymadeui.com/login-image.webp"
                                className="w-full h-full max-md:w-4/5 mx-auto block object-cover"
                                alt="Dining Experience"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;