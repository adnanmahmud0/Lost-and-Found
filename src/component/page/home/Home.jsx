import banner1 from "../../../assets/banner1.jpg";
import banner2 from "../../../assets/banner2.jpg";
import banner3 from "../../../assets/banner3.jpg";
import volentier from "../../../assets/our-mission_03.png";
import winter from "../../../assets/winter-768x1024.jpg";
import { BiDonateHeart } from "react-icons/bi";
import { GrImpact } from "react-icons/gr";
import { LuLayoutList } from "react-icons/lu";
import { LuLayoutGrid } from "react-icons/lu";
import { FaHeart } from "react-icons/fa";
import { FaMapPin } from "react-icons/fa";
import { FaUserAlt, FaShoppingCart, FaSmile, FaServer } from "react-icons/fa";
import { CiCirclePlus } from "react-icons/ci";
import { Link, useLoaderData } from "react-router-dom";
import { useState } from "react";
import { SiGoogleclassroom } from "react-icons/si";
import { PiChalkboardTeacherFill } from "react-icons/pi";
import { FaCalendar, FaUser } from 'react-icons/fa';
import { FaThLarge, FaList } from "react-icons/fa";

const Home = () => {
    const [isGridView, setIsGridView] = useState(true);
    const items = useLoaderData();
    const limitedItems = items.slice(0, 8);
    const [searchQuery, setSearchQuery] = useState('');

    const filteredItems = limitedItems.filter(item =>
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
        <div>
            <div>
                <div className="carousel w-full">
                    <div
                        id="slide1"
                        className="carousel-item relative w-full"
                        style={{
                            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${banner1})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                    >
                        <div className="w-full flex justify-center items-center max-w-7xl mx-auto my-72">
                            <div class=" text-center">
                                <p className="font-semibold text-[#02C5BC]">--REBUILD LIVES FOR FUTURES--</p>
                                <h1 class="text-4xl md:text-7xl font-bold text-white mb-6 animate__animated animate__bounce">
                                    Losing isn't a problem <br /> Someone will find it
                                </h1>
                                <p class="text-sm text-gray-200 mb-8 animate__animated animate__bounce">
                                    From your closet to the hands of those who need it the most <br /> our process is simple and transparent.
                                </p>
                            </div>
                        </div>
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div
                        id="slide2"
                        className="carousel-item relative w-full"
                        style={{
                            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${banner2})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                    >
                        <div className="w-full flex justify-center items-center">
                            <div class=" text-center">
                                <p className="font-semibold text-[#02C5BC]">--WE ARE ALWAYS OPEN FOR OTHER--</p>
                                <h1 class="text-4xl md:text-7xl font-bold text-white mb-6 animate__animated animate__bounce">
                                    Your old is someone’s <br /> new beginning
                                </h1>
                                <p class="text-sm text-gray-200 mb-8 animate__animated animate__bounce">
                                    Give your unused items a second life. Donate today and make <br /> an impact in someone's world.
                                </p>
                            </div>
                        </div>
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div
                        id="slide3"
                        className="carousel-item relative w-full"
                        style={{
                            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${banner3})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                    >
                        <div className="w-full flex justify-center items-center">
                            <div class=" text-center">
                                <p className="font-semibold text-[#02C5BC]">--WE ARE CREATING BRIGHTER TOMORROW--</p>
                                <h1 class="text-4xl md:text-7xl font-bold text-white mb-6 animate__animated animate__bounce">
                                    Kindness is the glue <br /> that holds us together
                                </h1>
                                <p class="text-sm text-gray-200 mb-8 animate__animated animate__bounce">
                                    Together, we create a world where generosity knows no bounds <br /> Join us in making a difference!
                                </p>
                            </div>
                        </div>
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="hero py-28">
                    <div className="hero-content flex-col lg:flex-row-reverse justify-between">
                        <div className="md:w-1/2">
                            <img
                                src={winter}
                                className="rounded-lg shadow-2xle" />
                        </div>
                        <div className="md:w-1/2 p-5">
                            <span className="bg-[#383B78] text-xs text-white px-2 py-1 rounded-full">About Us</span>
                            <h1 className="md:text-6xl text-[#02C5BC] text-3xl font-bold animate__animated animate__bounce">Lost item has <br /> a story</h1>
                            <p className="py-6">
                                When winter comes, thousands of lives across Bangladesh are impacted by the harsh cold.
                                At <span class="text-[#02C5BC] font-semibold">Where Is It</span>, we strive to
                                provide warmth to those in need through generous donations and a shared sense of
                                community.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-4 mx-auto max-w-7xl">
                {/* Heading */}
                <div className="flex justify-center">
                    <span className="bg-[#383B78] text-xs text-white px-2 py-1 rounded-full">Lost & Found</span>
                </div>
                <div>
                    <h1 className="md:text-6xl text-[#02C5BC] text-3xl font-bold animate__animated animate__bounce text-center">
                        Lost and Found Items
                    </h1>
                </div>

                {/* Search Bar & Toggle Button */}
                <div className="flex justify-between mt-6 mx-5">
                    <div className="flex px-4 py-3 rounded-md border-2 border-[#FACC01] overflow-hidden">
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

                    {/* Toggle Button */}
                    <button
                        onClick={() => setIsGridView(!isGridView)}
                        className="flex items-center gap-2 px-4 py-2 border border-[#02C5BC] text-[#02C5BC] rounded hover:bg-[#02C5BC] hover:text-white transition-all"
                    >
                        {isGridView ? <FaList /> : <FaThLarge />}
                        {isGridView ? "List View" : "Grid View"}
                    </button>
                </div>

                {/* Conditional Rendering */}
                {isGridView ? (
                    // Grid View
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 m-5">
                        {filteredItems.map((item) => (
                            <div
                                key={item._id}
                                className="bg-white border border-slate-200 rounded-xl overflow-hidden transition-all hover:shadow-lg relative"
                            >
                                <div className="relative">
                                    <img
                                        src={item.thumbnail}
                                        alt={item.title}
                                        className="w-full h-48 object-cover"
                                    />
                                    <div className="absolute top-3 left-3 flex flex-col gap-1">
                                        {item.postType === "Lost" && (
                                            <span className="bg-[#FACC01] text-white text-xs font-bold px-2 py-1 rounded">
                                                {item.postType}
                                            </span>
                                        )}
                                        {item.postType === "Found" && (
                                            <span className="bg-[#02C5BC] text-white text-xs font-bold px-2 py-1 rounded">
                                                {item.postType}
                                            </span>
                                        )}
                                    </div>
                                </div>

                                <div className="p-4">
                                    <h3 className="text-lg font-bold text-gray-800">{item.title}</h3>
                                    <p className="text-gray-600 text-sm flex items-center">
                                        <FaMapPin /> {item.location}
                                    </p>
                                    <Link
                                        to={`/item/${item._id}`}
                                        className="block text-center mt-3 border border-[#02C5BC] text-[#02C5BC] bg-transparent hover:bg-[#02C5BC] py-2 rounded hover:text-white transition-all"
                                    >
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
                            <div
                                key={item._id}
                                className="flex items-center justify-between p-4 border border-slate-200 rounded-xl bg-white mb-4 transition-all hover:shadow-lg"
                            >
                                <div className="flex items-center gap-4">
                                    <img
                                        src={item.thumbnail}
                                        alt={item.title}
                                        className="w-16 h-16 object-cover rounded-md"
                                    />
                                    <div>
                                        <h3 className="text-lg font-bold text-gray-800">{item.title}</h3>
                                        <p className="text-gray-600 text-sm flex items-center">
                                            <FaMapPin /> {item.location}
                                        </p>
                                    </div>
                                </div>
                                <Link
                                    to={`/item/${item._id}`}
                                    className="border border-[#02C5BC] text-[#02C5BC] bg-transparent hover:bg-[#02C5BC] py-2 px-4 rounded hover:text-white transition-all"
                                >
                                    Details
                                </Link>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            <div>
                <div class="my-4">
                    <div class="max-w-5xl max-lg:max-w-2xl mx-auto">
                        <div className="flex justify-center">
                            <span className="bg-[#383B78] text-xs text-white px-2 py-1 rounded-full">Teams</span>
                        </div>
                        <div class="max-w-2xl mx-auto text-center">
                            <h2 class="md:text-6xl text-[#02C5BC] text-3xl font-bold animate__animated animate__bounce text-center">Meet our teams</h2>
                            <p class="text-gray-600 text-sm mt-4 leading-relaxed">Veniam proident aute magna anim excepteur et ex consectetur velit ullamco veniam minim aute sit. Ullamco nisi enim ipsum irure laboris ad ut. Esse cupidatat deserunt magna aute.</p>
                        </div>

                        <div class="grid lg:grid-cols-3 md:grid-cols-2 gap-8 max-md:justify-center mt-12">
                            <div class="border bg-white rounded-md overflow-hidden max-md:max-w-[300px]">
                                <img src="https://readymadeui.com/team-4.webp" class="w-full h-60 object-contain object-top bg-gray-200" />

                                <div class="p-4">
                                    <h4 class="text-gray-800 text-base font-bold">Sophia</h4>
                                    <span class="text-white bg-[#FACC01] py-1 px-1 rounded-full text-xs mt-1">CEO</span>

                                    <div class="mt-4">
                                        <p class="text-gray-600 text-sm leading-relaxed">I am Sophia of the organization CEO. Lead this organization</p>
                                    </div>

                                </div>
                            </div>

                            <div class="border bg-white rounded-md overflow-hidden max-md:max-w-[300px]">
                                <img src="https://readymadeui.com/team-5.webp" class="w-full h-60 object-contain object-top bg-gray-200" />

                                <div class="p-4">
                                    <h4 class="text-gray-800 text-base font-bold">Alen</h4>
                                    <span class="text-white bg-[#FACC01] py-1 px-1 rounded-full text-xs mt-1">CTO</span>

                                    <div class="mt-4">
                                        <p class="text-gray-600 text-sm leading-relaxed">I am Alen the organizer CTO. I do all the tecnological work</p>
                                    </div>
                                </div>
                            </div>

                            <div class="border bg-white rounded-md overflow-hidden max-md:max-w-[300px]">
                                <img src="https://readymadeui.com/team-6.webp" class="w-full h-60 object-contain object-top bg-gray-200" />

                                <div class="p-4">
                                    <h4 class="text-gray-800 text-base font-bold">Eleanor</h4>
                                    <span class="text-white bg-[#FACC01] py-1 px-1 rounded-full text-xs mt-1">COO</span>

                                    <div class="mt-4">
                                        <p class="text-gray-600 text-sm leading-relaxed">I am Eleanor the organization COO. Advise all the employee and gide them.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-[#02C5BC] px-6 py-16 my-20">
                <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-x-6 gap-y-10 max-w-6xl mx-auto">
                    <div className="flex items-center gap-6">
                        <FaUserAlt className="text-[#FACC01] w-14 h-14 shrink-0" />
                        <div>
                            <h3 className="text-white text-4xl font-bold">16+</h3>
                            <p className="text-base text-white mt-2">Total User</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-6">
                        <SiGoogleclassroom className="text-[#FACC01] w-14 h-14 shrink-0" />
                        <div>
                            <h3 className="text-white text-4xl font-bold">92+</h3>
                            <p className="text-base text-white mt-2">Total Lost</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-6">
                        <FaSmile className="text-[#FACC01] w-14 h-14 shrink-0" />
                        <div>
                            <h3 className="text-white text-4xl font-bold">34+</h3>
                            <p className="text-base text-white mt-2">Total Recover</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-6">
                        <PiChalkboardTeacherFill className="text-[#FACC01] w-14 h-14 shrink-0" />
                        <div>
                            <h3 className="text-white text-4xl font-bold">12+</h3>
                            <p className="text-base text-white mt-2">Total Volunteer</p>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div className="hero">
                    <div className="hero-content flex-col lg:flex-row">
                        <div className="md:w-1/2">
                            <img
                                src={volentier}
                                className="rounded-lg" />

                        </div>

                        <div className="md:w-1/2">
                            <div className="mb-5">
                                <span className="bg-[#383B78] text-xs text-white px-2 py-1 rounded-full">Become a Volunteer</span>
                            </div>
                            <h1 className="text-5xl font-bold text-[#02C5BC]">Why We Need You</h1>
                            <p className="py-6">
                                We are always looking for volunteers to help us make a difference in the lives of those in need. Whether you can donate your time, money, or resources, your support is crucial to our mission.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div class="my-16">
                    <div className=" p-4 my-20">
                        <div className="max-w-7xl mx-auto">
                            <div className='flex justify-center '>
                                <div className='text-xs text-white rounded-full py-1 px-3 bg-[#383B78] hover:bg-[#383B78] mb-3'>News & Blogs</div>
                            </div>
                            <div className="text-center max-w-xl mx-auto">

                                <h2 className="text-5xl font-bold text-[#02C5BC]">LATEST NEWSLETTER</h2>
                                <p className="text-sm mt-6">
                                    Explore our latest blog posts to stay updated on the newest trends, tips, and insights in education, technology, and self-improvement.
                                </p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12 max-lg:max-w-3xl max-md:max-w-md mx-auto">
                                {/* Blog Post 1 */}
                                <div className="bg-[#02C5BC] cursor-pointer rounded-lg overflow-hidden group relative before:absolute before:inset-0 before:z-10 before:bg-black before:opacity-60">
                                    <img
                                        src="https://readymadeui.com/Imagination.webp"
                                        alt="Blog Post 1"
                                        className="w-full h-96 object-cover group-hover:scale-110 transition-all duration-300"
                                    />
                                    <div className="p-6 absolute bottom-0 left-0 right-0 z-20">
                                        <span className="text-sm block mb-2 text-yellow-400 font-semibold">
                                            <FaCalendar className="inline-block mr-2" /> 10 FEB 2023 |{' '}
                                            <FaUser className="inline-block mr-2" /> BY JOHN DOE
                                        </span>
                                        <h3 className="text-xl font-bold text-[#02C5BC]">A Guide to Igniting Your Imagination</h3>
                                        <div className="mt-4">
                                            <p className="text-gray-200 text-sm">
                                                Learn how to ignite your creativity and start thinking outside the box. This blog post offers practical tips to inspire your imagination and fuel your journey towards innovative thinking.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Blog Post 2 */}
                                <div className="bg-white cursor-pointer rounded-lg overflow-hidden group relative before:absolute before:inset-0 before:z-10 before:bg-black before:opacity-60">
                                    <img
                                        src="https://readymadeui.com/hacks-watch.webp"
                                        alt="Blog Post 2"
                                        className="w-full h-96 object-cover group-hover:scale-110 transition-all duration-300"
                                    />
                                    <div className="p-6 absolute bottom-0 left-0 right-0 z-20">
                                        <span className="text-sm block mb-2 text-yellow-400 font-semibold">
                                            <FaCalendar className="inline-block mr-2" /> 7 JUN 2023 |{' '}
                                            <FaUser className="inline-block mr-2" /> BY MARK ADAIR
                                        </span>
                                        <h3 className="text-xl font-bold text-[#02C5BC]">Hacks to Supercharge Your Day</h3>
                                        <div className="mt-4">
                                            <p className="text-gray-200 text-sm">
                                                Discover effective life hacks and time management strategies that can help you boost productivity and make the most of your day. Whether you’re a student or a working professional, this post offers tips for everyone.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Blog Post 3 */}
                                <div className="bg-white cursor-pointer rounded-lg overflow-hidden group relative before:absolute before:inset-0 before:z-10 before:bg-black before:opacity-60">
                                    <img
                                        src="https://readymadeui.com/prediction.webp"
                                        alt="Blog Post 3"
                                        className="w-full h-96 object-cover group-hover:scale-110 transition-all duration-300"
                                    />
                                    <div className="p-6 absolute bottom-0 left-0 right-0 z-20">
                                        <span className="text-sm block mb-2 text-yellow-400 font-semibold">
                                            <FaCalendar className="inline-block mr-2" /> 5 OCT 2023 |{' '}
                                            <FaUser className="inline-block mr-2" /> BY SIMON KONECKI
                                        </span>
                                        <h3 className="text-xl font-bold text-[#02C5BC]">Trends and Predictions</h3>
                                        <div className="mt-4">
                                            <p className="text-gray-200 text-sm">
                                                Stay ahead of the curve by reading our latest trends and predictions in the education and tech industries. In this blog post, we highlight emerging trends, innovative technologies, and how they are shaping the future.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Home;