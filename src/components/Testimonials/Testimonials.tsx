

const Testimonials = () => {


    return (
        <div className=' bg-gradient-to-tr from-[#000000] via-[#000000] to-[#310202]'>
            <h1 className="text-2xl  md:text-2xl lg:text-3xl text-center text-white md:pt-8 pt-8 lg:pt-10 font-mono">Testimonials</h1>
            <section className="text-gray-100 body-font">
                <div className="container px-5 py-24 mx-auto">

                    <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
                        <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
                            <div className="w-20 h-20 inline-flex items-center overflow-hidden justify-center rounded-full bg-white text-pink-500 mb-5 flex-shrink-0">
                                <img className="rounded-full w-[80px] h-[80px]" src="https://i.ibb.co/1X3GJD0/d.jpg" alt="" />
                            </div>
                            <div className="flex-grow">
                                <h2 className="text-gray-100 text-lg title-font font-medium mb-3">Shooting Stars</h2>
                                <p className="leading-relaxed text-[12px] lg:text-[16px] ">Campers Shop offers fantastic camping gear and accessories. The products I purchased were well-made and reliable, and the customer support team was friendly and helpful. I’m thrilled with my experience and my new camping gear</p>

                            </div>
                        </div>
                        <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
                            <div className="w-20 h-20 inline-flex items-center overflow-hidden justify-center rounded-full bg-white text-pink-500 mb-5 flex-shrink-0">
                                <img className="rounded-full w-[80px] h-[80px]" src="https://i.ibb.co/1X3GJD0/d.jpg" alt="" />
                            </div>
                            <div className="flex-grow">
                                <h2 className="text-gray-100 text-lg title-font font-medium mb-3">The Catalyzer</h2>
                                <p className="leading-relaxed text-[12px] lg:text-[16px]">I love this company. The products I purchased were well-made and reliable, and the customer support team was friendly and helpful. I’m thrilled with my experience and my new camping gear</p>

                            </div>
                        </div>
                        <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
                            <div className="w-20 h-20 inline-flex items-center overflow-hidden justify-center rounded-full bg-white text-pink-500 mb-5 flex-shrink-0">
                                <img className="rounded-full w-[80px] h-[80px]" src="https://i.ibb.co/1X3GJD0/d.jpg" alt="" />
                            </div>
                            <div className="flex-grow">
                                <h2 className="text-gray-100 text-lg title-font font-medium mb-3">Neptune</h2>
                                <p className="leading-relaxed text-[12px] lg:text-[16px]">The products I purchased were well-made and reliable, and the customer support team was friendly and helpful. I’m thrilled with my experience and my new camping gear"</p>

                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default Testimonials;