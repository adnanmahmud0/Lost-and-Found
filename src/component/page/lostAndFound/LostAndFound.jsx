import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const LostAndFound = () => {
    const items = useLoaderData();
    return (
        <div className="py-4 mx-auto max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 m-5">
                {
                    items.map( item =>
                        <div key={item._id} className="bg-gray-200 flex flex-col rounded-md cursor-pointer transition-all relative overflow-hidden">
                            <div className="p-4 sm:p-6">
                                <div className="w-full">
                                    <img src={item.thumbnail} alt="Product 1" className="w-full aspect-[230/220] object-contain" />
                                </div>
                            </div>

                            <div className="flex flex-col h-full bg-gray-100 p-4">
                                <div className="">
                                    <h3 className="text-sm sm:text-base font-bold text-gray-800">{item.title}</h3>
                                    {(item.status === "not-recovered") ? (
                                        <h1 className="absolute top-5 text-sm sm:text-sm text-white bg-blue-600 font-bold p-2 rounded-full">{item.postType}</h1>
                                    ) : (
                                        <h1 className="absolute top-5 text-sm sm:text-sm text-white bg-slate-600 font-bold p-2 rounded-full">Recovered</h1>
                                    )}
                                    

                                    <p className="text-sm sm:text-xs">{item.location}</p>
                                </div>

                                <Link to={`/item/${item._id}`} type="button" className="w-full flex items-center justify-center gap-2 mt-6 px-2 py-2.5 sm:px-4 bg-blue-600 hover:bg-blue-500 text-sm text-white font-semibold rounded-md transition-all">
                                    Details Page
                                </Link>
                            </div>
                        </div>
                    )
                    
                }

            </div>
        </div>
    );
};

export default LostAndFound;
