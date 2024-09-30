import { Link } from "react-router-dom";

const OrderSuccess = () => {
    return (
        <section className="max-w-screen-xl bg-black mx-auto min-h-[calc(100vh-100px)] flex items-center justify-center">
            <Link to="/">
                <div className="h-[400px] md:w-[600px] w-[300px] p-5  md:h-[100px] rounded-xl bg-[#a50c0c] text-center space-y-2">
                    <h1 className="text-3xl font-bold text-white">Your Order Success</h1>
                    <p className="text-gray-200">Thank you for your order</p>
                    <div className="pt-2">

                    </div>
                </div>
            </Link>
        </section>
    );
};

export default OrderSuccess;
