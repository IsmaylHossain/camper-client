import { Card, CardContent } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
// import sliderImage2 from "../../assets/Image/bn4.jpg";
// import sliderImage1 from "../../assets/Image/bn3.jpg";
// import sliderImage3 from "../../assets/Image/banner3.webp";
// import sliderImage4 from "../../assets/Image/banner1.png";
// import sliderImage5 from "../../assets/Image/banner5.jpg";

export function HeroSection() {
    const sliderData = [
        {
            id: 1,
            image: 'https://thegadgetflow.com/wp-content/uploads/2024/06/Aqara-Smart-Lock-U100-Slider.jpg',
        },
        {
            id: 2,
            image: 'https://thegadgetflow.com/wp-content/uploads/2024/07/Square-One-Mini-Keg-01-1024x576.jpeg',
        },
        {
            id: 3,
            image: 'https://thegadgetflow.com/wp-content/uploads/2024/06/Deertv-Slider-Mobile.jpg',
        },
        // {
        //     id: 4,
        //     image: sliderImage4,
        // },
        // {
        //     id: 5,
        //     image: sliderImage5,
        // },
    ];

    return (
        <div className="relative w-full h-[400px] md:h-[500px]  ">
            <Carousel
                className=" overflow-hidden rounded-lg shadow-lg"
                plugins={[
                    Autoplay({
                        delay: 6000,
                    }),
                ]}
            >
                <CarouselContent className="flex">
                    {sliderData.map((slider) => (
                        <CarouselItem key={slider.id} className="min-w-full rounded-[15px] hover:rounded-[15px]">
                            <Card className="bg-transparent rounded-[15px] hover:rounded-[15px]">
                                <CardContent className="flex rounded-[15px] hover:rounded-[15px] items-center justify-center h-[499px]  p-0">
                                    <img
                                        src={slider?.image}
                                        className="h-full rounded-[15px] hover:rounded-[15px] w-full object-cover "
                                        alt=""
                                    />
                                </CardContent>
                            </Card>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded-full cursor-pointer hover:bg-opacity-75 transition-opacity duration-300">
                    &#9664;
                </CarouselPrevious>
                <CarouselNext className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded-full cursor-pointer hover:bg-opacity-75 transition-opacity duration-300">
                    &#9654;
                </CarouselNext>
            </Carousel>
        </div>
    );
}