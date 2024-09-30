
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

export function Category() {
    return (
        <div className="bg-black lg:pt-20 pt-8">
            <div>
                <div className="text-center text-xl md:text-3xl text-white py-2 lg:pb-16 font-sans">Product Category</div>
            </div>
            <div className="grid grid-cols-1 w-[99%] mx-auto md:grid-cols-2 lg:grid-cols-4 gap-2 min-h-80 ">
                <Link to="/products">
                    <div className="max-w-xs mx-auto  rounded-[10px] w-full">
                        <div
                            className={cn(
                                "group w-full cursor-pointer overflow-hidden relative card h-96 shadow-xl mx-auto flex flex-col justify-end p-4 border-gray-400 border  rounded-[10px]",
                                "bg-[url(https://i.ibb.co/Hnx6ZVj/camping-decathlon.jpg)] bg-cover",
                                // Preload hover image by setting it in a pseudo-element
                                "before:bg-[url(https://i.ibb.co/thk2fhS/6107.jpg)] before:fixed before:inset-0 before:opacity-0 before:z-[-1]",
                                "hover:bg-[url(https://i.ibb.co/thk2fhS/6107.jpg)]",
                                "hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-50",
                                "transition-all duration-500 rounded-[10px]"
                            )}
                        >
                            <div className="text relative z-50">
                                <h1 className="font-bold text-xl text-center  md:text-2xl text-gray-50 relative">
                                    Camping Gear
                                </h1>
                                <p className="font-normal text-base text-gray-50 relative my-4">
                                    Essential equipment for a comfortable and safe outdoor camping experience, including tents, sleeping bags, and camping stoves.
                                </p>
                            </div>
                        </div>
                    </div>
                </Link>
                <Link to="/products">
                    <div className="max-w-xs mx-auto   rounded-[10px] w-full">
                        <div
                            className={cn(
                                "group w-full cursor-pointer overflow-hidden relative card h-96 shadow-xl mx-auto flex flex-col justify-end p-4 border-gray-400 border  rounded-[10px]",
                                "bg-[url(https://i.ibb.co/mGg5xc0/61653.jpg)] bg-cover",
                                // Preload hover image by setting it in a pseudo-element
                                "before:bg-[url(https://i.ibb.co/mzQWrFJ/2151049529.jpg)] before:fixed before:inset-0 before:opacity-0 before:z-[-1]",
                                "hover:bg-[url(https://i.ibb.co/mzQWrFJ/2151049529.jpg)]",
                                "hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-50",
                                "transition-all duration-500 rounded-[10px]"
                            )}
                        >
                            <div className="text relative z-50">
                                <h1 className="font-bold text-xl text-center  md:text-2xl text-gray-50 relative">
                                    Hiking Equipment


                                </h1>
                                <p className="font-normal text-base text-gray-50 relative my-4">
                                    High-quality gear for all hiking adventures, from durable boots and backpacks to trekking poles and navigation devices.
                                </p>
                            </div>
                        </div>
                    </div>
                </Link>
                <Link to="/products">
                    <div className="max-w-xs mx-auto  rounded-[10px] w-full">
                        <div
                            className={cn(
                                "group w-full cursor-pointer overflow-hidden relative card h-96 shadow-xl mx-auto flex flex-col justify-end p-4 border-gray-400 border  rounded-[10px]",
                                "bg-[url(https://i.ibb.co/vJhsVRS/18467.jpg)] bg-cover",
                                // Preload hover image by setting it in a pseudo-element
                                "before:bg-[url(https://i.ibb.co/D5FsqHv/9158.jpg)] before:fixed before:inset-0 before:opacity-0 before:z-[-1]",
                                "hover:bg-[url(https://i.ibb.co/D5FsqHv/9158.jpg)]",
                                "hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-50",
                                "transition-all duration-500 rounded-[10px]"
                            )}
                        >
                            <div className="text relative z-50">
                                <h1 className="font-bold text-xl text-center  md:text-2xl text-gray-50 relative">
                                    Outdoor Apparel



                                </h1>
                                <p className="font-normal text-base text-gray-50 relative my-4">
                                    Durable and weather-resistant clothing designed for outdoor activities, including jackets, pants, base layers, and accessories.

                                </p>
                            </div>
                        </div>
                    </div>
                </Link>
                <Link to="/products">
                    <div className="max-w-xs mx-auto  rounded-[10px] w-full">
                        <div
                            className={cn(
                                "group w-full cursor-pointer overflow-hidden relative card h-96 shadow-xl mx-auto flex flex-col justify-end p-4 border-gray-400 border  rounded-[10px]",
                                "bg-[url(https://i.ibb.co/D5FsqHv/9158.jpg)] bg-cover",
                                // Preload hover image by setting it in a pseudo-element
                                "before:bg-[url(https://i.ibb.co/D5FsqHv/9158.jpg)] before:fixed before:inset-0 before:opacity-0 before:z-[-1]",
                                "hover:bg-[url(https://i.ibb.co/thk2fhS/6107.jpg)]",
                                "hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-50",
                                "transition-all duration-500 rounded-[10px]"
                            )}
                        >


                            <div className="text relative z-50">
                                <h1 className="font-bold text-xl text-center  md:text-2xl text-gray-50 relative">
                                    Travel Essentials



                                </h1>
                                <p className="font-normal text-base text-gray-50 relative my-4">
                                    Convenient travel gear, including luggage, packing organizers, travel accessories, and portable chargers for a hassle-free journey.
                                </p>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );
}
