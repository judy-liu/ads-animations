import React from "react";
import { motion } from "motion/react";

export default function IconsMotion() {
    return (
        <section className="w-full min-h-screen bg-white flex items-center justify-center p-8">
            <div className="flex items-center gap-2">
                {/* SVG Illustration */}
                <div className="flex-shrink-0 cursor-default">
                    <svg
                        width="140"
                        height="140"
                        viewBox="0 0 140 140"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <defs>
                            <filter id="roughPaper" x="0%" y="0%" width="100%" height="100%">
                                <feTurbulence
                                    baseFrequency="0.04"
                                    numOctaves="5"
                                    result="noise"
                                    seed="1"
                                />
                                <feDisplacementMap in="SourceGraphic" in2="noise" scale="0.8" />
                            </filter>
                            <filter id="roughPaper2" x="0%" y="0%" width="100%" height="100%">
                                <feTurbulence
                                    baseFrequency="0.08"
                                    numOctaves="3"
                                    result="noise"
                                    seed="5"
                                />
                                <feDisplacementMap in="SourceGraphic" in2="noise" scale="1.2" />
                            </filter>
                            <clipPath id="clip0_1878_34641">
                                <rect width="140" height="140" fill="white" />
                            </clipPath>
                        </defs>
                        <g clipPath="url(#clip0_1878_34641)">
                            {/* Purple gear icon - complete gear shape */}
                            <motion.g
                                initial={{ opacity: 0, rotate: -180 }}
                                animate={{ opacity: 1, rotate: 0 }}
                                transition={{
                                    duration: 1,
                                    ease: "easeOut",
                                    delay: 0,
                                }}
                                style={{ transformOrigin: "50% 50%" }}
                            >
                                <path
                                    d="M62.5202 76.1647C61.3679 71.7345 61.481 67.0701 62.8467 62.701C64.2124 58.3319 66.7759 54.4334 70.2461 51.4482L68.5257 49.7277L62.8621 52.5114C62.4828 52.3244 62.0927 52.1534 61.6973 51.9771C61.302 51.8008 60.8211 51.6405 60.3776 51.4909L58.3313 45.4961H49.9589L47.9125 51.4909C47.0629 51.772 46.2328 52.1093 45.428 52.5007L39.7698 49.717L33.8605 55.6263L36.532 61.0815C36.3878 61.354 36.2542 61.6158 36.1259 61.9043C35.8218 62.5466 35.5525 63.2047 35.3192 63.8759L29.6289 65.8154V74.1718L35.02 76.0097C35.3525 77.1522 35.7907 78.2612 36.329 79.3224L33.8498 84.3608L39.7698 90.3022L44.6106 87.9245C45.7645 88.5539 46.978 89.0675 48.2331 89.458L49.9589 94.5231H58.3153L60.041 89.458C60.2013 89.4099 60.3509 89.3511 60.5059 89.2977C61.1096 89.0946 61.6974 88.8596 62.2691 88.6031C62.7446 88.3947 63.2148 88.1703 63.6636 87.9245L68.5096 90.3022L70.2301 88.5817C66.4575 85.3228 63.768 80.9912 62.5202 76.1647ZM58.5664 76.1647C57.5943 76.8583 56.4721 77.3123 55.2911 77.4897C54.9166 77.5498 54.5378 77.5802 54.1584 77.5806C52.1462 77.5806 50.2165 76.7812 48.7936 75.3584C47.3708 73.9355 46.5714 72.0058 46.5714 69.9936C46.5714 67.9814 47.3708 66.0516 48.7936 64.6287C50.2165 63.2059 52.1462 62.4066 54.1584 62.4066C54.5362 62.4087 54.9132 62.4409 55.2858 62.5027C56.7783 62.7258 58.1701 63.3895 59.283 64.4087C60.3958 65.4279 61.1789 66.7563 61.532 68.2235C61.885 69.6906 61.7918 71.2298 61.2644 72.6437C60.737 74.0576 59.7994 75.2818 58.5717 76.1593L58.5664 76.1647Z"
                                    fill="#BF63F3"
                                />
                                {/* Complete the right side of gear using black overlay shape */}
                                <path
                                    d="M71.9382 79.3278C72.4725 78.2655 72.9089 77.1567 73.2419 76.0152L78.633 74.1772V65.8208L72.9427 63.8813C72.6134 62.9208 72.2078 61.9881 71.7299 61.0923L74.4013 55.6318L70.2178 51.4482C67.5467 53.745 65.403 56.5916 63.9335 59.7932C62.4639 62.9949 61.7031 66.4762 61.7031 69.999C61.7031 73.5218 62.4639 77.0031 63.9335 80.2048C65.403 83.4064 67.5467 86.253 70.2178 88.5498L74.4013 84.3662L71.9382 79.3278Z"
                                    fill="#BF63F3"
                                />
                            </motion.g>

                            {/* Green play button - complete circle shape with white arrow */}
                            <motion.g
                                initial={{ opacity: 0, rotate: 180 }}
                                animate={{ opacity: 1, rotate: 0 }}
                                transition={{
                                    duration: 1,
                                    ease: "easeOut",
                                    delay: 0.3,
                                }}
                                style={{ transformOrigin: "50% 50%" }}
                            >
                                {/* Complete green circle background */}
                                <circle cx="86" cy="70" r="24" fill="#82B536" />
                                {/* White play arrow triangle pointing right */}
                                <path
                                    d="M82.9661 84.9597L77.9812 79.9694L87.9511 69.9995L77.9812 60.0295L82.9661 55.0392L97.9264 69.9995L82.9661 84.9597Z"
                                    fill="white"
                                />
                            </motion.g>

                            {/* Black overlay/shadow - fades in with green button */}
                            <motion.path
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{
                                    duration: 0.6,
                                    ease: "easeOut",
                                    delay: 0.3,
                                }}
                                d="M71.9382 79.3278C72.4725 78.2655 72.9089 77.1567 73.2419 76.0152L78.633 74.1772V65.8208L72.9427 63.8813C72.6134 62.9208 72.2078 61.9881 71.7299 61.0923L74.4013 55.6318L70.2178 51.4482C67.5467 53.745 65.403 56.5916 63.9335 59.7932C62.4639 62.9949 61.7031 66.4762 61.7031 69.999C61.7031 73.5218 62.4639 77.0031 63.9335 80.2048C65.403 83.4064 67.5467 86.253 70.2178 88.5498L74.4013 84.3662L71.9382 79.3278Z"
                                fill="#1F1F21"
                            />

                            {/* Top horizontal bar - main structure (outer strokes) */}
                            <motion.path
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 1 }}
                                transition={{
                                    duration: 2,
                                    ease: "easeOut",
                                    delay: 1.2,
                                }}
                                d="M35 115 L35 95 M35 115 L105 115 L105 95"
                                fill="none"
                                stroke="#101214"
                                strokeWidth="4.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                filter="url(#roughPaper)"
                            />

                            {/* Top horizontal bar - middle stroke (thinner) */}
                            <motion.path
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 1 }}
                                transition={{
                                    duration: 0.4,
                                    ease: "easeOut",
                                    delay: 1.2,
                                }}
                                d="M70 113 L70 107"
                                fill="none"
                                stroke="#101214"
                                strokeWidth="3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />

                            {/* Bottom horizontal bar - main structure (outer strokes) */}
                            <motion.path
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 1 }}
                                transition={{
                                    duration: 2,
                                    ease: "easeOut",
                                    delay: 1.6,
                                }}
                                d="M35 25 L35 45 M35 25 L105 25 L105 45"
                                fill="none"
                                stroke="#101214"
                                strokeWidth="4.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                filter="url(#roughPaper2)"
                            />

                            {/* Bottom horizontal bar - middle stroke (thinner) */}
                            <motion.path
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 1 }}
                                transition={{
                                    duration: 0.4,
                                    ease: "easeOut",
                                    delay: 1.6,
                                }}
                                d="M70 27 L70 33"
                                fill="none"
                                stroke="#101214"
                                strokeWidth="3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </g>
                    </svg>
                </div>
            </div>
        </section>
    );
}
