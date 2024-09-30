import { useGetProductsQuery } from "@/redux/api/baseApi";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import ProductCart from "./ProductCart";
import { TProduct } from "../pages/Products/ProductCart";

const BestSellingSection = () => {
    const { data, isLoading } = useGetProductsQuery(undefined);

    let loadingState;

    if (isLoading) {
        return (loadingState = <div className="text-white bg-black text-center">Loading...</div>);
    }

    return (
        <div className=" mt-28 space-y-16 pb-4 bg-black  lg:pt-8 px-3 lg:px-0">
            <div className="mx-auto text-center w-[98%] mb-8 space-y-2">

                <h2 className="text-3xl border-b-2 border-t-2 py-2 lg:py-8 border-white md:text-4xl text-white font-bold text-start  font-young-serif">
                    Best <span className="text-[#ee2c2c]">selling products</span>
                </h2>

            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 min-h-80 ">
                {isLoading
                    ? loadingState
                    : data?.data
                        ?.slice(0, 8)
                        .map((product: TProduct) => (
                            <ProductCart key={product._id} product={product} />
                        ))}
            </div>

            <div className="flex justify-center ">
                <Link to="/products">
                    <Button className="bg-[#be1212] rounded-[10px] text-black font-bold hover:bg-red-600">View more</Button>
                </Link>
            </div>
        </div>
    );
};

export default BestSellingSection;
