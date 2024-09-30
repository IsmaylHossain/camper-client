
import { CardBody, CardContainer, CardItem } from "../components/ui/3d-card-section";
import { Link } from "react-router-dom";
export type TProduct = {
    _id: string;

    description: string;
    image: string;
    name: string;
    price: number;


};

type ProductCardProps = {
    product: TProduct;
};
const ThreeDCardDemo = ({ product }: ProductCardProps) => {
    const discount = product?.price + 18;
    const sortDis = product?.description.slice(0, 180)

    return (
        <div className="">
            <CardContainer className="inter-var bg-black">
                <CardBody className="bg-black relative group/card  dark:hover:shadow-2xl hover:shadow-emerald-500/[0.1] md:w-[550px] w-[280px] lg:w-[630px]   border-black/[0.1]   h-auto rounded-xl p-6 border  ">
                    <div className="flex flex-row justify-between lg:px3 items-center">
                        <CardItem
                            translateZ="50"
                            className="  text-sm md:text-xl font-bold text-white dark:text-white"
                        >
                            {product?.name}
                        </CardItem>
                        <CardItem
                            translateZ="50"
                            className="text-xl font-bold text-white dark:text-white"
                        >
                            <div className="flex justify-start  px-4 gap-3 items-center">
                                <h3 className="text-[10px]  md:text-xl lg:text-[16px]   font-bold text-[#FF0000]">
                                    $ {product?.price}.00
                                </h3>
                                <h3 className=" text-[9px] md:text-xl lg:text-[15px]   font-normal text-gray-300 line-through">
                                    $ {discount}.00
                                </h3>

                            </div>
                        </CardItem>
                    </div>
                    <CardItem
                        as="p"
                        translateZ="60"
                        className="text-neutral-500 text-sm w-full mt-2 dark:text-neutral-300"
                    >
                        <h3 className=" font-semibold text-start text-[12px] lg:text-[13px] text-gray-300 ">
                            {sortDis}...
                        </h3>

                    </CardItem>
                    <CardItem translateZ="100" className="w-full mt-4">
                        <img
                            src={product?.image}
                            alt={product?.name}
                            height="1000"
                            width="1000"
                            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"

                        />
                    </CardItem>
                    <div className="flex justify-between text-white items-center mt-20">
                        <Link to="products">
                            <CardItem
                                translateZ={20}
                                as={Link}
                                href="https://twitter.com/mannupaaji"
                                target="__blank"
                                className="px-4 py-2 md:text-[14px]l bg-white text-black  rounded-xl text-xs font-bold dark:text-white"
                            >
                                Try now →
                            </CardItem></Link>
                        <Link to={`/products-details/${product?._id}`}> <CardItem
                            translateZ={20}
                            as="button"
                            className="px-4 py-2 rounded-xl bg-white dark:bg-white dark:text-black text-black text-xs  md:text-[14px] font-bold"
                        >
                            View Details
                        </CardItem></Link>
                    </div>
                </CardBody>
            </CardContainer>
        </div>
    );
}
export default ThreeDCardDemo;