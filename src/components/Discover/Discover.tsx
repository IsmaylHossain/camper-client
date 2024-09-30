import { Link } from "react-router-dom";

const Discover = () => {
    return (
        <div className="bg-gradient-to-br lg:pt-8 first-letter:  from-[#000000] via-[#000000] to-[#310202]">
            <div className=' lg:mt-32'>
                <h1 className='text-white font-mono text-[19px] text-center  md:text-[30px] lg:pb-8 '>We Live To Discover
                </h1>
                <section className="text-gray-600 body-font h-full   lg:h-[500px]">
                    <div className="container mx-auto flex md:flex-col px-5 md:pt-10 lg:flex-row justify-center lg:gap-0 md:gap-8 flex-col items-center">
                        <div className="lg:w-[800px] md:w-[600px]   w-full mb-10 md:mb-0">
                            {/* <img className='' src="https://i.ibb.co/1X3GJD0/d.jpg" alt="" /> */}
                            <video autoPlay muted loop src="https://adventureshop.mt/cdn/shop/videos/c/vp/5e5b66297db847fd93978ed0b4342459/5e5b66297db847fd93978ed0b4342459.HD-1080p-7.2Mbps-29368979.mp4?v=0"></video>
                        </div>
                        <div className="lg:flex-grow md:w-[700px] lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium selection:text-black selection:bg-white text-white ">JACK WOLFSKIN
                            </h1>
                            <p className="mb-8 leading-relaxed selection:text-black text-white selection:font-bold selection:bg-white text-[12px] lg:text-[15px] ">Forged around a campfire, they are driven to extend and deepen outdoor experiences by providing the most sustainable solutions for apparel, footwear, and equipment, designing products for hiking, trekking, commuting, camping & bikepacking to enable the journey. Jack Wolfskin always encourages people to embrace wanderlust and to utilize time in nature to recharge. From their first steps, to thier last breath, life is made by moments of discovery.

                            </p>
                            <div className="flex justify-center items-center">
                                <Link to='/products'>
                                    <button className="inline-flex text-white bg-red-600 border-0 py-2 px-6 text-center focus:outline-none hover:bg-red-500 mx-auto rounded w-full text-lg">See More</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Discover;