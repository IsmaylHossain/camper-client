import Navbar from '@/components/Header/Navbar';
import Footer from '@/components/pages/Footer/Footer';
import { useAppSelector } from '@/redux/hooks';
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import '@smastrom/react-rating/style.css'; // Import the default styles
const MainLayout = () => {

    const cart = useAppSelector((state) => state.cart);

    console.log(cart);

    useEffect(() => {
        function handleOnBeforeUnload(event: BeforeUnloadEvent) {
            if (cart.length === 0) {
                return;
            }

            event.preventDefault();

            return (event.returnValue = "");
        }

        window.addEventListener("beforeunload", handleOnBeforeUnload, {
            capture: true,
        });

        return () => {
            window.removeEventListener("beforeunload", handleOnBeforeUnload, {
                capture: true,
            });
        };
    }, [cart]);
    return (
        <div className="  bg-[#0E0E0E] max-w-screen-2xl mx-auto">
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default MainLayout;