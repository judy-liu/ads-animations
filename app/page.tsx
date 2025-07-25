"use client";

import { useEffect, useRef, useState } from "react";
import SpacingFoundation from "../animations/spacing/spacing-foundation";
import TypographyFoundation from "../animations/typography/typography-foundation";
import IconsFoundation from "../animations/icons/icons-foundation";
import ColourFoundation from "../animations/colour/colour-foundation";
import IconsMotion from "../animations/icons/icons-motion";
import IconsMotionAdvanced from "../animations/icons/icons-motion-advanced";

export default function Home() {
    const [animationKey, setAnimationKey] = useState(0);

    // Function to restart all animations
    const restartAllAnimations = () => {
        // Force re-render of Motion components by updating key
        setAnimationKey((prev) => prev + 1);

        // Restart CSS animations
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
                    marginTop: "2px",
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
        <main
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "20px",
                minHeight: "100vh",
                boxSizing: "border-box",
            }}
        >
            {/* Card Container */}
            <div
                style={{
                    backgroundColor: "#ffffff",
                    borderRadius: "16px",
                    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.1)",
                    padding: "32px 32px 32px 32px",
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
                        fontSize: "24px",
                        fontWeight: "700",
                        color: "#1F1F21",
                        margin: "0 0 32px 0",
                        fontFamily: "system-ui, -apple-system, sans-serif",
                        textAlign: "center",
                    }}
                >
                    Animated ADS Foundations 🚗💨✨
                </h1>

                {/* Original CSS Animations */}
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
                            fontSize: "18px",
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
                            gap: "40px",
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
                </div>

                {/* Framer Motion Animations */}
                <div
                    style={{
                        marginBottom: "32px",
                    }}
                >
                    <h2
                        style={{
                            fontSize: "18px",
                            fontWeight: "600",
                            color: "#1F1F21",
                            margin: "0 0 20px 0",
                            fontFamily: "system-ui, -apple-system, sans-serif",
                            textAlign: "center",
                        }}
                    >
                        Framer Motion Versions
                    </h2>

                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "40px",
                        }}
                    >
                        <AnimationWrapper label="Icons Basic">
                            <div key={`motion-basic-${animationKey}`}>
                                <IconsMotion />
                            </div>
                        </AnimationWrapper>
                        <AnimationWrapper label="Icons Advanced">
                            <div key={`motion-advanced-${animationKey}`}>
                                <IconsMotionAdvanced />
                            </div>
                        </AnimationWrapper>
                    </div>
                </div>

                {/* Buttons */}
                <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                    <button
                        onClick={() => {
                            console.log("Button clicked - restarting all animations");
                            restartAllAnimations();
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
                        ↻ Replay All Animations
                    </button>

                    <a
                        href="/motion"
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
                        🎬 Motion Comparison
                    </a>

                    <a
                        href="/pictorial-instructions"
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
                        📋 Pictorial Instructions
                    </a>
                </div>
            </div>
        </main>
    );
}
