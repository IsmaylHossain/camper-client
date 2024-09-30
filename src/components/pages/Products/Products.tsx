import { useGetProductsQuery } from "@/redux/api/baseApi";
import ProductCart, { TProduct } from "./ProductCart";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Label } from "@/components/ui/label";
import Loader from "@/components/Loading/Loader";
type TFormData = {
    search: string;
};
const Products = () => {
    const [searchValue, setSearchValue] = useState("");
    const [sortValue, setSortValue] = useState("");
    const [category, setCategory] = useState("");
    const [minPrice, setMinPrice] = useState("");
    const [maxPrice, setMaxPrice] = useState("");

    const { register, handleSubmit } = useForm<TFormData>();

    const onSubmit: SubmitHandler<TFormData> = (data) => {
        setSearchValue(data.search);
    };

    const handleReset = () => {
        setSearchValue("");
        setSortValue("");
        setCategory("");
        setMinPrice("");
        setMaxPrice("");
    };

    console.log(sortValue);

    const { data, isLoading, } = useGetProductsQuery({
        search: searchValue,
        sort: sortValue,
        category,
        minPrice,
        maxPrice,
    });

    let loading;

    if (isLoading) {
        return (loading = <Loader />);
    }
    return (
        <div>
            <div className="mb-4">
                <div className="max-w-screen-xl mx-auto py-4 flex flex-col md:flex-row gap-4 justify-between items-center  ">
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="flex w-full  lg:w-[500px] items-center"
                    >
                        <Input
                            className="focus-visible:ring-offset-0   text-white  border-gray-300    lg:py-7 lg:px-4 lg:rounded-l-[10px]  bg-black"
                            type="text"
                            placeholder="Search here..."
                            {...register("search")}
                        />
                        <Button
                            className="bg-black lg:py-7  lg:px-4 lg:rounded-r-[10px] border-t border-r border-b  border-gray-300"
                            type="submit"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="size-6 text-white"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                                />
                            </svg>
                        </Button>
                    </form>
                    <div className="flex items-center  justify-between gap-1 md:gap-2 lg:gap-4">
                        {/* first */}
                        <div className="flex flex-row md:flex-row justify-between items-center">
                            <div className="text-white">
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button className="text-white text-[9px] md:text-[14px]" variant="outline">Price Range</Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent className=" w-24 md:w-40 px-1 md:px-3 py-2 text-[9px] md:text-[14px] lg:text-[15px] text-white bg-black space-y-3">
                                        <div className="flex items-center gap-1 md:gap-2">
                                            <Label htmlFor="min" className="text-white text-[9px] md:text-[14px] lg:text-[15px]">
                                                Min:
                                            </Label>
                                            <Input
                                                id="min"
                                                onChange={(e) => setMinPrice(e.target.value)}
                                                className=""
                                            />
                                        </div>
                                        <div className="flex items-center gap-1 md:gap-2">
                                            <Label htmlFor="max" className="text-[10px] md:text-[14px] lg:text-[14px] text-white">
                                                Max:
                                            </Label>
                                            <Input
                                                id="max"
                                                onChange={(e) => setMaxPrice(e.target.value)}
                                                className=""
                                            />
                                        </div>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </div>
                            <div className="text-white">
                                <Select onValueChange={(value: string) => setCategory(value)}>
                                    <SelectTrigger className="text-white">
                                        <SelectValue placeholder="Category" />
                                    </SelectTrigger>
                                    <SelectContent className='text-white bg-black'>
                                        <SelectGroup>
                                            <SelectItem className="text-white text-[11px] md:text-[14px] lg:text-[15px]" value="Sleeping Gear">Sleeping Gear
                                            </SelectItem>
                                            <SelectItem className="text-white text-[11px] md:text-[14px] lg:text-[15px]" value="Climbing Gear">
                                                Climbing Gear

                                            </SelectItem>
                                            <SelectItem className="text-[11px] md:text-[14px] lg:text-[15px] text-white" value="Fishing Gear">
                                                Fishing Gear

                                            </SelectItem>
                                            <SelectItem value="Accessories">Accessories</SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                        {/* second */}
                        <div className="flex justify-center flex-row md:flex-row items-center">
                            <div>
                                <Select onValueChange={(value: string) => setSortValue(value)}>
                                    <SelectTrigger className="text-white text-[9px] md:text-[14px] lg:text-[15px] ">
                                        <SelectValue className="text-white text-[9px] md:text-[14px] lg:text-[15px]" placeholder="Sort By" />
                                    </SelectTrigger>
                                    <SelectContent className='text-white text-[9px] md:text-[14px] lg:text-[15px] bg-black '>
                                        <SelectGroup className="text-white text-[9px] md:text-[14px] lg:text-[15px] ">
                                            <SelectItem className="text-white text-[10px]  md:text-[14px] lg:text-[15px]" value="asc">Low To High</SelectItem>
                                            <SelectItem className="text-white text-[9px] md:text-[14px] lg:text-[15px]" value="desc">High To Low</SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div>
                                <Button
                                    onClick={handleReset}
                                    variant={"outline"}
                                    className="bg-black hover:text-white text-[9px] md:text-[14px] lg:text-[15px] text-white"
                                >
                                    Reset All
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-3 mx-auto w-[98%] min-h-80 ">
                {isLoading
                    ? loading
                    : data?.data?.map((product: TProduct) => (
                        <ProductCart key={product._id} product={product} />
                    ))}
            </div>
        </div>
    );
};

export default Products;
