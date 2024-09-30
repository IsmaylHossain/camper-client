import { Link } from "react-router-dom";
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
    const sortDis = product?.description.slice(0, 60)
    console.log(sortDis);
    return (
        <Link to={`/products-details/${product?._id}`}>  <div className=" lg:w-[238px] md:w-[236px] h-full rounded-lg  mx-auto  w-full flex flex-col gap-3"
        >
            <div className=" overflow-hidden rounded-lg">
                <img
                    className="w-full object-cover  h-[170px] lg:h-[170px] rounded-[15px]"
                    src={product?.image}
                    alt={product?.name}
                />
            </div>
            <div className="flex flex-col gap-5">
                <div className="space-y-1">
                    <div className="flex flex-row justify-start gap-3 items-center px-2">
                        <h3 className="text-[13px] font-bold text-[#2FD06D]  py-1 px-4 rounded-[15px] bg-[#1D3534] ">${product?.price}</h3>
                        <h3 className="text-[12px] font-bold text-[#ff6128]  py-1 px-4 rounded-[15px] bg-[#5e31316d] ">
                            {product?.stock ? "AVAILABLE" : "OUT OF STOCK"}
                        </h3>

                    </div>

                    <div className="flex pt-2  items-center pl-3">
                        <h3 className=" font-semibold text-start text-[14px] lg:text-[15px] text-white ">
                            {product?.name}
                        </h3>

                    </div>
                    <div className=" py-1  pl-3">
                        <h3 className=" font-semibold text-start text-[12px] lg:text-[14px] text-white ">
                            {sortDis}...
                        </h3>

                    </div>
                </div>


            </div>
        </div>
        </Link>
    );
};

export default ProductCart;
