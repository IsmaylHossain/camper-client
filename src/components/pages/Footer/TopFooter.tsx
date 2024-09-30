
import { NavLink } from "react-router-dom";
const TopFooter = () => {
    const routes = [
        {
            path: "/",
            name: "Home",
        },
        {
            path: "/products",
            name: "Products",
        },
        {
            path: "/about",
            name: "About Us",
        },
        {
            path: "/about",
            name: "Blog",
        },
    ];
    const routes2 = [
        {
            path: "/",
            name: "About Us",
        },
        {
            path: "/",
            name: "FAQ",
        },
        {
            path: "/",
            name: "Shop",
        },
        {
            path: "/",
            name: "Login",
        },
    ];
    return (
        <div className='py-10 border-t border-t-gray-700 lg:py-0 lg:h-[450px] bg-[#000000] border-b-gray-600 border-b flex flex-col lg:flex-row lg:p-10 items-center justify-between px-6'>

            <div className="w-full lg:w-[400px]" >
                <div>
                    <div className="flex w-full mb-3 lg:mb-5 justify-center items-center  gap-2">
                        <img
                            className="max-w-6 rounded-full lg:max-w-10"
                            src='https://i.ibb.co/2WRx77P/Black-And-Beige-Minimalist-Aesthetic-Modern-Simple-Typography-Salt-Logo.png'
                            alt="mountain-image"
                        />
                        <div>
                            <h2 className="font-bold    text-[22px] md:text-3xl lg:text-2xl text-red-600">
                                Advanture shop
                            </h2>
                        </div>
                    </div>
                </div>
                <div>
                    <h1 className='text-[14px] md:text-[15px] text-white'>Step into style and comfort with ShoeFlow, where every stride tells a story. From sleek sneakers to sophisticated loafers, we offer a curated collection to elevate your footwear game.

                    </h1>
                </div>
            </div>
            {/* menu items */}

            <div className="flex mt-3 lg:mt-5 py-8  items-start gap-20 md:gap-80  lg:gap-0 justify-around lg:justify-normal-center lg:items-center">
                <div className="w-full lg:w-[200px]">
                    <h2 className=" text-xl font-bold text-white">Menu</h2>

                    <div className="flex flex-col ">
                        {routes.map((route) => (

                            <NavLink
                                key={route.path}
                                className="text-[16px] lg:text-lg font-medium text-white hover:text-red-600 py-2 hover:border-b-2 hover:border-red-600 "

                                to={route.path}
                            >
                                {route.name}
                            </NavLink>

                        ))}
                    </div>
                </div>
                <div className="w-full lg:w-[200px]">
                    <h2 className="text-xl font-bold text-white">Support</h2>

                    <div className="flex flex-col ">
                        {routes2.map((route) => (

                            <NavLink
                                key={route.path}
                                className="text-lg font-medium text-white hover:text-red-600 py-2 hover:border-b-2 hover:border-red-600 "

                                to={route.path}
                            >
                                {route.name}
                            </NavLink>

                        ))}
                    </div>
                </div>
            </div>

            {/* menu items */}

            <div>
                <h1>Find Us</h1>
                <div className='flex  flex-col md:flex-row lg:flex-col items-center justify-center gap-10 '>
                    <div className='flex items-center rounded-xl border-gray-500 justify-center w-[270px] gap-5 p-3 border hover:border-red-500'>
                        <div className='text-white border border-gray-500 p-3  rounded-2xl'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="text-white lucide lucide-at-sign"><circle cx="12" cy="12" r="4" /><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8" /></svg>
                        </div>
                        <div className='flex flex-col text-white'>
                            <h1>Email:</h1>
                            <h1 className='text-[16px]'>example@gmail.com</h1>
                        </div>
                    </div>
                    <div className='flex items-center rounded-xl border-gray-500 justify-center w-[270px] gap-7 p-3 border hover:border-red-500'>
                        <div className='text-white border border-gray-500 p-3 rounded-2xl'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide  text-white lucide-headset"><path d="M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3Z" /><path d="M21 16v2a4 4 0 0 1-4 4h-5" /></svg>
                        </div>
                        <div className='flex flex-col text-white'>
                            <h1>Phone:</h1>
                            <h1 className='text-[16px]'>+880 1880384564</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div></div>
        </div>
    );
};

export default TopFooter;