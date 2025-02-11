import banner1 from "../../../assets/banner1.jpg";
import banner2 from "../../../assets/banner2.jpg";
import banner3 from "../../../assets/banner3.jpg";
import volentier from "../../../assets/our-mission_03.png";
import winter from "../../../assets/winter-768x1024.jpg";
import { BiDonateHeart } from "react-icons/bi";
import { GrImpact } from "react-icons/gr";
import { LuLayoutList } from "react-icons/lu";
import { LuLayoutGrid } from "react-icons/lu";


import { CiCirclePlus } from "react-icons/ci";
import { Link, useLoaderData } from "react-router-dom";
import { useState } from "react";

const Home = () => {
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
                <div className="carousel min-h-screen w-full">
                    <div
                        id="slide1"
                        className="carousel-item relative w-full"
                        style={{
                            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${banner1})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                    >
                        <div className="w-full flex justify-center items-center">
                            <div class=" text-center">
                                <p className="text-white">REBUILD LIVES FOR FUTURES</p>
                                <h1 class="text-4xl md:text-7xl font-bold text-white mb-6 animate__animated animate__bounce">
                                    There is no problem for loosing <br /> Someone will find it
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
                                <p className="text-white">WE ARE ALWAYS OPEN FOR CHILDREN</p>
                                <h1 class="text-4xl md:text-7xl font-bold text-white mb-6 animate__animated animate__bounce">
                                    Join Our Mission <br /> and find lost item
                                </h1>
                                <p class="text-sm text-gray-200 mb-8 animate__animated animate__bounce">
                                    Your small gesture can save lives. <br /> Become a donor or volunteer today.
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
                                <p className="text-white">WE ARE CREATING BRIGHTER TOMORROW</p>
                                <h1 class="text-4xl md:text-7xl font-bold text-white mb-6 animate__animated animate__bounce">
                                    Bring Warmth to Those in <br /> Need This Winter
                                </h1>
                                <p class="text-sm text-gray-200 mb-8 animate__animated animate__bounce">
                                    Thousands across Bangladesh face same problem. <br /> Together, we can make a difference.
                                </p>
                                <Link
                                    to="/DonationCampaigns"
                                    class="bg-blue-600 hover:bg-[#FFFFFF] hover:text-black text-white font-semibold text-lg py-3 px-8 rounded-full shadow-lg transition"
                                >
                                    Donate Now
                                </Link>
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
                <div className="hero bg-base-200 min-h-screen py-5">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <img
                            src={winter}
                            className="max-w-sm rounded-lg shadow-2xl md:w-[50%] w-[90%]" />
                        <div className="md:w-[50%] p-5">
                            <h1 className="md:text-6xl text-blue-600 text-3xl font-bold animate__animated animate__bounce">About Us</h1>
                            <p className="py-6">
                                When winter comes, thousands of lives across Bangladesh are impacted by the harsh cold.
                                At <span class="text-blue-600 font-semibold">Where Is It</span>, we strive to
                                provide warmth to those in need through generous donations and a shared sense of
                                community.
                            </p>
                            <button className="btn bg-blue-600 text-white hover:text-black">Get Started</button>
                        </div>
                    </div>
                </div>
            </div>
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

            <div>
                <div class="my-4">
                    <div class="max-w-5xl max-lg:max-w-2xl mx-auto">
                        <div class="max-w-2xl mx-auto text-center">
                            <h2 class="text-blue-600 text-4xl font-bold">Meet our team</h2>
                            <p class="text-gray-600 text-sm mt-4 leading-relaxed">Veniam proident aute magna anim excepteur et ex consectetur velit ullamco veniam minim aute sit. Ullamco nisi enim ipsum irure laboris ad ut. Esse cupidatat deserunt magna aute.</p>
                        </div>

                        <div class="grid lg:grid-cols-3 md:grid-cols-2 gap-8 max-md:justify-center mt-12">
                            <div class="border rounded-md overflow-hidden max-md:max-w-[300px]">
                                <img src="https://readymadeui.com/team-4.webp" class="w-full h-60 object-contain object-top bg-gray-200" />

                                <div class="p-4">
                                    <h4 class="text-gray-800 text-base font-bold">Sophia</h4>
                                    <p class="text-gray-600 text-xs mt-1">CEO</p>

                                    <div class="mt-4">
                                        <p class="text-gray-600 text-sm leading-relaxed">I am Sophia of the organization CEO. Lead this organization</p>
                                    </div>

                                    <div class="space-x-4 mt-4">
                                        <button type="button"
                                            class="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none bg-blue-600 hover:bg-blue-700 active:bg-blue-600">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="14px" fill="#fff" viewBox="0 0 155.139 155.139">
                                                <path
                                                    d="M89.584 155.139V84.378h23.742l3.562-27.585H89.584V39.184c0-7.984 2.208-13.425 13.67-13.425l14.595-.006V1.08C115.325.752 106.661 0 96.577 0 75.52 0 61.104 12.853 61.104 36.452v20.341H37.29v27.585h23.814v70.761h28.48z"
                                                    data-original="#010002" />
                                            </svg>
                                        </button>
                                        <button type="button"
                                            class="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none bg-[#03a9f4] hover:bg-[#03a1f4] active:bg-[#03a9f4]">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="14px" fill="#fff" viewBox="0 0 512 512">
                                                <path
                                                    d="M512 97.248c-19.04 8.352-39.328 13.888-60.48 16.576 21.76-12.992 38.368-33.408 46.176-58.016-20.288 12.096-42.688 20.64-66.56 25.408C411.872 60.704 384.416 48 354.464 48c-58.112 0-104.896 47.168-104.896 104.992 0 8.32.704 16.32 2.432 23.936-87.264-4.256-164.48-46.08-216.352-109.792-9.056 15.712-14.368 33.696-14.368 53.056 0 36.352 18.72 68.576 46.624 87.232-16.864-.32-33.408-5.216-47.424-12.928v1.152c0 51.008 36.384 93.376 84.096 103.136-8.544 2.336-17.856 3.456-27.52 3.456-6.72 0-13.504-.384-19.872-1.792 13.6 41.568 52.192 72.128 98.08 73.12-35.712 27.936-81.056 44.768-130.144 44.768-8.608 0-16.864-.384-25.12-1.44C46.496 446.88 101.6 464 161.024 464c193.152 0 298.752-160 298.752-298.688 0-4.64-.16-9.12-.384-13.568 20.832-14.784 38.336-33.248 52.608-54.496z"
                                                    data-original="#03a9f4" />
                                            </svg>
                                        </button>
                                        <button type="button"
                                            class="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none bg-[#0077b5] hover:bg-[#0055b5] active:bg-[#0077b5]">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="14px" fill="#fff" viewBox="0 0 24 24">
                                                <path
                                                    d="M23.994 24v-.001H24v-8.802c0-4.306-.927-7.623-5.961-7.623-2.42 0-4.044 1.328-4.707 2.587h-.07V7.976H8.489v16.023h4.97v-7.934c0-2.089.396-4.109 2.983-4.109 2.549 0 2.587 2.384 2.587 4.243V24zM.396 7.977h4.976V24H.396zM2.882 0C1.291 0 0 1.291 0 2.882s1.291 2.909 2.882 2.909 2.882-1.318 2.882-2.909A2.884 2.884 0 0 0 2.882 0z"
                                                    data-original="#0077b5" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div class="border rounded-md overflow-hidden max-md:max-w-[300px]">
                                <img src="https://readymadeui.com/team-5.webp" class="w-full h-60 object-contain object-top bg-gray-200" />

                                <div class="p-4">
                                    <h4 class="text-gray-800 text-base font-bold">Alen</h4>
                                    <p class="text-gray-600 text-xs mt-1">CTO</p>

                                    <div class="mt-4">
                                        <p class="text-gray-600 text-sm leading-relaxed">I am Alen the organizer CTO. I do all the tecnological work</p>
                                    </div>

                                    <div class="space-x-4 mt-4">
                                        <button type="button"
                                            class="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none bg-blue-600 hover:bg-blue-700 active:bg-blue-600">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="14px" fill="#fff" viewBox="0 0 155.139 155.139">
                                                <path
                                                    d="M89.584 155.139V84.378h23.742l3.562-27.585H89.584V39.184c0-7.984 2.208-13.425 13.67-13.425l14.595-.006V1.08C115.325.752 106.661 0 96.577 0 75.52 0 61.104 12.853 61.104 36.452v20.341H37.29v27.585h23.814v70.761h28.48z"
                                                    data-original="#010002" />
                                            </svg>
                                        </button>
                                        <button type="button"
                                            class="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none bg-[#03a9f4] hover:bg-[#03a1f4] active:bg-[#03a9f4]">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="14px" fill="#fff" viewBox="0 0 512 512">
                                                <path
                                                    d="M512 97.248c-19.04 8.352-39.328 13.888-60.48 16.576 21.76-12.992 38.368-33.408 46.176-58.016-20.288 12.096-42.688 20.64-66.56 25.408C411.872 60.704 384.416 48 354.464 48c-58.112 0-104.896 47.168-104.896 104.992 0 8.32.704 16.32 2.432 23.936-87.264-4.256-164.48-46.08-216.352-109.792-9.056 15.712-14.368 33.696-14.368 53.056 0 36.352 18.72 68.576 46.624 87.232-16.864-.32-33.408-5.216-47.424-12.928v1.152c0 51.008 36.384 93.376 84.096 103.136-8.544 2.336-17.856 3.456-27.52 3.456-6.72 0-13.504-.384-19.872-1.792 13.6 41.568 52.192 72.128 98.08 73.12-35.712 27.936-81.056 44.768-130.144 44.768-8.608 0-16.864-.384-25.12-1.44C46.496 446.88 101.6 464 161.024 464c193.152 0 298.752-160 298.752-298.688 0-4.64-.16-9.12-.384-13.568 20.832-14.784 38.336-33.248 52.608-54.496z"
                                                    data-original="#03a9f4" />
                                            </svg>
                                        </button>
                                        <button type="button"
                                            class="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none bg-[#0077b5] hover:bg-[#0055b5] active:bg-[#0077b5]">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="14px" fill="#fff" viewBox="0 0 24 24">
                                                <path
                                                    d="M23.994 24v-.001H24v-8.802c0-4.306-.927-7.623-5.961-7.623-2.42 0-4.044 1.328-4.707 2.587h-.07V7.976H8.489v16.023h4.97v-7.934c0-2.089.396-4.109 2.983-4.109 2.549 0 2.587 2.384 2.587 4.243V24zM.396 7.977h4.976V24H.396zM2.882 0C1.291 0 0 1.291 0 2.882s1.291 2.909 2.882 2.909 2.882-1.318 2.882-2.909A2.884 2.884 0 0 0 2.882 0z"
                                                    data-original="#0077b5" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div class="border rounded-md overflow-hidden max-md:max-w-[300px]">
                                <img src="https://readymadeui.com/team-6.webp" class="w-full h-60 object-contain object-top bg-gray-200" />

                                <div class="p-4">
                                    <h4 class="text-gray-800 text-base font-bold">Eleanor</h4>
                                    <p class="text-gray-600 text-xs mt-1">COO</p>

                                    <div class="mt-4">
                                        <p class="text-gray-600 text-sm leading-relaxed">I am Eleanor the organization COO. Advise all the employee and gide them.</p>
                                    </div>

                                    <div class="space-x-4 mt-4">
                                        <button type="button"
                                            class="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none bg-blue-600 hover:bg-blue-700 active:bg-blue-600">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="14px" fill="#fff" viewBox="0 0 155.139 155.139">
                                                <path
                                                    d="M89.584 155.139V84.378h23.742l3.562-27.585H89.584V39.184c0-7.984 2.208-13.425 13.67-13.425l14.595-.006V1.08C115.325.752 106.661 0 96.577 0 75.52 0 61.104 12.853 61.104 36.452v20.341H37.29v27.585h23.814v70.761h28.48z"
                                                    data-original="#010002" />
                                            </svg>
                                        </button>
                                        <button type="button"
                                            class="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none bg-[#03a9f4] hover:bg-[#03a1f4] active:bg-[#03a9f4]">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="14px" fill="#fff" viewBox="0 0 512 512">
                                                <path
                                                    d="M512 97.248c-19.04 8.352-39.328 13.888-60.48 16.576 21.76-12.992 38.368-33.408 46.176-58.016-20.288 12.096-42.688 20.64-66.56 25.408C411.872 60.704 384.416 48 354.464 48c-58.112 0-104.896 47.168-104.896 104.992 0 8.32.704 16.32 2.432 23.936-87.264-4.256-164.48-46.08-216.352-109.792-9.056 15.712-14.368 33.696-14.368 53.056 0 36.352 18.72 68.576 46.624 87.232-16.864-.32-33.408-5.216-47.424-12.928v1.152c0 51.008 36.384 93.376 84.096 103.136-8.544 2.336-17.856 3.456-27.52 3.456-6.72 0-13.504-.384-19.872-1.792 13.6 41.568 52.192 72.128 98.08 73.12-35.712 27.936-81.056 44.768-130.144 44.768-8.608 0-16.864-.384-25.12-1.44C46.496 446.88 101.6 464 161.024 464c193.152 0 298.752-160 298.752-298.688 0-4.64-.16-9.12-.384-13.568 20.832-14.784 38.336-33.248 52.608-54.496z"
                                                    data-original="#03a9f4" />
                                            </svg>
                                        </button>
                                        <button type="button"
                                            class="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none bg-[#0077b5] hover:bg-[#0055b5] active:bg-[#0077b5]">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="14px" fill="#fff" viewBox="0 0 24 24">
                                                <path
                                                    d="M23.994 24v-.001H24v-8.802c0-4.306-.927-7.623-5.961-7.623-2.42 0-4.044 1.328-4.707 2.587h-.07V7.976H8.489v16.023h4.97v-7.934c0-2.089.396-4.109 2.983-4.109 2.549 0 2.587 2.384 2.587 4.243V24zM.396 7.977h4.976V24H.396zM2.882 0C1.291 0 0 1.291 0 2.882s1.291 2.909 2.882 2.909 2.882-1.318 2.882-2.909A2.884 2.884 0 0 0 2.882 0z"
                                                    data-original="#0077b5" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto">
                <div class="flex flex-col md:flex-row justify-around items-center space-y-6 md:space-y-0 md:space-x-12 py-20">
                    <div class="text-center space-y-3">
                        <h2 class="text-5xl font-bold text-blue-600">$23M</h2>
                        <p class="text-gray-600 text-lg">Donations received</p>
                    </div>
                    <div class="text-center space-y-3">
                        <h2 class="text-5xl font-bold text-blue-600">10K</h2>
                        <p class="text-gray-600 text-lg">Families supported</p>
                    </div>
                    <div class="text-center space-y-3">
                        <h2 class="text-5xl font-bold text-blue-600">50+</h2>
                        <p class="text-gray-600 text-lg">Communities served</p>
                    </div>
                    <div class="text-center space-y-3">
                        <h2 class="text-5xl font-bold text-blue-600">100+</h2>
                        <p class="text-gray-600 text-lg">Projects implemented</p>
                    </div>
                </div>
            </div>
            <div id="getinvolve">
                <div className="hero bg-base-200 min-h-screen">
                    <div className="hero-content flex-col lg:flex-row">
                        <div className="md:w-1/2">
                            <img
                                src={volentier}
                                className="rounded-lg shadow-2xl" />

                        </div>

                        <div className="md:w-1/2">
                            <p>Become a Volunteer</p>
                            <h1 className="text-5xl font-bold text-blue-600">Why We Need You</h1>
                            <p className="py-6">
                                We are always looking for volunteers to help us make a difference in the lives of those in need. Whether you can donate your time, money, or resources, your support is crucial to our mission.
                            </p>
                            <button className="btn bg-blue-600">Get Started</button>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div class="my-16">
                    <div class="grid sm:grid-cols-2 items-start gap-14 p-8 mx-auto max-w-4xl bg-white shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-md font-[sans-serif]">
                        <div>
                            <h1 class="text-gray-800 text-3xl font-extrabold">Let's Talk</h1>
                            <p class="text-sm text-gray-500 mt-4">  </p>

                            <div class="mt-12">
                                <h2 class="text-gray-800 text-base font-bold">Email</h2>
                                <ul class="mt-4">
                                    <li class="flex items-center">
                                        <div class="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill='#007bff'
                                                viewBox="0 0 479.058 479.058">
                                                <path
                                                    d="M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 0 1 5.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z"
                                                    data-original="#000000" />
                                            </svg>
                                        </div>
                                        <a href="javascript:void(0)" class="text-blue-600 text-sm ml-4">
                                            <small class="block">Mail</small>
                                            <strong>info@example.com</strong>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <form class="ml-auo space-y-4">
                            <input type='text' placeholder='Name'
                                class="w-full text-gray-800 rounded-md py-2.5 px-4 border text-sm outline-blue-500" />
                            <input type='email' placeholder='Email'
                                class="w-full text-gray-800 rounded-md py-2.5 px-4 border text-sm outline-blue-500" />
                            <input type='text' placeholder='Subject'
                                class="w-full text-gray-800 rounded-md py-2.5 px-4 border text-sm outline-blue-500" />
                            <textarea placeholder='Message' rows="6"
                                class="w-full text-gray-800 rounded-md px-4 border text-sm pt-2.5 outline-blue-500"></textarea>
                            <button type='button'
                                class="btn text-white bg-blue-600 hover:text-black rounded-md text-sm px-4 py-3 w-full !mt-6">Send</button>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Home;