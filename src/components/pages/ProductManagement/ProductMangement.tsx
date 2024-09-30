import { Button } from "@/components/ui/button";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import {
    useDeleteProductMutation,
    useGetProductsQuery,
} from "@/redux/api/baseApi";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import Swal from "sweetalert2";
import { TProduct } from "../Products/ProductCart";

const ProductManagement = () => {
    const { data, isLoading } = useGetProductsQuery(undefined);

    const [deleteProduct] = useDeleteProductMutation();

    if (isLoading) {
        return <div className="text-white bg-black text-center">Loading...</div>;
    }

    const handleDelete = (id: string) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then(async (result: any) => {
            if (result.isConfirmed) {
                try {
                    const res = await deleteProduct(id).unwrap();
                    if (res?.success) {
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your product has been deleted.",
                            icon: "success",
                        });
                    }
                } catch (err) {
                    toast.error("Failed to delete product");
                }
            }
        });
    };

    return (

        <div className='bg-[#000000] border-2 pb-6 lg:pb-20 md:pb-10 bg-gradient-to-br lg:pt-5 from-[#310202] via-[#000] to-[#000000] h-full lg:min-h-screen'>
            <div className="max-w-screen-xl   mx-auto lg:py-8 px-3  ">
                <div className="border border-white z-20 bg-transparent backdrop-blur-md rounded-3xl p-8">
                    <div className="pb-6 flex items-center justify-between border-b border-gray-300">
                        <Link to="/create-product">
                            <Button className="bg-[#ff0000] rounded-[5px] hover:bg-[#c50202]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-file-plus-2"><path d="M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4" /><path d="M14 2v4a2 2 0 0 0 2 2h4" /><path d="M3 15h6" /><path d="M6 12v6" /></svg>
                                Create A New Product
                            </Button>
                        </Link>
                        <h2 className="text-xl text-white font-bold">
                            Total Product: {data?.data?.length}
                        </h2>
                    </div>
                    <Table className="p-12">
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[100px] text-white">Image</TableHead>
                                <TableHead className='text-white'>Name</TableHead>
                                <TableHead className='text-white'>Price</TableHead>
                                <TableHead className='text-white'>Category</TableHead>
                                <TableHead className="text-right text-white">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {data?.data?.map((item: TProduct) => (
                                <TableRow key={item._id}>
                                    <TableCell>
                                        <img
                                            className="object-cover rounded-lg  size-10"
                                            src={item.image}
                                            alt={item.name}
                                        />
                                    </TableCell>
                                    <TableCell className="text-sm text-white">{item.name}</TableCell>
                                    <TableCell className='text-white'>{item.price}</TableCell>
                                    <TableCell className='text-white'>{item.category}</TableCell>
                                    <TableCell className="text-right text-white space-x-2">
                                        <Link to={`/update-product/${item._id}`}>
                                            <Button className="">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-pencil"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" /><path d="m15 5 4 4" /></svg>
                                            </Button>
                                        </Link>

                                        <Button
                                            onClick={() => handleDelete(item._id)}
                                            variant={"destructive"}
                                        >
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
                                                    d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                                                />
                                            </svg>
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </div>
        </div>

    );
};

export default ProductManagement;
