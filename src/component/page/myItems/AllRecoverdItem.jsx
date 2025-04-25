import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../authProvider/AuthProvider';
import axios from 'axios';

const AllRecoverdItem = () => {
    const { user } = useContext(AuthContext);
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!user?.email) return;

        const fetchItems = async () => {
            try {
                const response = await axios.get(
                    `https://whereisit-api-server.vercel.app/recovered-item?email=${user.email}`
                );
                setItems(response.data);
            } catch (error) {
                console.error("Error fetching items:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchItems();
    }, [user?.email]);

    return (
        <div className='max-w-7xl mx-auto px-4'>
            <div className="overflow-x-auto pt-20">
                {loading ? (
                    <div className="flex justify-center items-center min-h-screen">
                        <span className="loading loading-spinner loading-lg text-[#02C5BC]"></span>
                    </div>
                ) : items.length === 0 ? (
                    <p className="text-center text-gray-500 dark:text-gray-400">
                        You don't have any recovered items.
                    </p>
                ) : (
                    <div className="rounded-lg shadow bg-base-100 text-base-content">
                        <table className="table w-full">
                            <thead className="bg-base-200 text-base-content">
                                <tr>
                                    <th className="p-4 text-sm font-semibold">Title & Description</th>
                                    <th className="p-4 text-sm font-semibold">Location</th>
                                    <th className="p-4 text-sm font-semibold">Date</th>
                                    <th className="p-4 text-sm font-semibold">Status & Type</th>
                                </tr>
                            </thead>
                            <tbody>
                                {items.map((item) => (
                                    <tr key={item._id} className="hover:bg-base-300">
                                        <td className="p-4">
                                            <div className="flex items-center gap-3">
                                                <img
                                                    src={item.thumbnail}
                                                    alt={item.title}
                                                    className="w-10 h-10 rounded-md object-cover"
                                                />
                                                <div>
                                                    <p className="font-medium">{item.title}</p>
                                                    <p className="text-xs text-gray-500 dark:text-gray-400">{item.description}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="p-4">{item.location}</td>
                                        <td className="p-4">{item.xDateLost}</td>
                                        <td className="p-4">
                                            <p>{item.status}</p>
                                            <p className="text-xs text-gray-500 dark:text-gray-400">{item.postType}</p>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AllRecoverdItem;
