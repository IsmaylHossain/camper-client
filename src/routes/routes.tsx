import MainLayout from "../mainLayout/MainLayout";
import { createBrowserRouter } from "react-router-dom";
import Home from "@/components/pages/Home/Home";
import ProductManagement from "@/components/pages/ProductManagement/ProductMangement";
import CreateProduct from "@/components/pages/ProductManagement/CreateProducts";
import UpdateProduct from "@/components/pages/ProductManagement/UpdateProduct";
import AboutUs from "@/components/pages/AboutUs/AboutUs";
import NotFound from "@/components/NotFound/NotFound";
import ProductDetails from "@/components/ProductDetails/ProductsDetails";
import ProductsPage from "@/components/pages/Products/ProductsPage";
import CartPage from "@/components/cartPage/CartPage";
import Checkout from "../components/Checkout/Checkout";
import OrderSuccess from "@/components/Checkout/OrderSuccess";
import { EvervaultCardDemo } from "@/components/Demo";
const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        errorElement: <NotFound />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/product-management',
                element: <ProductManagement />
            },
            {
                path: '/create-product',
                element: <CreateProduct />
            },
            {
                path: '/update-product/:id',
                element: <UpdateProduct />
            },
            {
                path: '/about-us',
                element: <AboutUs />
            },
            {
                path: '/products-details/:id',
                element: <ProductDetails />
            },
            {
                path: '/products',
                element: <ProductsPage />
            },
            {
                path: '/cart',
                element: <CartPage />
            },
            {
                path: '/checkout',
                element: <Checkout />
            },
            {
                path: '/order-success',
                element: <OrderSuccess />
            },
            {
                path: '/demo',
                element: <EvervaultCardDemo />
            },
        ]
    }
])
export default router;
