import React from 'react';
import { useLoaderData } from 'react-router-dom';

const AllRecoverdItem = () => {
    const items = useLoaderData();
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
                            </tr>
                        ))}
                    </tbody>
                </table>)}
        </div>
    );
};

export default AllRecoverdItem;