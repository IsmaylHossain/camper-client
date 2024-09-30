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
import {
    useAddOrderMutation,
    useUpdateCartInfoMutation,
} from "@/redux/api/baseApi";
import { useAppSelector } from "@/redux/hooks";
import { Label } from "@radix-ui/react-label";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
type FormData = {
    name: string;
    email: string;
    phone: string;
    address: string;
};

const Checkout = () => {
    const [onCash, setIsOnCash] = useState("");
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>();

    const [addPayment] = useAddOrderMutation();
    const [updateCartInfo] = useUpdateCartInfoMutation();

    const cart = useAppSelector((state) => state.cart);
    const updatedProductData = cart.map((item) => {
        return {
            _id: item._id,
            quantity: item.quantity,
        };
    });

    const onSubmit: SubmitHandler<FormData> = async (data) => {
        const orderData = {
            name: data.name,
            email: data.email,
            phone: data.phone,
            address: data.address,
            paymentMethod: onCash,
        };

        try {
            const res = await addPayment(orderData).unwrap();
            console.log(res);
            const result = await updateCartInfo(updatedProductData).unwrap();
            console.log(result);
            if (res?.success && result?.success) {
                toast.success(res?.message);
                navigate("/order-success");
            }
        } catch (err) {
            toast.error("Order failed");
        }
    };

    return (
        <div className="bg-black bg-gradient-to-br from-[#000] to-[#2b0202] via-[#000] lg:pb-20">
            <div className="w-full mx-auto py-6  ">
                <div>
                    <h1 className=" text-2xl lg:text-3xl font-bold mb-5 text-center text-white lg:mb-8">
                        Checkout Form
                    </h1>
                </div>

                <div className="flex flex-col lg:gap-0 md:gap-10 gap-8 lg:flex-row justify-around items-center">
                    <div className="text-white">
                        <img className=" px-2 w-[70%]  mx-auto lg:my-20 rounded-[20px] lg:h-[450px] lg:w-[100%]" src="https://i.ibb.co/kcyjCpH/2846458-422859-PDRO5-O-153.jpg" alt="" />
                    </div>
                    <form
                        className="p-5 border lg:min-h-[650px] md:pt-16 lg:pt-16 md:h-[650px] w-[320px] md:w-[550px] rounded-[15px] lg:w-[550px] border-gray-300 "
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <div className="  flex flex-col  gap-6 py-4">
                            <div className="flex flex-col gap-2">
                                <Label htmlFor="name" className="text-white">
                                    Name
                                </Label>
                                <Input
                                    id="name"
                                    className="text-white rounded-[5px]"
                                    {...register("name", { required: true })}
                                />
                                {errors.name && (
                                    <p className="text-red-500 text-sm ">Name is required</p>
                                )}
                            </div>
                            <div className="flex flex-col gap-2">
                                <Label htmlFor="email" className="text-white">
                                    Email
                                </Label>
                                <Input
                                    type="email"
                                    id="email"
                                    className="text-white rounded-[5px]"
                                    {...register("email", { required: true })}
                                />
                                {errors.email && (
                                    <p className="text-red-500 text-sm">Email is required</p>
                                )}
                            </div>

                            <div className="flex flex-col gap-2">
                                <Label className="text-white" htmlFor="phone">
                                    Phone
                                </Label>
                                <Input className="text-white rounded-[5px]" id="phone" {...register("phone", { required: true })} />
                                {errors.phone && (
                                    <p className="text-red-500 text-sm">Phone is required</p>
                                )}
                            </div>

                            <div className="flex flex-col gap-2">
                                <Label htmlFor="address" className="text-white">
                                    Address
                                </Label>
                                <Input
                                    id="address"
                                    className="text-white  rounded-[5px]"
                                    {...register("address", { required: true })}
                                />
                                {errors.address && (
                                    <p className="text-red-500 text-sm">Address is required</p>
                                )}
                            </div>

                            <div className="flex flex-col gap-2">
                                <Select required onValueChange={(value) => setIsOnCash(value)}>
                                    <SelectTrigger className="text-white  rounded-[5px]">
                                        <SelectValue className="text-white " placeholder="Select Payment Method" />
                                    </SelectTrigger>
                                    <SelectContent className="text-white bg-black rounded-[5px]">
                                        <SelectGroup className="text-white ">
                                            <SelectItem className="text-white " value="cash">Cash on Delivery</SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            </div>

                            <Button
                                className="w-full text-white rounded-[10px] bg-[#980a0a] hover:bg-[#6b0505]"
                                type="submit"
                            >
                                Place Order
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
