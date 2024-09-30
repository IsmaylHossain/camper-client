import { useState } from "react";
// export type TAccrodionForDetailsProps = {
//     title?: string;
//     description?: string;
//     outOfStock?: string;
//     cetegory?: string

// }
const AccrodionForDetailsPage = ({ data }: any) => {
    const [isOpen, setIsOpen] = useState(null);
    const dataArr = [
        {
            title: "Details",
            description: `${data?.data?.description}`,
            outOfStock: "Out of stock",
            cetegory: 'something.',
        },
        {
            title: "Delivery Time",
            description: "At our company, we prioritize swift delivery. Orders are processed within 24 hours and shipped using trusted partners, ensuring your products reach you within three days. Your satisfaction is our top priority.",
        },
        {
            title: "Refound Policy",
            description: "Our refund policy is straightforward: if you're not satisfied with your purchase, contact us within 7 days of receipt, and we'll guide you through the return process. Once we receive the item in its original condition, we'll issue a refund to your original payment method. Your satisfaction is our priority, and we aim to make the refund process hassle-free.",
        },




    ];
    const toggle = (idx: any) => {
        setIsOpen((prevIdx) => (prevIdx === idx ? null : idx))
    };

    return (
        <div className="w-full max-w-[500px] bg-inherit px-2 *:mix-blend-difference dark:bg-inherit">
            {dataArr.map((PerAccordion, idx) => (
                <div key={idx} className=" py-3 mt-10 border hover:border-[#DA000B] border-white p-2 lg:px-4 rounded-[10px]">

                    <button onClick={() => toggle(idx)} className="flex h-full w-full justify-between font-medium outline-none text-white">


                        <span className="font-bold text-white text-[13px] md:my-3 lg:text-[18px]">{PerAccordion.title}</span>
                        <span className="rounded-full p-2">
                            <svg className="ml-8 size-3 shrink-0 fill-white" xmlns="http://www.w3.org/2000/svg">
                                <rect y="5" width="12" height="2" rx="1" className={`origin-center transform transition duration-200 ease-out ${isOpen === idx && '!rotate-180'}`} />
                                <rect y="5" width="12" height="2" rx="1" className={`origin-center rotate-90 transform transition duration-200 ease-out ${isOpen === idx && '!rotate-180'}`} />
                            </svg>
                        </span>
                    </button>
                    <div className={`grid overflow-hidden  transition-all duration-300 ease-in-out ${isOpen === idx ? 'grid-rows-[1fr] pb-1 pt-3 opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                        <div className="overflow-hidden pr-4 text-white  text-sm lg:text-[18px]">{PerAccordion.description}</div>
                    </div>


                </div>
            ))}
        </div>
    );
}

export default AccrodionForDetailsPage;