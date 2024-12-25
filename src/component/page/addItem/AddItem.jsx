import React, { useContext, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { AuthContext } from '../../authProvider/AuthProvider';
import axios from 'axios';
import Swal from 'sweetalert2';


const AddItem = () => {
    const { user } = useContext(AuthContext);
    const [dateLost, setDateLost] = useState(new Date());

    const handleAddItem = (e) => {
        e.preventDefault();
        const postType = e.target.postType.value;
        const thumbnail = e.target.thumbnail.value;
        const title = e.target.title.value;
        const category = e.target.category.value;
        const description = e.target.description.value;
        const location = e.target.location.value;
        const xDateLost = dateLost;
        const userName = e.target.username.value;
        const email = e.target.email.value;
        const status = e.target.status.value;

        const items = { postType, thumbnail, title, category, description, location, xDateLost, userName, email, status };
        axios.post('http://localhost:5000/add-items', items)
            .then(() => {
                e.target.reset();
                Swal.fire({
                    title: "Good job!",
                    text: "Login Successfully!",
                    icon: "success"
                });
            })
            .catch(() => {
                Swal.fire({
                    title: "Error!",
                    text: "Something went wrong!",
                    icon: "error"
                });
            });
    }

    return (
        <div className="max-w-4xl mx-auto p-6">
            <div className="text-center mb-16">
                <h4 className="text-gray-800 text-base font-semibold mt-6">Add New Item</h4>
            </div>
            <form onSubmit={handleAddItem}>
                <div className="md:grid md:grid-cols-2 gap-8">
                    <div>
                        <label className="text-gray-800 text-sm mb-2 block">Post Type</label>
                        <select required id='postType' name='postType' className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all">
                            <option value="Lost">Lost</option>
                            <option value="Found">Found</option>
                        </select>
                    </div>
                    <div>
                        <label className="text-gray-800 text-sm mb-2 block">Thumbnail</label>
                        <input required id='thumbnail' name='thumbnail' type="text" className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all" placeholder="Enter image link" />
                    </div>
                    <div>
                        <label className="text-gray-800 text-sm mb-2 block">Title</label>
                        <input required id='title' name='title' type="text" className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all" placeholder="Enter title" />
                    </div>
                    <div>
                        <label className="text-gray-800 text-sm mb-2 block">Category</label>
                        <input required id='category' name='category' type="text" className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all" placeholder="Enter category" />
                    </div>
                    <div className='col-span-2'>
                        <label className="text-gray-800 text-sm mb-2 block">Description</label>
                        <textarea required id='description' name='description' className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all" placeholder="Enter description"></textarea>
                    </div>
                    <div>
                        <label className="text-gray-800 text-sm mb-2 block">Location</label>
                        <input required id='location' name='location' type="text" className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all" placeholder="Enter location" />
                    </div>
                    <div>
                        <label className="text-gray-800 text-sm mb-2 block">Date Lost</label>
                        <DatePicker selected={dateLost} onChange={(date) => setDateLost(date)} className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all" />
                    </div>
                    <div>
                        <label className="text-gray-800 text-sm mb-2 block">User Name</label>
                        <input disabled required id='username' name='username' value={user?.displayName || ''} type="text" className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all" placeholder="Enter location" />
                    </div>
                    <div>
                        <label className="text-gray-800 text-sm mb-2 block">Email</label>
                        <input disabled required id='email' name='email' type="text" value={user?.email || ''} className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all" placeholder="Enter location" />
                    </div>
                    <input hidden type="text" id='status' name='status' value="not-recovered" />
                </div>
                <div className="!mt-12">
                    <button type="submit" className="w-full py-3.5 px-7 text-sm font-semibold tracking-wider rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none">
                        Add Post
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddItem;
