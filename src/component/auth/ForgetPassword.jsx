import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../authProvider/AuthProvider";
import Swal from 'sweetalert2';

const ForgetPassword = () => {

    const { forgetPassword } = useContext(AuthContext);



    const handleForgetPassword = (e) => {
        e.preventDefault();
        const email = e.target.email.value;

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        console.log(email);

        // Validation checks
        if (!email) {
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

        forgetPassword(email)
            .then(() => {
                Swal.fire({
                    title: "Good job!",
                    text: "Email send Successfully!",
                    icon: "success"
                });
                window.location.href = "https://mail.google.com/";
            })
            .catch((error) => {
                const errorMessage = error.message || "Something went wrong!";
                Swal.fire({
                    title: "Good job!",
                    text: errorMessage,
                    icon: "error"
                });
            });
    };

    return (
        <div className="">
            <div className="min-h-screen flex flex-col items-center justify-center py-6 px-4">
                <div className="grid md:grid-cols-2 items-center gap-4 max-w-6xl w-full">
                    <div className="border border-gray-300 rounded-lg p-6 max-w-md shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)] max-md:mx-auto">
                        <form onSubmit={handleForgetPassword} className="space-y-4">
                            <div className="mb-8">
                                <h3 className="text-gray-800 text-3xl font-extrabold">Forgot Password</h3>
                                <p className="text-gray-500 text-sm mt-4 leading-relaxed">Enter your email address below to receive a password reset link.</p>
                            </div>

                            <div>
                                <label className="text-gray-800 text-sm mb-2 block">Email Address</label>
                                <div className="relative flex items-center">
                                    <input
                                        name="email"
                                        type="email"

                                        className="w-full text-sm text-gray-800 border border-gray-300 px-4 py-3 rounded-lg outline-blue-600"
                                        placeholder="Enter email address"
                                    />
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-[18px] h-[18px] absolute right-4" viewBox="0 0 24 24">
                                        <path d="M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zM4 6h16l.001 4H4V6zM4 12h16v6H4v-6z" data-original="#000000"></path>
                                    </svg>
                                </div>
                            </div>

                            <div className="!mt-8">
                                <button
                                    type="submit"
                                    className="w-full shadow-xl py-3 px-4 text-sm tracking-wide rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none">
                                    Send Reset Link
                                </button>
                            </div>

                            <p className="text-sm !mt-8 text-center text-gray-800">
                                Remember your password?
                                <Link to="/login" className="text-blue-600 font-semibold hover:underline ml-1 whitespace-nowrap">
                                    Login
                                </Link>
                            </p>
                        </form>
                    </div>
                    <div className="lg:h-[400px] md:h-[300px] max-md:mt-8">
                        <img
                            src="https://readymadeui.com/login-image.webp"
                            className="w-full h-full max-md:w-4/5 mx-auto block object-cover"
                            alt="Forgot Password Image"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ForgetPassword;
