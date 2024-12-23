import { Link } from "react-router-dom";


const Register = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <div className="min-h-screen flex flex-col items-center justify-center p-6">
                <div className="grid lg:grid-cols-2 items-center gap-6 max-w-7xl max-lg:max-w-xl w-full">
                    <form className="lg:max-w-md w-full">
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
                                    type="password"
                                    className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-4 focus:bg-transparent outline-blue-500 transition-all"
                                    placeholder="Enter password"
                                />
                            </div>
                            <div className="flex items-center">
                                <input
                                    id="terms"
                                    name="terms"
                                    type="checkbox"
                                    className="h-4 w-4 shrink-0 border-gray-300 rounded"
                                />
                                <label htmlFor="terms" className="ml-3 block text-sm text-gray-800">
                                    Show Password
                                </label>
                            </div>
                        </div>

                        <div className="mt-12">
                            <button
                                type="button"
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