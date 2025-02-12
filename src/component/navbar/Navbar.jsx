import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../authProvider/AuthProvider";
import  WhereIsIt  from "../../assets/whereIsIt.png";
import Swal from 'sweetalert2';


const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);
    const navigate = useNavigate();

    const link = <>
        <li><Link to="/" className="">Home</Link></li>
        <li><Link to="/lost-and-found" className="">Lost & Found</Link></li>
        <li><Link to="/contact" className="">Contact</Link></li>
    </>

    const handelLogout = () => {
        logOut()
        .then(() => {
            Swal.fire({
              title: "Good job!",
              text: "Logged out successfully!",
              icon: "success",
            });
            navigate("/");
          })
          .catch((error) => Swal.fire("Error", error.message, "error"));

    }


    return (
        <div className="">
            <div className="navbar max-w-7xl mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">{link}
                        </ul>
                    </div>
                    <div className="flex items-center space-x-2">
                        <img src={WhereIsIt} alt="" className="w-10 h-10" />
                        <a className="font-extrabold text-lg">WhereIsIt</a>
                    </div>
                    
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {link}
                    </ul>
                </div>
                <div className="navbar-end space-x-5">
                    {user ? (
                        <div className="flex items-center space-x-5">
                            <div className="dropdown dropdown-end relative group">
                                <div
                                    tabIndex={0}
                                    role="button"
                                    className="btn btn-ghost btn-circle avatar"
                                >
                                    <div className="w-10 rounded-full">
                                        <img
                                            alt={user.displayName}
                                            src={user.photoURL}
                                        />
                                    </div>
                                </div>

                                <span className="absolute top-12 left-1/2 -translate-x-1/2 scale-0 rounded bg-gray-800 p-2 text-sm text-white opacity-0 shadow-lg transition-all duration-300 group-hover:scale-100 group-hover:opacity-100">
                                    {user.displayName}
                                </span>

                                <ul
                                    tabIndex={0}
                                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-60 p-2 shadow"
                                >
                                    <li><Link to="/add-items">Add Lost & Found Item Page</Link></li>
                                    <li><Link to={`/all-recoverd-items`}>All Recovered Items Page</Link></li>
                                    <li><Link to={`/my-items`}>Manage My Items Page</Link></li>
                                </ul>
                            </div>
                            <div>
                                <a className="btn" onClick={handelLogout}>Logout</a>
                            </div>
                        </div>

                    ) : (
                        <>
                            <div>
                                <Link className="btn" to="/login">Login</Link>
                            </div>
                            <div>
                                <Link className="btn" to="/register">Register</Link>
                            </div>
                        </>

                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;