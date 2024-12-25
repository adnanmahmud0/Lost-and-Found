import { useLoaderData } from "react-router-dom";
import React, { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AuthContext } from "../../authProvider/AuthProvider";
import axios from "axios";

const Item = () => {
    const item = useLoaderData();
    const { user } = useContext(AuthContext);
    console.log(item);
    const [showModal, setShowModal] = useState(false);
    const [recoveredDate, setRecoveredDate] = useState(new Date());
    const [recoveredLocation, setRecoveredLocation] = useState("");

    const handleModalSubmit = () => {

        
        const item = {recoveredLocation, recoveredDate, recoveredPerson: user};
        axios.post('http://localhost:5000/recovered-item', item)
        setShowModal(false);
        alert("Recovery information submitted successfully!");
    };

    return (
        <div>
            <div className="bg-white">
                <div className="p-4 lg:max-w-7xl max-w-4xl mx-auto">
                    <div className="grid items-start grid-cols-1 lg:grid-cols-5 gap-12 shadow-[0_2px_10px_-3px_rgba(169,170,172,0.8)] p-6 rounded">
                        <div className="lg:col-span-3 w-full lg:sticky top-0 text-center">
                            <div className="px-4 py-10 rounded shadow-md relative">
                                <img src={item.thumbnail} alt="Product" className="w-4/5 aspect-[251/171] rounded object-cover mx-auto" />
                            </div>
                        </div>

                        <div className="lg:col-span-2">
                            <h3 className="text-xl font-bold text-gray-800">{item.title}</h3>
                            <div className="flex flex-wrap gap-4 mt-6">
                                <p className="text-gray-800 text-2xl font-bold">${item.postType}</p>
                            </div>
                            <div className="flex gap-4 mt-12 max-w-md">
                                {item.postType === "Lost" ? (
                                    <button 
                                        type="button" 
                                        className="w-full px-4 py-2.5 outline-none border border-blue-600 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded"
                                        onClick={() => setShowModal(true)}
                                    >
                                        Found This
                                    </button>
                                ) : (
                                    <button 
                                        type="button" 
                                        className="w-full px-4 py-2.5 outline-none border border-blue-600 bg-transparent hover:bg-gray-50 text-gray-800 text-sm font-semibold rounded"
                                        onClick={() => setShowModal(true)}
                                    >
                                        This is Mine
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 shadow-[0_2px_10px_-3px_rgba(169,170,172,0.8)] p-6">
                        <h3 className="text-xl font-bold text-gray-800">Item Description</h3>
                        <p className="mt-4 space-y-6 text-gray-800">{item.description}</p>
                    </div>
                </div>
            </div>

            {showModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-50">
                    <div className="bg-white p-6 rounded shadow-md w-96">
                        <h3 className="text-lg font-bold mb-4">Recovery Information</h3>
                        <label className="block mb-2">Recovered Location:</label>
                        <input
                            type="text"
                            className="w-full p-2 border rounded mb-4"
                            value={recoveredLocation}
                            onChange={(e) => setRecoveredLocation(e.target.value)}
                        />

                        <label className="block mb-2">Recovered Date:</label>
                        <DatePicker
                            selected={recoveredDate}
                            onChange={(date) => setRecoveredDate(date)}
                            className="w-full p-2 border rounded mb-4"
                        />

                        <h4 className="text-md font-semibold mb-2">Recovered By:</h4>
                        <p className="text-sm mb-2">Name: {user.displayName}</p>
                        <p className="text-sm mb-4">Email: {user.email}</p>

                        <div className="flex justify-end gap-4">
                            <button 
                                className="px-4 py-2 bg-gray-400 text-white rounded"
                                onClick={() => setShowModal(false)}
                            >
                                Cancel
                            </button>
                            <button 
                                className="px-4 py-2 bg-blue-600 text-white rounded"
                                onClick={handleModalSubmit}
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Item;
