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
                    <p className="text-center text-gray-500">You don't have any recovered items.</p>
                ) : (
                    <table className="min-w-full bg-white rounded-lg shadow">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="p-4 text-left text-sm font-semibold text-black">Title & Description</th>
                                <th className="p-4 text-left text-sm font-semibold text-black">Location</th>
                                <th className="p-4 text-left text-sm font-semibold text-black">Date</th>
                                <th className="p-4 text-left text-sm font-semibold text-black">Status & Type</th>
                            </tr>
                        </thead>
                        <tbody>
                            {items.map((item) => (
                                <tr key={item._id} className="odd:bg-blue-50 border-b">
                                    <td className="p-4 text-sm">
                                        <div className="flex items-center gap-3">
                                            <img
                                                src={item.thumbnail}
                                                alt={item.title}
                                                className="w-10 h-10 rounded-md object-cover"
                                            />
                                            <div>
                                                <p className="font-medium text-black">{item.title}</p>
                                                <p className="text-xs text-gray-500">{item.description}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="p-4 text-sm">{item.location}</td>
                                    <td className="p-4 text-sm">{item.xDateLost}</td>
                                    <td className="p-4 text-sm">
                                        <div>
                                            <p className="text-sm font-medium">{item.status}</p>
                                            <p className="text-xs text-gray-500">{item.postType}</p>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
};

export default AllRecoverdItem;
