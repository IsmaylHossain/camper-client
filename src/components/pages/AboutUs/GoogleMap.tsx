const GoogleMap = () => {
    return (
        <section className="  lg:my-28 px-3  min-h-[400px] max-w-screen-xl mx-auto">
            <div className="mb-5">
                <h2
                    data-aos="fade-up"
                    className="text-3xl md:text-4xl text-white font-bold text-center font-young-serif"
                >

                </h2>
            </div>
            <div className="flex selection:bg-black flex-col-reverse lg:flex-row-reverse justify-between md:items-center">
                <div className="flex-1 space-y-10 mt-1 lg:mt-0">
                    <h2
                        data-aos="fade-up"
                        className=" text-xl md:text-3xl text-center font-bold text-red-600"
                    >
                        Advanture shop <span className="text-white">Location</span>
                    </h2>

                    <div>


                    </div>
                    <div>
                        <h3
                            data-aos="fade-up"
                            className=" text-[16px] md:text-xl text-center justify-center items-center font-semibold text-white flex gap-2"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="red"
                                className="size-5"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                                />
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                                />
                            </svg>
                            CUMILLA , Bangladesh
                        </h3>
                        <p data-aos="fade-up" className="  text-xl text-white">
                        </p>
                    </div>
                    <div>
                        <h3
                            data-aos="fade-up"
                            className="text-[15px] md:text-xl  justify-center items-center font-semibold text-center text-white flex gap-2"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="red"
                                className="size-5"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                                />
                            </svg>
                            +880 1800000000
                        </h3>
                        <p data-aos="fade-up" className=" text-[15px] md:text-xl text-center  text-white">

                        </p>
                    </div>
                </div>

                <div className="flex-1  relative w-full h-0 pb-[56.25%] lg:pb-[43%]">
                    <iframe className="border-0  rounded-[20px] w-full h-full absolute top-0 left-0" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d915.0060065200018!2d90.6227969695282!3d23.459597828930157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3754549691400001%3A0x6c94cdcd046032f!2sJeeb%20Gaon%20General%20Haque%20High%20School%20And%20College!5e0!3m2!1sen!2sbd!4v1720860460611!5m2!1sen!2sbd" allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"></iframe>

                </div>
            </div>
        </section>
    );
};

export default GoogleMap;
