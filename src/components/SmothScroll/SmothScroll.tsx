import React, { useEffect, useRef } from "react";
import "./SmothScroll.css";
import useWindowSize from "@/lib/Hooks/UseWindowsSize";

interface SmoothScrollProps {
    children: React.ReactNode;
}

interface Data {
    ease: number;
    current: number;
    previous: number;
    rounded: number;
}

const SmoothScroll: React.FC<SmoothScrollProps> = ({ children }) => {
    // 1.
    const windowSize = useWindowSize();

    // 2.
    const scrollingContainerRef = useRef<HTMLDivElement | null>(null);

    // 3.
    const data: Data = {
        ease: 0.1,
        current: 0,
        previous: 0,
        rounded: 0
    };

    // 4.
    useEffect(() => {
        setBodyHeight();
    }, [windowSize.height]);

    const setBodyHeight = () => {
        if (scrollingContainerRef.current) {
            document.body.style.height = `${scrollingContainerRef.current.getBoundingClientRect().height
                }px`;
        }
    };

    // 5.
    useEffect(() => {
        requestAnimationFrame(() => smoothScrollingHandler());
    }, []);

    const smoothScrollingHandler = () => {
        data.current = window.scrollY;
        data.previous += (data.current - data.previous) * data.ease;
        data.rounded = Math.round(data.previous * 100) / 100;

        if (scrollingContainerRef.current) {
            scrollingContainerRef.current.style.transform = `translateY(-${data.previous}px)`;
        }

        // Recursive call
        requestAnimationFrame(() => smoothScrollingHandler());
    };

    return (
        <div className="h-[110vh] parent bg-black" >
            <div ref={scrollingContainerRef}> {children} </div>
        </div>
    );
};

export default SmoothScroll;
