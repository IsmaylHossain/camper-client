
import Discover from "@/components/Discover/Discover";
import Testimonials from "@/components/Testimonials/Testimonials";
import FaqSection from "@/components/FAQ/FAQSection";
import BestSellingProducts from "@/components/BestSellingProducts/BestSellingProducts";
import BannerSection from "@/components/Header/BannerSection/BannerSection";
import FeaturesSection from "@/components/Features/FeaturesSection";
import HeroParallaxDemo from "@/components/HeroAnimation/HeroAnimation";
import { Category } from "@/components/Category/Category";

const Home = () => {

    return (

        <div className="bg-black">
            <BannerSection />
            <div className="hidden lg:block">
                <HeroParallaxDemo />
            </div>
            <BestSellingProducts />
            <Discover />
            <Testimonials />
            <Category />
            <FeaturesSection />

            <FaqSection />
        </div>


    );
};

export default Home;