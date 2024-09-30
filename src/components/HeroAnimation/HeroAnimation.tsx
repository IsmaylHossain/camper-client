import { HeroParallax } from "../ui/hero-parallax";


export const products = [
    {
        title: "Moonbeam",
        link: "/products",
        thumbnail:
            "https://i.ibb.co/0jjY7Tn/6107.jpg",
    },
    {
        title: "Cursor",
        link: "/products",
        thumbnail:
            "https://i.ibb.co/GJBRXTZ/18467.jpg",
    },
    {
        title: "Rogue",
        link: "/products",
        thumbnail:
            "https://i.ibb.co/xD0W8F3/2149517910.jpg",
    },

    {
        title: "Editorially",
        link: "/products",
        thumbnail:
            "https://i.ibb.co/BTGG0vH/24770.jpg",
    },
    {
        title: "Editrix AI",
        link: "/products",
        thumbnail:
            "https://i.ibb.co/GVrq7QV/2147617494.jpg",
    },
    {
        title: "Pixel Perfect",
        link: "/products.quest",
        thumbnail:
            "https://i.ibb.co/HpqqQN5/61653.jpg",
    },

    {
        title: "Algochurn",
        link: "/products",
        thumbnail:
            "https://i.ibb.co/g6ZvjDV/9158.jpg",
    },
    {
        title: "Aceternity UI",
        link: "/products.com",
        thumbnail:
            "https://i.ibb.co/fYkxtHY/9146.jpg",
    },
    {
        title: "Tailwind Master Kit",
        link: "/products",
        thumbnail:
            "https://i.ibb.co/BwFBf0B/2148456465.jpg",
    },
    {
        title: "SmartBridge",
        link: "/products",
        thumbnail:
            "https://i.ibb.co/JdwZsLX/2151049529.jpg",
    },
    {
        title: "Renderwork Studio",
        link: "/products",
        thumbnail:
            "https://i.ibb.co/xD0W8F3/2149517910.jpg",
    },

    {
        title: "Creme Digital",
        link: "/products",
        thumbnail:
            "https://i.ibb.co/BTGG0vH/24770.jpg",
    },
    {
        title: "Golden Bells Academy",
        link: "/products",
        thumbnail:
            "https://i.ibb.co/GVrq7QV/2147617494.jpg",
    },
    {
        title: "Invoker Labs",
        link: "/products",
        thumbnail:
            "https://i.ibb.co/fYkxtHY/9146.jpg",
    },
    {
        title: "E Free Invoice",
        link: "/products",
        thumbnail:
            "https://i.ibb.co/0jjY7Tn/6107.jpg",
    },
];


const HeroParallaxDemo = () => {

    return (

        <div className="bg-black">
            <HeroParallax products={products} />
        </div>

    )
}
export default HeroParallaxDemo