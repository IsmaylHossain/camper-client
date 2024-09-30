// import { useState, useEffect, useRef } from "react";
// import { motion } from "framer-motion";
// import { cn } from "@/lib/utils";

// export const MaskContainer = ({
//     children,
//     revealText,
//     size = 10,
//     revealSize = 300,
//     className,
// }: {
//     children?: string | React.ReactNode;
//     revealText?: string | React.ReactNode;
//     size?: number;
//     revealSize?: number;
//     className?: string;
// }) => {
//     const [isHovered, setIsHovered] = useState(false);
//     const [mousePosition, setMousePosition] = useState<any>({ x: null, y: null });
//     const containerRef = useRef<any>(null);
//     const updateMousePosition = (e: any) => {
//         const rect = containerRef.current.getBoundingClientRect();
//         setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
//     };

//     useEffect(() => {
//         containerRef.current.addEventListener("mousemove", updateMousePosition);
//         return () => {
//             if (containerRef.current) {
//                 containerRef.current.removeEventListener(
//                     "mousemove",
//                     updateMousePosition
//                 );
//             }
//         };
//     }, []);
//     let maskSize = isHovered ? revealSize : size;

//     return (
//         <motion.div
//             ref={containerRef}
//             className={cn("h-screen relative", className)}
//             animate={{
//                 backgroundColor: isHovered ? "var(--black)" : "var(--white)",
//             }}
//         >
//             <motion.div
//                 className="  absolute bg-white  [mask-image:url(/mask.svg)] [mask-size:40px] [mask-repeat:no-repeat]"
//                 animate={{
//                     WebkitMaskPosition: `${mousePosition.x - maskSize / 2}px ${mousePosition.y - maskSize / 2
//                         }px`,
//                     WebkitMaskSize: `${maskSize}px`,
//                 }}
//                 transition={{ type: "tween", ease: "backOut", duration: 0.1 }}
//             >
//                 <div className="absolute  z-0 opacity-50" />
//                 <div
//                     onMouseEnter={() => {
//                         setIsHovered(true);
//                     }}
//                     onMouseLeave={() => {
//                         setIsHovered(false);
//                     }}
//                     className=" mx-auto bg-transparent   font-bold relative z-20"
//                 >
//                     {children}
//                 </div>
//             </motion.div>

//             <div className="w-full h-full text-white bg-transparent flex items-center justify-center   ">
//                 {revealText}
//             </div>
//         </motion.div>
//     );
// };
