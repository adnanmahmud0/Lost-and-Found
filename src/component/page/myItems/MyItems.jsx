import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../authProvider/AuthProvider';
import axios from 'axios';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const MyItems = () => {
    const { user } = useContext(AuthContext);
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!user?.email) return;

        const fetchItems = async () => {
            try {
                const response = await axios.get(`https://whereisit-api-server.vercel.app/useritems?email=${user.email}`);
                setItems(response.data);
            } catch (error) {
                console.error("Error fetching items:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchItems();
    }, [user?.email]);

    const handleDelete = async (id) => {
        const result = await Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        });

        if (result.isConfirmed) {
            await axios.delete(`https://whereisit-api-server.vercel.app/items/${id}`);
            setItems((prev) => prev.filter(item => item._id !== id)); // update state immediately
            Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
            });
        }
    };

    return (
        <div className="overflow-x-auto pt-20 max-w-7xl mx-auto px-4">
            {loading ? (
                <div className="flex justify-center items-center min-h-screen">
                    <span className="loading loading-spinner loading-lg text-[#02C5BC]"></span>
                </div>
            ) : items.length === 0 ? (
                <p className="text-center text-gray-500 dark:text-gray-400">You don't have any posts</p>
            ) : (
                <div className="rounded-lg shadow bg-base-100 text-base-content">
                    <table className="table w-full">
                        <thead className="bg-base-200 text-base-content">
                            <tr>
                                <th className="p-4 text-sm font-semibold">Title & Description</th>
                                <th className="p-4 text-sm font-semibold">Location</th>
                                <th className="p-4 text-sm font-semibold">Date</th>
                                <th className="p-4 text-sm font-semibold">Status & Post Type</th>
                                <th className="p-4 text-sm font-semibold">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {items.map((item) => (
                                <tr key={item._id} className="hover:bg-base-300">
                                    <td className="p-4 text-sm">
                                        <div className="flex items-center gap-3">
                                            <img
                                                src={item.thumbnail}
                                                alt={item.title}
                                                className="w-10 h-10 rounded-md object-cover"
                                            />
                                            <div>
                                                <p className="text-sm font-medium">{item.title}</p>
                                                <p className="text-xs text-gray-500 dark:text-gray-400">{item.description}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="p-4 text-sm">{item.location}</td>
                                    <td className="p-4 text-sm">{item.xDateLost}</td>
                                    <td className="p-4 text-sm">
                                        <p>{item.status}</p>
                                        <p className="text-xs text-gray-500 dark:text-gray-400">{item.postType}</p>
                                    </td>
                                    <td className="p-4">
                                        <Link
                                            className="mr-4"
                                            title="Edit"
                                            to={`/edit-my-items/${item._id}`}
                                            aria-label="Edit"
                                        >
                                            ✏️
                                        </Link>
                                        <button
                                            className="mr-4"
                                            title="Delete"
                                            onClick={() => handleDelete(item._id)}
                                            aria-label="Delete"
                                        >
                                            🗑️
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default MyItems;
