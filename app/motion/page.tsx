"use client";

import { useEffect, useRef } from "react";
import IconsFoundation from "../../animations/icons/icons-foundation";
import IconsMotion from "../../animations/icons/icons-motion";
import IconsMotionAdvanced from "../../animations/icons/icons-motion-advanced";

export default function MotionPage() {
    // Function to restart CSS animations
    const restartAnimations = () => {
        const container = document.querySelector(".icons-foundation_svgContainer__w38RQ");
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
    };

    const AnimationWrapper = ({
        children,
        label,
        description,
    }: {
        children: React.ReactNode;
        label: string;
        description: string;
    }) => (
        <div
            className="animation-wrapper"
            style={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                flex: "0 0 auto",
                padding: "20px",
                backgroundColor: "#f8f9fa",
                borderRadius: "12px",
                border: "1px solid #e9ecef",
            }}
        >
            {/* Animation container - completely isolated */}
            <div style={{ position: "relative", marginBottom: "16px" }}>{children}</div>

            {/* Label */}
            <h3
                style={{
                    fontSize: "16px",
                    fontWeight: "600",
                    color: "#1F1F21",
                    margin: "0 0 8px 0",
                    fontFamily: "system-ui, -apple-system, sans-serif",
                    textAlign: "center",
                }}
            >
                {label}
            </h3>

            {/* Description */}
            <p
                style={{
                    fontSize: "14px",
                    color: "#6c757d",
                    margin: "0",
                    fontFamily: "system-ui, -apple-system, sans-serif",
                    textAlign: "center",
                    maxWidth: "200px",
                    lineHeight: "1.4",
                }}
            >
                {description}
            </p>
        </div>
    );

    return (
        <main
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "20px",
                minHeight: "100vh",
                boxSizing: "border-box",
                backgroundColor: "#f8f9fa",
            }}
        >
            {/* Card Container */}
            <div
                style={{
                    backgroundColor: "#ffffff",
                    borderRadius: "16px",
                    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.1)",
                    padding: "32px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    maxWidth: "100%",
                    border: "1px solid rgba(0, 0, 0, 0.05)",
                }}
            >
                {/* Title */}
                <h1
                    style={{
                        fontSize: "28px",
                        fontWeight: "700",
                        color: "#1F1F21",
                        margin: "0 0 16px 0",
                        fontFamily: "system-ui, -apple-system, sans-serif",
                        textAlign: "center",
                    }}
                >
                    Icons Animation Comparison
                </h1>

                <p
                    style={{
                        fontSize: "16px",
                        color: "#6c757d",
                        margin: "0 0 32px 0",
                        fontFamily: "system-ui, -apple-system, sans-serif",
                        textAlign: "center",
                        maxWidth: "600px",
                        lineHeight: "1.5",
                    }}
                >
                    Comparing the original CSS animations with Framer Motion implementations
                </p>

                {/* Original CSS Animations Section */}
                <div
                    style={{
                        marginBottom: "40px",
                        padding: "24px",
                        backgroundColor: "#f8f9fa",
                        borderRadius: "12px",
                        border: "1px solid #e9ecef",
                    }}
                >
                    <h2
                        style={{
                            fontSize: "20px",
                            fontWeight: "600",
                            color: "#1F1F21",
                            margin: "0 0 20px 0",
                            fontFamily: "system-ui, -apple-system, sans-serif",
                            textAlign: "center",
                        }}
                    >
                        Original CSS Animations
                    </h2>

                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "24px",
                        }}
                    >
                        <AnimationWrapper
                            label="CSS Implementation"
                            description="Original implementation using CSS keyframes and stroke-dasharray with repeating animations"
                        >
                            <IconsFoundation />
                        </AnimationWrapper>
                    </div>
                </div>

                {/* Framer Motion Animations Section */}
                <div
                    style={{
                        marginBottom: "32px",
                    }}
                >
                    <h2
                        style={{
                            fontSize: "20px",
                            fontWeight: "600",
                            color: "#1F1F21",
                            margin: "0 0 20px 0",
                            fontFamily: "system-ui, -apple-system, sans-serif",
                            textAlign: "center",
                        }}
                    >
                        Framer Motion Implementations
                    </h2>

                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "flex-start",
                            gap: "24px",
                            flexWrap: "wrap",
                        }}
                    >
                        <AnimationWrapper
                            label="Motion Basic"
                            description="Motion implementation with initial animations only"
                        >
                            <IconsMotion />
                        </AnimationWrapper>

                        <AnimationWrapper
                            label="Motion Advanced"
                            description="Motion implementation with repeating animations"
                        >
                            <IconsMotionAdvanced />
                        </AnimationWrapper>
                    </div>
                </div>

                {/* Buttons */}
                <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                    <button
                        onClick={() => {
                            console.log("Button clicked - restarting CSS animations");
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
                            boxShadow: "0 2px 4px rgba(24, 104, 219, 0.2)",
                        }}
                        onMouseOver={(e) => {
                            e.currentTarget.style.backgroundColor = "#0052CC";
                            e.currentTarget.style.transform = "translateY(-1px)";
                            e.currentTarget.style.boxShadow = "0 4px 8px rgba(24, 104, 219, 0.3)";
                        }}
                        onMouseOut={(e) => {
                            e.currentTarget.style.backgroundColor = "#1868DB";
                            e.currentTarget.style.transform = "translateY(0)";
                            e.currentTarget.style.boxShadow = "0 2px 4px rgba(24, 104, 219, 0.2)";
                        }}
                    >
                        ↻ Replay CSS Animations
                    </button>

                    <a
                        href="/"
                        style={{
                            display: "inline-block",
                            padding: "10px 20px",
                            fontSize: "14px",
                            fontWeight: "600",
                            color: "#1868DB",
                            backgroundColor: "transparent",
                            border: "2px solid #1868DB",
                            borderRadius: "6px",
                            textDecoration: "none",
                            transition: "all 0.2s ease",
                            fontFamily: "system-ui, -apple-system, sans-serif",
                        }}
                        onMouseOver={(e) => {
                            e.currentTarget.style.backgroundColor = "#1868DB";
                            e.currentTarget.style.color = "#ffffff";
                        }}
                        onMouseOut={(e) => {
                            e.currentTarget.style.backgroundColor = "transparent";
                            e.currentTarget.style.color = "#1868DB";
                        }}
                    >
                        ← Back to All Animations
                    </a>
                </div>

                {/* Motion Library Info */}
                <div
                    style={{
                        marginTop: "32px",
                        padding: "20px",
                        backgroundColor: "#f8f9fa",
                        borderRadius: "8px",
                        border: "1px solid #e9ecef",
                        maxWidth: "600px",
                    }}
                >
                    <h3
                        style={{
                            fontSize: "18px",
                            fontWeight: "600",
                            color: "#1F1F21",
                            margin: "0 0 12px 0",
                            fontFamily: "system-ui, -apple-system, sans-serif",
                        }}
                    >
                        About Framer Motion
                    </h3>
                    <p
                        style={{
                            fontSize: "14px",
                            color: "#6c757d",
                            margin: "0 0 12px 0",
                            fontFamily: "system-ui, -apple-system, sans-serif",
                            lineHeight: "1.5",
                        }}
                    >
                        Framer Motion is a production-ready motion library for React. It provides a
                        declarative way to create animations with features like spring physics,
                        gesture support, and layout animations.
                    </p>
                    <p
                        style={{
                            fontSize: "14px",
                            color: "#6c757d",
                            margin: "0",
                            fontFamily: "system-ui, -apple-system, sans-serif",
                            lineHeight: "1.5",
                        }}
                    >
                        <strong>Key differences:</strong> The Motion version uses declarative
                        animations with better performance optimizations, while the CSS version uses
                        traditional keyframe animations. Both achieve similar visual results.
                    </p>
                </div>
            </div>
        </main>
    );
}
