import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { LuLayoutList } from "react-icons/lu";
import { LuLayoutGrid } from "react-icons/lu";



const LostAndFound = () => {
    const items = useLoaderData();
    const [searchQuery, setSearchQuery] = useState('');

    const filteredItems = items.filter(item =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.location.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const [gradView, setGradView] = useState(true);
    const [listView, setListView] = useState(false);

    const greed = () => {
        setGradView(true);
        setListView(false);
    }
    const list = () => {
        setGradView(false);
        setListView(true);
    }

    return (
        <div className="py-4 mx-auto max-w-7xl">
            <div>
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 text-center">Lost and Found Items</h1>
            </div>
            <div className="flex justify-between mt-6 mx-5">
                <div>
                    <div className="flex px-4 py-3 rounded-md border-2 border-blue-500 overflow-hidden max-w-md mx-auto mt-5">
                        <input
                            type="text"
                            placeholder="Search items..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full outline-none bg-transparent text-gray-600 text-sm"
                        />
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 192.904 192.904"
                            width="16px"
                            className="fill-gray-600"
                        >
                            <path d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z">
                            </path>
                        </svg>
                    </div>
                </div>
                <div className='flex gap-4 justify-center items-center'>
                    <LuLayoutGrid onClick={greed} className='size-7 cursor-pointer' />
                    <LuLayoutList onClick={list} className='size-7 cursor-pointer' />
                </div>
            </div>
            {gradView && (
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 m-5">
                    {filteredItems.map(item => (
                        <div key={item._id} className="bg-gray-200 flex flex-col rounded-md cursor-pointer transition-all relative overflow-hidden">
                            <div className="p-4 sm:p-6">
                                <div className="w-full">
                                    <img src={item.thumbnail} alt="Product 1" className="w-full aspect-[230/220] object-contain" />
                                </div>
                            </div>
                            <div className="flex flex-col h-full bg-gray-100 p-4">
                                <div className="">
                                    <h3 className="text-sm sm:text-base font-bold text-gray-800">{item.title}</h3>
                                    {item.status === "not-recovered" ? (
                                        <h1 className="absolute top-5 text-sm sm:text-sm text-white bg-blue-600 font-bold p-2 rounded-full">{item.postType}</h1>
                                    ) : (
                                        <h1 className="absolute top-5 text-sm sm:text-sm text-white bg-slate-600 font-bold p-2 rounded-full">Recovered</h1>
                                    )}
                                    <p className="text-sm sm:text-xs">{item.location}</p>
                                </div>
                                <Link to={`/item/${item._id}`} className="btn bg-blue-600 mt-3 text-white hover:underline">Details</Link>
                            </div>
                        </div>
                    ))}
                </div>
            )}
            {listView && (
                <div>
                    {filteredItems.map(item => (
                        <div className="m-5">
                            <div key={item._id} className="bg-gray-200 flex flex-row rounded-md cursor-pointer transition-all relative overflow-hidden">
                                <div className="p-4 sm:p-6 flex-shrink-0">
                                    <img src={item.thumbnail} alt="Product 1" className="w-24 h-24 sm:w-32 sm:h-32 object-contain" />
                                </div>
                                <div className="flex flex-col justify-between flex-grow bg-gray-100 p-4">
                                    <div>
                                        <h3 className="text-sm sm:text-base font-bold text-gray-800">{item.title}</h3>
                                        {item.status === "not-recovered" ? (
                                            <h1 className="inline-block text-sm sm:text-sm text-white bg-blue-600 font-bold px-3 py-1 rounded-full">{item.postType}</h1>
                                        ) : (
                                            <h1 className="inline-block text-sm sm:text-sm text-white bg-slate-600 font-bold px-3 py-1 rounded-full">Recovered</h1>
                                        )}
                                        <p className="text-sm sm:text-xs mt-1">{item.location}</p>
                                    </div>
                                    <Link to={`/item/${item._id}`} className="btn bg-blue-600 mt-3 text-white hover:underline self-start">Details</Link>
                                </div>
                            </div>
                        </div>

                    ))}

                </div>
            )}
        </div>
    );
};

export default LostAndFound;