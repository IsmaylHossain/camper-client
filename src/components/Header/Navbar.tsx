import { Link, NavLink } from "react-router-dom";
import MobileMenu from "./MobileMenu";
import Headroom from "react-headroom";


const Navbar = () => {
    return (
        <Headroom>
            <section className=" bg-transparent backdrop-blur-lg py-5 px-4">
                <div className="h-full max-w-7xl mx-auto flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        {/* Mobile menu button */}
                        <div className="md:hidden">
                            <MobileMenu />
                        </div>

                        {/* Logo */}
                        <Link to="/" className="flex items-center gap-2">
                            <img
                                className="max-w-6 rounded-full lg:max-w-10"
                                src='https://i.ibb.co/2WRx77P/Black-And-Beige-Minimalist-Aesthetic-Modern-Simple-Typography-Salt-Logo.png'
                                alt="mountain-image"
                            />
                            <h2 className="font-bold text-[14px] md:text-[16px] lg:text-xl text-red-600">
                                Advanture shop
                            </h2>
                        </Link>
                    </div>
                    <div className="hidden md:flex items-center gap-6">
                        <NavLink
                            className={({ isActive }) =>
                                isActive
                                    ? "text-red-500 border-b-2 border-red-500 font-medium"
                                    : "text-gray-100 hover:text-red-500 hover:border-b-2 font-medium hover:border-red-500"
                            }
                            to="/"
                        >
                            Home
                        </NavLink>
                        <NavLink
                            className={({ isActive }) =>
                                isActive
                                    ? "text-red-500 border-b-2 border-red-500 font-medium"
                                    : "text-gray-100 hover:text-red-500 hover:border-b-2 font-medium hover:border-red-500"
                            }
                            to="/products"
                        >
                            Products
                        </NavLink>

                        <NavLink
                            className={({ isActive }) =>
                                isActive
                                    ? "text-red-500 border-b-2 border-red-500 font-medium"
                                    : "text-gray-100 hover:text-red-500 hover:border-b-2 font-medium hover:border-red-500"
                            }
                            to="/product-management"
                        >
                            Product Management
                        </NavLink>
                        <NavLink
                            className={({ isActive }) =>
                                isActive
                                    ? "text-red-500 border-b-2 border-red-500 font-medium"
                                    : "text-gray-100 hover:text-red-500 hover:border-b-2 font-medium hover:border-red-500"
                            }
                            to="/about-us"
                        >
                            About Us
                        </NavLink>

                    </div>
                    <div className="flex items-center gap-4 md:gap-6">
                        <NavLink
                            className={({ isActive }) =>
                                `font-medium flex items-center gap-1 ${isActive
                                    ? "text-red-500"
                                    : "text-gray-100 hover:text-red-500"
                                }`
                            }
                            to="/cart"
                        >
                            <p className="hidden lg:block"></p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-shopping-cart"><circle cx="8" cy="21" r="1" /><circle cx="19" cy="21" r="1" /><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" /></svg>
                        </NavLink>
                        <NavLink
                            className={({ isActive }) =>
                                `font-medium flex items-center gap-1 ${isActive
                                    ? "text-red-500"
                                    : "text-gray-100 hover:text-red-500"
                                }`
                            }
                            to="/wishlist"
                        >
                            <p className="hidden lg:block"></p>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="size-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                                />
                            </svg>
                        </NavLink>
                    </div>
                </div>
            </section>
        </Headroom>
    );
};

export default Navbar;
