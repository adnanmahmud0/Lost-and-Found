import React, { useState, useEffect } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { FaMapPin, FaSearch, FaThLarge, FaList } from "react-icons/fa";

const LostAndFound = () => {
    const [loading, setLoading] = useState(true);
    const items = useLoaderData();
    const [searchQuery, setSearchQuery] = useState('');
    const [gridView, setGridView] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }, []);

    const filteredItems = items.filter(item =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.location.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="py-4 mx-auto max-w-7xl min-h-screen">
            <h1 className="md:text-6xl text-[#02C5BC] text-3xl font-bold animate__animated animate__bounce text-center mt-24">
                Lost and Found Items
            </h1>

            {/* Search Bar */}
            <div className="flex justify-between mt-6 mx-5">
                <div className="flex px-4 py-3 rounded-md border-2 border-[#02C5BC] max-w-md">
                    <input
                        type="text"
                        placeholder="Search items..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full outline-none bg-transparent text-gray-600 text-sm"
                    />
                    <FaSearch />
                </div>

                {/* Toggle Button */}
                <button 
                    onClick={() => setGridView(!gridView)}
                    className="flex items-center gap-2 px-4 py-2 border border-[#02C5BC] text-[#02C5BC] rounded hover:bg-[#02C5BC] hover:text-white transition-all"
                >
                    {gridView ? <FaList /> : <FaThLarge />}
                    {gridView ? "List View" : "Grid View"}
                </button>
            </div>

            {/* DaisyUI Loader */}
            {loading ? (
                <div className="flex justify-center items-center">
                    <span className="loading loading-spinner loading-lg text-[#02C5BC] min-h-screen"></span>
                </div>
            ) : gridView ? (
                // Grid View
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 m-5">
                    {filteredItems.map((item) => (
                        <div key={item._id} className="bg-white border border-slate-200 rounded-xl overflow-hidden transition-all hover:shadow-lg relative">
                            <div className="relative">
                                <img src={item.thumbnail} alt={item.title} className="w-full h-48 object-cover" />
                                <div className="absolute top-3 left-3">
                                    <span className={`text-white text-xs font-bold px-2 py-1 rounded ${item.postType === "Lost" ? "bg-yellow-500" : "bg-teal-500"}`}>
                                        {item.postType}
                                    </span>
                                </div>
                            </div>
                            <div className="p-4">
                                <h3 className="text-lg font-bold text-gray-800">{item.title}</h3>
                                <p className="text-gray-600 text-sm flex items-center gap-1">
                                    <FaMapPin className="text-red-500" /> {item.location}
                                </p>
                                <Link to={`/item/${item._id}`} className="block text-center mt-3 border border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white py-2 rounded transition-all">
                                    Details
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                // List View
                <div className="m-5">
                    {filteredItems.map((item) => (
                        <div key={item._id} className="bg-gray-100 flex flex-row rounded-md overflow-hidden shadow-md mb-4">
                            <img src={item.thumbnail} alt={item.title} className="w-32 h-32 object-cover" />
                            <div className="flex flex-col justify-between p-4 w-full">
                                <div>
                                    <h3 className="text-base font-bold text-gray-800">{item.title}</h3>
                                    <span className={`text-white text-xs font-bold px-2 py-1 rounded ${item.postType === "Lost" ? "bg-yellow-500" : "bg-teal-500"}`}>
                                        {item.postType}
                                    </span>
                                    <p className="text-sm text-gray-600 mt-1">{item.location}</p>
                                </div>
                                <Link to={`/item/${item._id}`} className="self-start bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-all">
                                    Details
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default LostAndFound;
