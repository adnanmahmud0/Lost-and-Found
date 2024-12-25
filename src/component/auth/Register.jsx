import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';
import { AuthContext } from "../authProvider/AuthProvider";

const Register = () => {
    const { createUser,  } = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false);

    const togglePassword = () => {
        setShowPassword((prev) => !prev);
    };

    const handleRegister = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const photo = e.target.photo.value;
        const password = e.target.password.value;

        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // Validation checks
        if (!name || !email || !photo || !password) {
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

        createUser(email, password);
            

        // Success Message
        Swal.fire({
            icon: "success",
            title: "Registration Successful",
            text: "You have successfully registered!",
        });

        // Clear the form
        e.target.reset();
    };

    return (
        <div className="max-w-7xl mx-auto">
            <div className="min-h-screen flex flex-col items-center justify-center p-6">
                <div className="grid lg:grid-cols-2 items-center gap-6 max-w-7xl max-lg:max-w-xl w-full">
                    <form onSubmit={handleRegister} className="lg:max-w-md w-full">
                        <h3 className="text-gray-800 text-3xl font-extrabold mb-12">Registration</h3>
                        <div className="space-y-6">
                            <div>
                                <label className="text-gray-800 text-sm mb-2 block">Name</label>
                                <input
                                    name="name"
                                    type="text"
                                    className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-4 focus:bg-transparent outline-blue-500 transition-all"
                                    placeholder="Enter name"
                                />
                            </div>
                            <div>
                                <label className="text-gray-800 text-sm mb-2 block">Email</label>
                                <input
                                    name="email"
                                    type="text"
                                    className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-4 focus:bg-transparent outline-blue-500 transition-all"
                                    placeholder="Enter email"
                                />
                            </div>
                            <div>
                                <label className="text-gray-800 text-sm mb-2 block">Photo URL</label>
                                <input
                                    name="photo"
                                    type="text"
                                    className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-4 focus:bg-transparent outline-blue-500 transition-all"
                                    placeholder="Enter photo URL"
                                />
                            </div>
                            <div>
                                <label className="text-gray-800 text-sm mb-2 block">Password</label>
                                <input
                                    name="password"
                                    type={showPassword ? "text" : "password"}
                                    className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-4 focus:bg-transparent outline-blue-500 transition-all"
                                    placeholder="Enter password"
                                />
                            </div>
                            <div className="flex items-center">
                                <input
                                    onClick={togglePassword}
                                    id="togglePassword"
                                    name="togglePassword"
                                    type="checkbox"
                                    className="h-4 w-4 shrink-0 border-gray-300 rounded"
                                />
                                <label htmlFor="togglePassword" className="ml-3 block text-sm text-gray-800">
                                    Show Password
                                </label>
                            </div>
                        </div>

                        <div className="mt-12">
                            <button
                                type="submit"
                                className="py-4 px-8 text-sm font-semibold text-white tracking-wide bg-blue-600 hover:bg-blue-700 focus:outline-none"
                            >
                                Create an account
                            </button>
                        </div>
                        <p className="text-sm text-gray-800 mt-6">
                            Already have an account?{' '}
                            <Link to="/login" className="text-blue-600 font-semibold hover:underline ml-1">
                                Login here
                            </Link>
                        </p>
                    </form>

                    <div className="h-full max-lg:mt-12">
                        <img
                            src="https://readymadeui.com/login-image.webp"
                            className="w-full h-full object-cover"
                            alt="Dining Experience"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
