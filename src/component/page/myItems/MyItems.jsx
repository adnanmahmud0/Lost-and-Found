import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../authProvider/AuthProvider';
import axios from 'axios';
import Swal from 'sweetalert2';
import { Link, useLoaderData } from 'react-router-dom';



const MyItems = () => {

    const { user } = useContext(AuthContext);
    const [items, setItems] = useState([]);
    


    useEffect(() => {
        const fetchItems = async () => {
            try {
                const response = await axios.get(`https://whereisit-api-server.vercel.app/useritems?email=${user.email}`);
                setItems(response.data);
            } catch (error) {
                console.error("Error fetching items:", error);
            }
        };

        fetchItems();
    }, [user.email]);

    console.log(items);

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`https://whereisit-api-server.vercel.app/items/${id}`);
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
            }
        });

    };

    return (
        <div className="overflow-x-auto">
            {items.length === 0 ? (
                <p className="text-center text-gray-500">You don't have any posts</p>
            ) : (
                <table className="min-w-full bg-white">
                    <thead className="whitespace-nowrap">
                        <tr>
                            <th className="p-4 text-left text-sm font-semibold text-black">Title & Description </th>
                            <th className="p-4 text-left text-sm font-semibold text-black">Location</th>
                            <th className="p-4 text-left text-sm font-semibold text-black">Date</th>
                            <th className="p-4 text-left text-sm font-semibold text-black">Status & Post Type</th>
                            <th className="p-4 text-left text-sm font-semibold text-black">Action</th>
                        </tr>
                    </thead>
                    <tbody className="whitespace-nowrap">
                        {items.map((item) => (
                            <tr key={item.id} className="odd:bg-blue-50">
                                <td className="p-4 text-sm">
                                    <div className="flex items-center cursor-pointer w-max">
                                        <img
                                            src={item.thumbnail}
                                            alt={item.title}
                                            className="w-9 h-9 rounded-md shrink-0"
                                        />
                                        <div className="ml-4">
                                            <p className="text-sm text-black">{item.title}</p>
                                            <p className="text-xs text-gray-500">{item.description}</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="p-4 text-sm">
                                    <div className="">
                                        <div

                                        >{item.location}</div>
                                    </div>
                                </td>
                                <td className="p-4 text-sm">{item.xDateLost}</td>
                                <td className="p-4 text-sm">
                                    <div className="ml-4">
                                        <p className="text-sm text-black">{item.status}</p>
                                        <p className="text-xs text-gray-500">{item.postType}</p>
                                    </div>
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
                </table>)}
        </div>
    );
};

export default MyItems;
