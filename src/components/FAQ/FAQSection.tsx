import { useState } from "react";

const FaqSection = () => {
    // add your array of object data
    const dataArr = [
        {
            title: 'How do I place an order?', description: "To place an order, simply browse through our products, add your desired items to the cart, and proceed to checkout. You'll need to provide your shipping information and select a payment method to complete your purchase."
        },

        {
            title: 'How we use your data?', description: "If you’re asking yourself what is going with your personal data after a purchase, then let’s make it clear: your personal data are retained three years maximum following your last interaction with Decathlon. It gives you the possibility, among others, to easily return a product if you change your mind or if you bought the wrong size! (according to our return policy). Three years after the last interaction with you, we will automatically delete your account and all the personal data we have on you (account, email address, etc)."
        },

        {
            title: 'How long does delivery take?', description: "Delivery times can vary depending on certain factors.When you select your shipping method on the delivery page of checkout, you’ll be given an estimated delivery date (usually around 2 or 3 days).If your delivery date is longer than this it may mean that one or more of your items are coming from our overseas warehouse - If you can't wait, it's best you only order products with the same delivery time as we're not able to split an order into two shipments."
        },
        {
            title: 'Can I change my delivery method?', description: "Unfortunately once you place your order you cannot change your delivery method. If the status of your order still allows, you can cancel your order and place a new one on our website with your updated choice of delivery method."
        },

        {
            title: 'Are there any discounts for loyal customers?', description: 'We appreciate our loyal customers! Stay tuned for exclusive discounts, promotions, and special offers available to members of our loyalty program.'
        }
    ];

    // toggle state and function
    const [isOpen, setIsOpen] = useState(null);
    const handleToggle = (idx: any) => {
        setIsOpen((prevIdx) => (prevIdx === idx ? null : idx));
    };

    return (
        <div className="lg:pt-20 bg-black pt-2 pb-5 lg:pb-36 p-6 lg:p-0">
            <div className='flex pb-2 lg:pb-8 justify-center items-center gap-5 '>
                <h1 className="text-[45px] text-white">FAQ</h1>
                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide text-white lucide-message-circle-question"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" /><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" /><path d="M12 17h.01" /></svg>
            </div>

            <div className="flex w-[98%] mx-auto  justify-center">
                <div className=" w-[90%] mx-auto cursor-pointer space-y-6">
                    {/* mapping each accordion  */}
                    {dataArr.map((data, idx) => (
                        <div key={idx} onClick={() => handleToggle(idx)} className="flex items-center justify-center">
                            {/* the index div  */}
                            <div className="flex  size-10 lg:size-16 select-none items-center justify-center rounded-md bg-gradient-to-tr to-[#7507a1] via-[#110111] from-[#8507a1] text-2xl font-semibold text-white">
                                <span >0{idx + 1}</span>
                            </div>

                            <div className="relative h-[2px] w-10 bg-gradient-to-r from-[#1aff00] to-[#00fffb] via-[#ff00f2]">
                                <span className="absolute -left-2 -top-[5px] z-40 h-3 w-3 rounded-full border-2 border-zinc-700 bg-black"></span>
                                <span className="h-1 w-10 bg-zinc-700"></span>
                                <span
                                    className={`absolute -right-2 -top-[5px] z-40 h-3 w-3 rounded-full border-2 ${isOpen === idx ? 'border-zinc-700 bg-black delay-100' : 'border-transparent'}`}
                                ></span>
                            </div>

                            {/* main accordion div  */}
                            <div className="text-center">
                                <div className="relative w-full mx-auto lg:w-[950px] md:w-[450px] border-t-[12px] border-zinc-700 bg-black p-3 shadow-md">
                                    <span className="absolute right-0 top-0 h-0 w-0 border-b-[40px] border-r-[40px] border-b-transparent border-r-[#5c5b5b]"></span>
                                    <h1 className="select-none text-[13px] lg:text-lg text-white">{data.title}</h1>
                                </div>
                                <div className={`grid overflow-hidden text-slate-600 transition-all duration-300 ease-in-out ${isOpen === idx ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                                    <div className="overflow-hidden">
                                        <div className="w-full text-gray-200 mx-auto md:w-[450px] lg:w-[950px] bg-gradient-to-t from-black to-[#000] p-6 text-[10px] lg:text-sm border-t border-gray-600">{data.description}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>

    );
}
export default FaqSection