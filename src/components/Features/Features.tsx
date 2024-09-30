import { useGetProductsQuery } from "@/redux/api/baseApi";
import ThreeDCardDemo from "../3d-card";

const BestSellingSection = () => {
    const { data, isLoading } = useGetProductsQuery(undefined);

    let loadingState;

    if (isLoading) {
        return (loadingState = <div className="text-white bg-black text-center">Loading...</div>);
    }

    return (
        <div className=" mt-28 space-y-16 pb-4 bg-black  lg:pt-8 px-3 lg:px-0">
            <div className="mx-auto text-center w-[98%] mb-8 space-y-2">

                <h2 className="text-3xl border-b-2 border-t-2 py-2 lg:py-8 border-white md:text-4xl text-white font-bold text-center  font-young-serif">
                    Features <span className="text-[#ee2c2c]"> products</span>
                </h2>

            </div>
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-2 min-h-80 ">
                {isLoading
                    ? loadingState
                    : data?.data
                        ?.slice(4, 8)
                        .map((product: any) => (
                            <ThreeDCardDemo key={product._id} product={product} />
                        ))}
            </div>


        </div>
    );
};

export default BestSellingSection;
