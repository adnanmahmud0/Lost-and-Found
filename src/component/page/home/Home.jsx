import banner1 from "../../../assets/banner1.jpg";
import banner2 from "../../../assets/banner2.jpg";
import banner3 from "../../../assets/banner3.jpg";
import volentier from "../../../assets/our-mission_03.png";
import winter from "../../../assets/winter-768x1024.jpg";
import { BiDonateHeart } from "react-icons/bi";
import { GrImpact } from "react-icons/gr";


import { CiCirclePlus } from "react-icons/ci";
import { Link } from "react-router-dom";

const Home = () => {
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
                                    Join Our Mission for a <br /> Warmer Bangladesh
                                </h1>
                                <p class="text-sm text-gray-200 mb-8 animate__animated animate__bounce">
                                    Your small gesture can save lives. <br /> Become a donor or volunteer today.
                                </p>
                                <a
                                    href="#getinvolve"
                                    class="bg-[#4FC3F7] hover:bg-[#FFFFFF] hover:text-black text-white font-semibold text-lg py-3 px-8 rounded-full shadow-lg transition"
                                >
                                    Get Involved
                                </a>
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
                                    class="bg-[#4FC3F7] hover:bg-[#FFFFFF] hover:text-black text-white font-semibold text-lg py-3 px-8 rounded-full shadow-lg transition"
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
                            <h1 className="md:text-6xl text-[#4FC3F7] text-3xl font-bold animate__animated animate__bounce">About Us</h1>
                            <p className="py-6">
                                When winter comes, thousands of lives across Bangladesh are impacted by the harsh cold.
                                At <span class="text-[#4FC3F7] font-semibold">Heat of Giving</span>, we strive to
                                provide warmth to those in need through generous donations and a shared sense of
                                community.
                            </p>
                            <button className="btn bg-[#4FC3F7] text-white hover:text-black">Get Started</button>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <section class="bg-white py-16 px-6">
                    <div class="max-w-7xl mx-auto text-center">
                        <h2 class="text-3xl md:text-4xl font-bold text-[#4FC3F7] mb-6 animate__animated animate__bounce">How It Works</h2>
                        <p class="text-lg text-gray-600 mb-12">
                            Donating winter clothing is simple and impactful. Follow these three steps to bring warmth to those in need.
                        </p>

                        <div class="grid grid-cols-1 md:grid-cols-3 gap-12">

                            <div class="flex flex-col items-center">
                                <div class="bg-blue-100 p-6 rounded-full shadow-md mb-6">
                                    <div><CiCirclePlus className="size-10" /></div>
                                </div>
                                <h3 class="text-xl font-semibold text-black mb-2">Step 1: Choose a Campaign</h3>
                                <p class="text-gray-600 text-center">
                                    Browse through our active donation campaigns and select one that resonates with you.
                                </p>
                            </div>

                            <div class="flex flex-col items-center">
                                <div class="bg-orange-100 p-6 rounded-full shadow-md mb-6">
                                    <div><BiDonateHeart className="size-10" /></div>
                                </div>
                                <h3 class="text-xl font-semibold text-black mb-2">Step 2: Donate Items</h3>
                                <p class="text-gray-600 text-center">
                                    Fill out the donation form with details about your items, pickup location, and additional notes.
                                </p>
                            </div>

                            <div class="flex flex-col items-center">
                                <div class="bg-green-100 p-6 rounded-full shadow-md mb-6">
                                    <div><GrImpact className="size-10" /></div>
                                </div>
                                <h3 class="text-xl font-semibold text-black mb-2">Step 3: Make an Impact</h3>
                                <p class="text-gray-600 text-center">
                                    Our volunteers will collect and distribute your donations to those in need, bringing warmth and hope.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="mt-5">
                    <h3 className="text-3xl font-semibold text-black text-center mb-5">Donation Collection Points</h3>
                    <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
                        <div className="bg-white shadow-md rounded-lg p-6">
                            <img className="h-[150px] w-full object-cover rounded-md" src={banner1} alt="" />
                            <h3 className="text-xl font-semibold text-gray-800">
                                Dhaka
                            </h3>
                            <p className="text-gray-600 mt-2">
                                House #12, Road 5, Mirpur, Dhaka
                            </p>
                            <p className="text-sm text-gray-500">9 AM - 6 PM</p>
                        </div>
                        <div className="bg-white shadow-md rounded-lg p-6">
                            <img className="h-[150px] w-full object-cover rounded-md" src={banner2} alt="" />
                            <h3 className="text-xl font-semibold text-gray-800">
                                Chattogram
                            </h3>
                            <p className="text-gray-600 mt-2">
                                Block A, Agrabad, Chattogram
                            </p>
                            <p className="text-sm text-gray-500">10 AM - 5 PM</p>
                        </div>
                        <div className="bg-white shadow-md rounded-lg p-6">
                            <img className="h-[150px] w-full object-cover rounded-md" src={banner3} alt="" />
                            <h3 className="text-xl font-semibold text-gray-800">
                                Rajshahi
                            </h3>
                            <p className="text-gray-600 mt-2">
                                Old Bus Stand, Rajshahi
                            </p>
                            <p className="text-sm text-gray-500">8 AM - 4 PM</p>
                        </div>
                    </div>
                </div>

                <div className="mt-10">
                    <h3 className="text-3xl font-semibold text-black text-center mb-5">Supported Divisions</h3>
                    <div className="text-center">
                        <div className="text-lg text-gray-600">
                            Dhaka, Chattogram, Rajshahi, Khulna, Sylhet, Barishal
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div class="my-4">
                    <div class="max-w-5xl max-lg:max-w-2xl mx-auto">
                        <div class="max-w-2xl mx-auto text-center">
                            <h2 class="text-[#4FC3F7] text-4xl font-bold">Meet our team</h2>
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
                        <h2 class="text-5xl font-bold text-[#4FC3F7]">$23M</h2>
                        <p class="text-gray-600 text-lg">Donations received</p>
                    </div>
                    <div class="text-center space-y-3">
                        <h2 class="text-5xl font-bold text-[#4FC3F7]">10K</h2>
                        <p class="text-gray-600 text-lg">Families supported</p>
                    </div>
                    <div class="text-center space-y-3">
                        <h2 class="text-5xl font-bold text-[#4FC3F7]">50+</h2>
                        <p class="text-gray-600 text-lg">Communities served</p>
                    </div>
                    <div class="text-center space-y-3">
                        <h2 class="text-5xl font-bold text-[#4FC3F7]">100+</h2>
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
                            <h1 className="text-5xl font-bold text-[#4FC3F7]">Why We Need You</h1>
                            <p className="py-6">
                                Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                                quasi. In deleniti eaque aut repudiandae et a id nisi.
                            </p>
                            <button className="btn bg-[#4FC3F7]">Get Started</button>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div class="my-16">
                    <div class="grid sm:grid-cols-2 items-start gap-14 p-8 mx-auto max-w-4xl bg-white shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-md font-[sans-serif]">
                        <div>
                            <h1 class="text-gray-800 text-3xl font-extrabold">Let's Talk</h1>
                            <p class="text-sm text-gray-500 mt-4">Have some big idea or brand to develop and need help? Then reach out we'd love to hear about your project  and provide help.</p>

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
                                        <a href="javascript:void(0)" class="text-[#4FC3F7] text-sm ml-4">
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
                                class="btn text-white bg-[#4FC3F7] hover:text-black rounded-md text-sm px-4 py-3 w-full !mt-6">Send</button>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Home;