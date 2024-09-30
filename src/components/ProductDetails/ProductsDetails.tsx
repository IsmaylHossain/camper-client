import "./ImageManify.css"
import {
    useGetSingleProductQuery
} from "@/redux/api/baseApi";
import { useParams } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { addToCart } from "@/redux/api/featcher/cartSlice";
import { toast } from "sonner";
import AccrodionForDetailsPage from "./AcrodionForDetailsPage";
import React, { useState } from "react";
// import Rating from "react-rating";
import { Rating, ThinStar } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';

const myStyles = {
    itemShapes: ThinStar,
    activeFillColor: '#cb2222',
    inactiveFillColor: '#fbf1a9'
}
const ProductDetails = () => {

    const { id } = useParams();
    const [rating, setRating] = useState(0);


    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [showMagnifier, setShowMagnifier] = useState(false);
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

    const { data, isLoading } = useGetSingleProductQuery(id);

    const dispatch = useAppDispatch();
    const cart = useAppSelector((state) => state.cart);
    const currentProduct = cart?.find((item) => item._id === id);

    const handleAddToCart = async () => {
        const { __v, quantity: oldQuantity, ...otherData } = data.data;

        const cartData = {
            ...otherData,
            quantity: 1,
        };

        dispatch(addToCart(cartData));

        toast.success("Product added to cart");
        console.log(cartData);

    };
    if (isLoading) {
        return <div className=" text-white bg-black pt-10 text-center">Loading...</div>;
    }
    const discount = data?.data?.price + 18;




    const handleMouseHover = (e: React.MouseEvent<HTMLDivElement>) => {

        const { left, top, width, height } =
            e.currentTarget.getBoundingClientRect();

        const x = ((e.pageX - left - window.scrollX) / width) * 100;
        const y = ((e.pageY - top - window.scrollY) / height) * 100;
        const cursorX = e.pageX - left - window.scrollX;
        const cursorY = e.pageY - top - window.scrollY;

        setPosition({ x, y });

        setCursorPosition({ x: cursorX, y: cursorY });
    };
    return (
        <section className=" w-full bg-black min-h-[400px]  mx-auto py-16 px-3 lg:px-6 flex flex-col md:flex-row md:item-center lg:items-start gap-5">
            <div className=" overflow-hidden">

                <img
                    className="w-full  magnifier-container h-[350px] md:h-[350px] md:w-full mx-auto lg:h-[570px] lg:w-[900px] rounded-[20px]img-magnifier-container"
                    onMouseEnter={() => setShowMagnifier(true)}
                    onMouseLeave={() => setShowMagnifier(false)}
                    onMouseMove={handleMouseHover}
                    src={data?.data?.image}
                    alt=""
                />
                {showMagnifier && (
                    <div
                        style={{
                            position: "absolute",
                            left: `${cursorPosition.x - 100}px`,
                            top: `${cursorPosition.y + 20}px`,
                            pointerEvents: "none",
                            width: "250px",
                            height: "250px",
                            border: "2px solid #000",
                            borderRadius: "10px",
                            backgroundImage: `url(${data?.data?.image})`,

                            backgroundSize: "300%",
                            backgroundPosition: `${position.x}% ${position.y}%`,
                            zIndex: 10,
                        }}
                    ></div>
                )}
            </div>
            <div className=" border-2 p-2 lg:p-6 w-full mx-auto md:w-[420px] md:h-full lg:w-[700px] rounded-[20px] border-red-600  ">
                <div className="py-4 border-b border-white space-y-2">
                    <div className="flex mb-1 lg:mb-10 items-center justify-between gap-2">
                        <h2 className=" text-[15px]  md:text-2xl lg:text-4xl font-medium text-white font-young-serif">
                            {data?.data?.name}
                        </h2>
                        <div>  <Rating className="size-10  w-fit"
                            // value={rating}
                            onChange={setRating}
                           
                           
                            style={{ maxWidth: 100, }}
                            readOnly={false}
                            value={data?.data?.rating}
                            itemStyles={myStyles}
                        />
                            <p>Your rating: {rating} </p></div>

                    </div>
                    <div className="flex pb-4 border-b-2 border-gray-100 mb-2 md:pb-6 lg:pb-8 justify-start gap-5 lg:gap-8 items-center">
                        <h3 className="text-[#FF0000] text-[15px] md:text-xl lg:text-3xl font-normal ">
                            ${data?.data?.price}.00 USD
                        </h3>
                        <h3 className="text-white text-xl line-through font-bold ">
                            ${discount}.00 USD
                        </h3>
                    </div>

                    <p className="text-white py-2 md:py-5 lg:py-5">{data?.data?.description}</p>
                </div>
                <div className='py-4 md:py-6'>
                    <h1 className=" text-[16px] md:text-[20px] text-white font-bold">
                        Available quantity: {data?.data?.quantity}
                    </h1>

                </div>
                <div className="pt-5 w-[99%] mx-auto">
                    <div className="space-y-1">

                        <div className="flex items-center justify-between gap-2">
                            {data?.data?.stock ? (
                                <p className="text-green-500 text-xl font-bold flex gap-1 items-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="size-5"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="m4.5 12.75 6 6 9-13.5"
                                        />
                                    </svg>{" "}
                                    In Stock
                                </p>
                            ) : (
                                <p className="text-red-500  text-xl font-bold flex gap-1 items-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="size-5"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M6 18 18 6M6 6l12 12"
                                        />
                                    </svg>{" "}
                                    Out Of Stock
                                </p>
                            )}
                            <p className="text-[12px] text-white font-medium flex items-center gap-1">

                                {data?.data?.category}
                            </p>
                        </div>
                    </div>

                    <div>
                        <Button
                            onClick={handleAddToCart}
                            disabled={
                                !data?.data?.stock ||
                                data?.data?.quantity === currentProduct?.quantity
                            }
                            className="w-full  bg-[#DA000B] hover:bg-[#b51e25] text-white py-3 rounded-[10px] mt-4"
                        >
                            Add To Cart
                        </Button>
                    </div>

                    <div>
                        <AccrodionForDetailsPage data={data} />
                    </div>
                </div>
            </div>
            {/* products */}
        </section>
    );
};

export default ProductDetails;
