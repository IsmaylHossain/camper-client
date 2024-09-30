import { Link } from "react-router-dom";
import { Button } from "../ui/button";
// import Rating from "react-rating";
import { Rating, ThinStar } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import { useState } from "react";

const myStyles = {
    itemShapes: ThinStar,
    activeFillColor: '#cb2222',
    inactiveFillColor: '#fbf1a9'
}
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
const ProductCart = ({ product }: ProductCardProps) => {
    const [rating, setRating] = useState(0);
    const discount = product?.price + 18;

    return (
        <div className=" lg:w-[300px] md:h-[300px] w-[300px] h-[360px] md:w-[300px] lg:h-[350px]  mx-auto rounded-[20px] bg-black hover:bg-[#171717]    flex flex-col gap-4  transition-transform duration-100 bg-">
            <div className="flex-1 flex-grow overflow-hidden  rounded-[10px]">
                <img
                    className="w-full object-cover hover:scale-105 hover:duration-300 hover:rounded-[10px] h-64 md:h-72  lg:h-[200px]  rounded-[10px]"
                    src={product?.image}
                    alt={product?.name}
                />
            </div>
            <div className="flex items-center justify-between  px-3 lg:px-3">
                <h1 className="text-sm lg:text-[14px] text-center font-serif text-white">{product?.name}</h1>
                <div className="flex items-center justify-center gap-2">

                    <div>  <Rating className=" size-10 w-fit"
                        // value={rating}
                        onChange={setRating}

                        style={{ maxWidth: 100, }}
                        readOnly={false}
                        value={product?.rating}
                        itemStyles={myStyles}
                    />
                        <p>Your rating: {rating} </p></div>
                </div>
            </div>
            <div className="flex flex-col gap-5">
                <div className="space-y-1 flex justify-between px-3 lg:px-3 ">

                    <div className="flex justify-start   gap-3 items-center">
                        <h3 className="text-[10px]  md:text-sm lg:text-[14px]   font-semibold text-[#FF0000]">
                            $ {product?.price}.00 USD
                        </h3>
                        <h3 className=" text-[9px] md:text-sm lg:text-[13px]   font-semibold text-white line-through">
                            $ {discount}.00 USD
                        </h3>

                    </div>
                    <p className="text-[9px] text-center  lg:text-[10px] text-white font-medium flex items-center gap-1">
                        {product?.stock ? <span className="text-green-500">AVAILABLE</span> : <span className="text-red-600">Out of stock</span>}

                    </p>
                </div>

                <Link to={`/products-details/${product?._id}`} className="flex items-center justify-center mb-2 lg:mb-5">
                    <Button className="w-[90%] rounded-[10px]  font-serif mx-auto text-sm lg:text-[16px] bg-[#a61212] text-white hover:bg-red-600">
                        See Details
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default ProductCart;
