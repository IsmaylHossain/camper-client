import { Link } from "react-router-dom";
import { Button } from "../ui/button";
// import Rating from "react-rating";
// import { Star } from "lucide-react";

import { Rating, ThinStar } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import { useState } from "react";
export type TProduct = {
    _id: string;
    category: string;
    description: string;
    image: string;
    name: string;
    price: number;
    quantity: number;
    rating: number;
    stock: boolean;
    __v: number;
};

type ProductCardProps = {
    product: TProduct;
};

const myStyles = {
    itemShapes: ThinStar,
    activeFillColor: '#cb2222',
    inactiveFillColor: '#fbf1a9'
}
const ProductCart = ({ product }: ProductCardProps) => {
    const [rating, setRating] = useState(0);

    const discount = product?.price + 18;

    return (
        <div className=" lg:min-w-[420px] md:h-[550px] md:min-w-[700px] w-[300px] h-[360px] md:max-w-[700px] lg:min-h-[550px] mx-auto rounded-[20px] bg-black hover:bg-gray-700    flex flex-col gap-4  transition-transform duration-100 bg-">
            <div className="flex-1 flex-grow overflow-hidden rounded-lg">
                <img
                    className="w-full object-cover h-64 md:h-72  lg:h-[350px]  rounded-t-[10px]"
                    src={product?.image}
                    alt={product?.name}
                />
            </div>
            <div>
                <h1 className="text-xl lg:text-[20px] text-center font-serif text-white">{product?.name}</h1>
            </div>
            <div className="flex items-center justify-center gap-2">

                <div>  <Rating className=" size-10 w-fit"
                    // value={rating}
                    onChange={setRating}


                    style={{ maxWidth: 100, }}
                    readOnly={false}
                    value={product?.rating ?? 0}
                    itemStyles={myStyles}
                />
                    <p>Your rating: {rating} </p></div>
            </div>
            <div className="flex flex-col gap-5">
                <div className="space-y-1">

                    <div className="flex justify-start  px-4 gap-3 items-center">
                        <h3 className="text-[13px]  md:text-xl lg:text-[17px]   font-semibold text-[#FF0000]">
                            $ {product?.price}.00 USD
                        </h3>
                        <h3 className=" text-[11px] md:text-xl lg:text-[16px]   font-semibold text-white line-through">
                            $ {discount}.00 USD
                        </h3>
                        <p className="text-[11px] text-center lg:pl-16 md:pl-80 pl-6 lg:text-[13px] text-white font-medium flex items-center gap-1">
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
                                    d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z"
                                />
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 6h.008v.008H6V6Z"
                                />
                            </svg>{" "}
                            {product?.category}
                        </p>
                    </div>
                </div>

                <Link to={`/products-details/${product?._id}`} className="flex items-center justify-center mb-2 lg:mb-5">
                    <Button className="w-[70%] rounded-[10px] hover-text-black font-serif mx-auto text-sm lg:text-[16px] bg-[#a61212] text-white hover:bg-red-600">
                        See Details
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default ProductCart;
