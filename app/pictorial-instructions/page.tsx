"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import ModalInteraction from "../../animations/pictorial-instructions/modal-interaction/modal-interaction";
import ModalInteractionBouncy from "../../animations/pictorial-instructions/modal-interaction/modal-interaction-bouncy";
import ModalInteractionAdjustable, {
    getThemedColor,
} from "../../animations/pictorial-instructions/modal-interaction/modal-interaction-adjustable";
import BouncinessSliderCard from "../../animations/pictorial-instructions/modal-interaction/BouncinessSliderCard";

export default function PictorialInstructionsPage() {
    const [animationKey, setAnimationKey] = useState(0);
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [playKey, setPlayKey] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [bounciness, setBounciness] = useState(50);

    // Detect system dark mode preference and set up theme
    useEffect(() => {
        // Check if user prefers dark mode
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        setIsDarkMode(prefersDark);

        // Apply dark mode class to body
        if (prefersDark) {
            document.body.classList.add("dark");
        }
    }, []);

    // Play animation once on mount
    useEffect(() => {
        setPlayKey((k) => k + 1);
    }, []);

    // Handle dark mode toggle
    const toggleDarkMode = () => {
        const newDarkMode = !isDarkMode;
        setIsDarkMode(newDarkMode);

        if (newDarkMode) {
            document.body.classList.add("dark");
        } else {
            document.body.classList.remove("dark");
        }
    };

    // Function to restart all animations
    const restartAllAnimations = () => {
        setAnimationKey((prev) => prev + 1);

        // Restart CSS animations
        const containers = document.querySelectorAll('[class*="pictorial-instructions_"]');

        containers.forEach((container) => {
            const animatedElements = container.querySelectorAll(
                '[class*="pictorial-instructions_"]'
            );

            animatedElements.forEach((element) => {
                const htmlElement = element as HTMLElement;
                const classList = Array.from(htmlElement.classList);

                const animationClasses = classList.filter(
                    (className) =>
                        className.includes("pictorial-instructions_") &&
                        className.includes("__") &&
                        !className.includes("svgContainer")
                );

                if (animationClasses.length > 0) {
                    animationClasses.forEach((className) => {
                        htmlElement.classList.remove(className);
                    });

                    htmlElement.offsetHeight;

                    setTimeout(() => {
                        animationClasses.forEach((className) => {
                            htmlElement.classList.add(className);
                        });
                    }, 50);
                }
            });
        });
    };

    const handlePlay = () => {
        if (!isPlaying) {
            setPlayKey((k) => k + 1);
        }
    };

    const handleAnimationEnd = () => {
        setIsPlaying(false);
    };

    const AnimationWrapper = ({
        children,
        label,
        description,
    }: {
        children: React.ReactNode;
        label: string;
        description?: string;
    }) => (
        <div
            className="animation-wrapper"
            style={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                flex: "0 0 auto",
                marginBottom: "40px",
            }}
        >
            {/* Label and description */}
            <div
                style={{
                    marginBottom: "16px",
                    textAlign: "center",
                    maxWidth: "300px",
                }}
            >
                <h3
                    style={{
                        fontSize: "16px",
                        fontWeight: "600",
                        color: "var(--color-text)",
                        margin: "0 0 8px 0",
                        fontFamily: "system-ui, -apple-system, sans-serif",
                    }}
                >
                    {label}
                </h3>
                {description && (
                    <p
                        style={{
                            fontSize: "14px",
                            color: "var(--color-text-subtle)",
                            margin: "0",
                            fontFamily: "system-ui, -apple-system, sans-serif",
                            lineHeight: "1.4",
                        }}
                    >
                        {description}
                    </p>
                )}
            </div>
            {/* Animation container */}
            <div style={{ position: "relative" }}>{children}</div>
        </div>
    );

    return (
        <>
            <style jsx global>{`
                * {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                }

                html,
                body {
                    margin: 0;
                    padding: 0;
                    background-color: #ffffff;
                }

                :root {
                    --color-background-neutral-subtle: #ffffff;
                    --color-background-input: #ffffff;
                    --color-text: #172b4d;
                    --color-text-subtle: #6b778c;
                    --color-border: #dfe1e6;
                    --color-link: #0052cc;
                    --color-text-inverse: #ffffff;
                    --color-background-neutral-subtle-hovered: #ebecf0;
                    --color-success: #36b37e;
                    --color-discovery-bold: #af59e1;
                    --color-brand-boldest: #0052cc;
                    --color-link-alpha: rgba(0, 82, 204, 0.15);
                    --color-background-disabled: #f4f5f7;
                    --color-text-disabled: #a5adba;
                }

                body.dark {
                    --color-background-neutral-subtle: #1d2125;
                    --color-background-input: #22272b;
                    --color-text: #e6fcff;
                    --color-text-subtle: #9fadbc;
                    --color-border: #3c4c5c;
                    --color-link: #4c9aff;
                    --color-text-inverse: #1d2125;
                    --color-background-neutral-subtle-hovered: #2c3e5d;
                    --color-success: #36b37e;
                    --color-discovery-bold: #9b8afb;
                    --color-brand-boldest: #4c9aff;
                    --color-link-alpha: rgba(76, 154, 255, 0.15);
                    --color-background-disabled: #313740;
                    --color-text-disabled: #738496;
                }
            `}</style>
            <main
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "flex-start",
                    padding: "20px",
                    minHeight: "100vh",
                    boxSizing: "border-box",
                    backgroundColor: "#ffffff",
                }}
            >
                {/* Card Container */}
                <div
                    style={{
                        backgroundColor: "var(--color-background-input)",
                        borderRadius: "16px",
                        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.1)",
                        padding: "32px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        maxWidth: "1200px",
                        width: "100%",
                        border: "1px solid var(--color-border)",
                        position: "relative",
                    }}
                >
                    {/* Dark Mode Toggle - Top Right */}
                    <div
                        style={{
                            position: "absolute",
                            top: "16px",
                            right: "16px",
                            display: "flex",
                            alignItems: "center",
                            gap: "8px",
                            zIndex: 10,
                        }}
                    >
                        <span
                            style={{
                                fontSize: "12px",
                                fontWeight: "500",
                                color: "var(--color-text-subtle)",
                                fontFamily: "system-ui, -apple-system, sans-serif",
                                textTransform: "uppercase",
                                letterSpacing: "0.5px",
                            }}
                        >
                            Theme
                        </span>

                        <button
                            onClick={toggleDarkMode}
                            style={{
                                position: "relative",
                                width: "56px",
                                height: "32px",
                                backgroundColor: isDarkMode
                                    ? "#22304a" // softer dark blue for dark mode
                                    : "#fff3b0", // warmer yellow for light mode
                                border: "1px solid var(--color-border)",
                                borderRadius: "16px",
                                cursor: "pointer",
                                transition: "all 0.2s ease",
                                display: "flex",
                                alignItems: "center",
                                padding: "4px",
                                boxShadow: "none",
                            }}
                        >
                            <div
                                style={{
                                    width: "24px",
                                    height: "24px",
                                    background: isDarkMode ? "transparent" : "#ffd600",
                                    borderRadius: "12px",
                                    transform: isDarkMode ? "translateX(23px)" : "translateX(0px)",
                                    transition: "transform 0.2s ease, background 0.2s ease",
                                    boxShadow: isDarkMode ? "none" : "0 1px 3px rgba(0,0,0,0.12)",
                                    border: "none",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                {isDarkMode ? (
                                    // Moon SVG
                                    <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <circle cx="12" cy="12" r="12" fill="#4c9aff" />
                                        <path
                                            d="M18.75 15.75C17.25 17.25 14.25 18 12 15C9.75 12 10.5 9 12 7.5C9 7.5 6 10.5 6 13.5C6 16.5 9 19.5 12 19.5C15 19.5 18 16.5 18.75 15.75Z"
                                            fill="#fff"
                                        />
                                    </svg>
                                ) : (
                                    // Sun SVG
                                    <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <circle cx="12" cy="12" r="12" fill="#ffd600" />
                                        <g stroke="#fff" strokeWidth="1.8">
                                            <line x1="12" y1="3" x2="12" y2="6.3" />
                                            <line x1="12" y1="17.7" x2="12" y2="21" />
                                            <line x1="3" y1="12" x2="6.3" y2="12" />
                                            <line x1="17.7" y1="12" x2="21" y2="12" />
                                            <line x1="6.3" y1="6.3" x2="8.4" y2="8.4" />
                                            <line x1="15.6" y1="15.6" x2="17.7" y2="17.7" />
                                            <line x1="6.3" y1="17.7" x2="8.4" y2="15.6" />
                                            <line x1="15.6" y1="8.4" x2="17.7" y2="6.3" />
                                        </g>
                                        <circle cx="12" cy="12" r="3.3" fill="#fff" />
                                    </svg>
                                )}
                            </div>
                        </button>
                    </div>

                    {/* Header */}
                    <div style={{ textAlign: "center", marginBottom: "40px" }}>
                        <h1
                            style={{
                                fontSize: "28px",
                                fontWeight: "700",
                                color: "var(--color-text)",
                                margin: "0 0 12px 0",
                                fontFamily: "system-ui, -apple-system, sans-serif",
                            }}
                        >
                            Animated Pictorials
                        </h1>

                        <p
                            style={{
                                fontSize: "16px",
                                color: "var(--color-text-subtle)",
                                margin: "0 0 24px 0",
                                fontFamily: "system-ui, -apple-system, sans-serif",
                                maxWidth: "600px",
                            }}
                        >
                            Fully coded animations with light/dark mode support ☀️🌙
                        </p>
                    </div>

                    {/* Animations Grid */}
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "60px",
                            width: "100%",
                            maxWidth: "1200px",
                        }}
                    >
                        {/* First Row - Original and Bouncy */}
                        <div
                            style={{
                                display: "grid",
                                gridTemplateColumns: "repeat(2, 1fr)",
                                gap: "20px",
                                width: "100%",
                            }}
                        >
                            {/* Modal Interaction Animation - Original */}
                            <AnimationWrapper
                                label="Modal Interaction (Original)"
                                description="Smooth animation with standard easings"
                            >
                                <div key={`modal-interaction-original-${animationKey}`}>
                                    <ModalInteraction isDarkMode={isDarkMode} />
                                </div>
                            </AnimationWrapper>

                            {/* Modal Interaction Animation - Bouncy */}
                            <AnimationWrapper
                                label="Modal Interaction (Bouncy)"
                                description="Playful animation with elastic easings"
                            >
                                <div key={`modal-interaction-bouncy-${animationKey}`}>
                                    <ModalInteractionBouncy isDarkMode={isDarkMode} />
                                </div>
                            </AnimationWrapper>
                        </div>

                        {/* Second Row - Adjustable */}
                        <div style={{ width: "100%" }}>
                            <AnimationWrapper
                                label="Modal Interaction (Adjustable)"
                                description="Interactive version with bounciness slider"
                            >
                                <div key={`modal-interaction-adjustable-${animationKey}`}>
                                    <ModalInteractionAdjustable
                                        isDarkMode={isDarkMode}
                                        bounciness={bounciness}
                                        setBounciness={setBounciness}
                                        playKey={playKey}
                                        setIsPlaying={setIsPlaying}
                                        onAnimationEnd={handleAnimationEnd}
                                    />
                                </div>
                            </AnimationWrapper>
                            {/* Bounciness slider card is now rendered below the animation */}
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    width: "100%",
                                    marginTop: "16px",
                                }}
                            >
                                <BouncinessSliderCard
                                    bounciness={bounciness}
                                    setBounciness={setBounciness}
                                    isPlaying={isPlaying}
                                    onPlay={handlePlay}
                                    themeMode={isDarkMode ? "dark" : "light"}
                                    getThemedColor={getThemedColor}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
