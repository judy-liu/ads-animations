"use client";

import SpacingFoundation from "../animations/spacing/spacing-foundation";
import TypographyFoundation from "../animations/typography/typography-foundation";
import IconsFoundation from "../animations/icons/icons-foundation";
import ColourFoundation from "../animations/colour/colour-foundation";

export default function Home() {
    // Manual function to restart animations (only called by button)
    const restartAnimations = () => {
        // Target specific animation containers only
        const containers = [
            ".colour-foundation_svgContainer__QEuTu",
            ".icons-foundation_svgContainer__w38RQ",
            ".spacing-foundation_svgContainer__a38xW",
            ".typography-foundation_svgContainer__AD9Tt",
        ];

        containers.forEach((containerSelector) => {
            const container = document.querySelector(containerSelector);
            if (container) {
                const animatedElements = container.querySelectorAll('[class*="foundation_"]');

                animatedElements.forEach((element) => {
                    const htmlElement = element as HTMLElement;
                    const classList = Array.from(htmlElement.classList);

                    // Only target classes that are actual animation classes
                    const animationClasses = classList.filter(
                        (className) =>
                            className.includes("foundation_") &&
                            className.includes("__") &&
                            !className.includes("svgContainer")
                    );

                    if (animationClasses.length > 0) {
                        // Remove animation classes
                        animationClasses.forEach((className) => {
                            htmlElement.classList.remove(className);
                        });

                        // Force reflow
                        htmlElement.offsetHeight;

                        // Add classes back after a short delay
                        setTimeout(() => {
                            animationClasses.forEach((className) => {
                                htmlElement.classList.add(className);
                            });
                        }, 50);
                    }
                });
            }
        });
    };

    const AnimationWrapper = ({
        children,
        label,
    }: {
        children: React.ReactNode;
        label: string;
    }) => (
        <div
            className="animation-wrapper"
            style={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                flex: "0 0 auto",
            }}
        >
            {/* Animation container - completely isolated */}
            <div style={{ position: "relative" }}>{children}</div>

            {/* Label that appears on hover - pure CSS */}
            <div
                className="hover-label"
                style={{
                    position: "absolute",
                    top: "100%",
                    left: "50%",
                    transform: "translateX(-50%)",
                    marginTop: "10px",
                    padding: "6px 12px",
                    backgroundColor: "#1F1F21",
                    color: "#ffffff",
                    fontSize: "14px",
                    fontWeight: "600",
                    borderRadius: "4px",
                    fontFamily: "system-ui, -apple-system, sans-serif",
                    opacity: 0,
                    visibility: "hidden",
                    transition: "opacity 0.3s ease, visibility 0.3s ease",
                    whiteSpace: "nowrap",
                    pointerEvents: "none",
                    zIndex: 10,
                }}
            >
                {label}
                {/* Small arrow pointing up */}
                <div
                    style={{
                        position: "absolute",
                        top: "-4px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "0",
                        height: "0",
                        borderLeft: "4px solid transparent",
                        borderRight: "4px solid transparent",
                        borderBottom: "4px solid #1F1F21",
                    }}
                />
            </div>

            <style jsx>{`
                .animation-wrapper:hover .hover-label {
                    opacity: 1 !important;
                    visibility: visible !important;
                }
            `}</style>
        </div>
    );

    return (
        <main>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "20px",
                    height: "100vh",
                    boxSizing: "border-box",
                }}
            >
                {/* Animations */}
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "40px",
                        marginBottom: "60px",
                    }}
                >
                    <AnimationWrapper label="Colour">
                        <ColourFoundation />
                    </AnimationWrapper>
                    <AnimationWrapper label="Icons">
                        <IconsFoundation />
                    </AnimationWrapper>
                    <AnimationWrapper label="Spacing">
                        <SpacingFoundation />
                    </AnimationWrapper>
                    <AnimationWrapper label="Typography">
                        <TypographyFoundation />
                    </AnimationWrapper>
                </div>

                {/* Refresh Button */}
                <button
                    onClick={() => {
                        console.log("Button clicked - restarting animations");
                        restartAnimations();
                    }}
                    style={{
                        padding: "10px 20px",
                        fontSize: "14px",
                        fontWeight: "600",
                        color: "#ffffff",
                        backgroundColor: "#1868DB",
                        border: "none",
                        borderRadius: "6px",
                        cursor: "pointer",
                        transition: "all 0.2s ease",
                        fontFamily: "system-ui, -apple-system, sans-serif",
                    }}
                    onMouseOver={(e) => {
                        e.currentTarget.style.backgroundColor = "#0052CC";
                        e.currentTarget.style.transform = "translateY(-1px)";
                    }}
                    onMouseOut={(e) => {
                        e.currentTarget.style.backgroundColor = "#1868DB";
                        e.currentTarget.style.transform = "translateY(0)";
                    }}
                >
                    ↻ Replay Animations
                </button>
            </div>
        </main>
    );
}
