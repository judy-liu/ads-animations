"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import ModalInteraction from "../../animations/pictorial-instructions/modal-interaction/modal-interaction";

export default function PictorialInstructionsPage() {
    const [animationKey, setAnimationKey] = useState(0);
    const [isDarkMode, setIsDarkMode] = useState(false);

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
            {/* Animation container */}
            <div style={{ position: "relative" }}>{children}</div>

            {/* Label and description */}
            <div
                style={{
                    marginTop: "16px",
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
        </div>
    );

    return (
        <>
            <style jsx global>{`
                :root {
                    --color-background-neutral-subtle: #f4f5f7;
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
                    backgroundColor: "var(--color-background-neutral-subtle)",
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
                    }}
                >
                    {/* Header */}
                    <div style={{ textAlign: "center", marginBottom: "40px" }}>
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                marginBottom: "24px",
                            }}
                        >
                            <Link
                                href="/"
                                style={{
                                    display: "inline-flex",
                                    alignItems: "center",
                                    gap: "8px",
                                    padding: "10px 20px",
                                    fontSize: "14px",
                                    fontWeight: "600",
                                    color: "var(--color-link)",
                                    backgroundColor: "transparent",
                                    border: "2px solid var(--color-link)",
                                    borderRadius: "6px",
                                    textDecoration: "none",
                                    transition: "all 0.2s ease",
                                    fontFamily: "system-ui, -apple-system, sans-serif",
                                }}
                                onMouseOver={(e) => {
                                    e.currentTarget.style.backgroundColor = "var(--color-link)";
                                    e.currentTarget.style.color = "var(--color-text-inverse)";
                                }}
                                onMouseOut={(e) => {
                                    e.currentTarget.style.backgroundColor = "transparent";
                                    e.currentTarget.style.color = "var(--color-link)";
                                }}
                            >
                                ← Back to ADS Foundations
                            </Link>

                            {/* Dark Mode Toggle */}
                            <button
                                onClick={toggleDarkMode}
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "8px",
                                    padding: "10px 16px",
                                    fontSize: "14px",
                                    fontWeight: "500",
                                    color: "var(--color-text)",
                                    backgroundColor: "var(--color-background-neutral-subtle)",
                                    border: "1px solid var(--color-border)",
                                    borderRadius: "6px",
                                    cursor: "pointer",
                                    fontFamily: "system-ui, -apple-system, sans-serif",
                                    transition: "all 0.2s ease",
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.backgroundColor =
                                        "var(--color-background-neutral-subtle-hovered)";
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.backgroundColor =
                                        "var(--color-background-neutral-subtle)";
                                }}
                            >
                                {isDarkMode ? "🌙" : "☀️"} {isDarkMode ? "Light Mode" : "Dark Mode"}
                            </button>
                        </div>

                        <h1
                            style={{
                                fontSize: "28px",
                                fontWeight: "700",
                                color: "var(--color-text)",
                                margin: "0 0 12px 0",
                                fontFamily: "system-ui, -apple-system, sans-serif",
                            }}
                        >
                            Pictorial Instructions
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
                            Longer animation sequences featuring UI components styled as
                            low-fidelity ADS components. These animations demonstrate complex
                            interactions and workflows.
                        </p>

                        <button
                            onClick={restartAllAnimations}
                            style={{
                                backgroundColor: "var(--color-background-input)",
                                color: "var(--color-text)",
                                border: "1px solid var(--color-border)",
                                borderRadius: "8px",
                                padding: "12px 24px",
                                fontSize: "14px",
                                fontWeight: "500",
                                cursor: "pointer",
                                fontFamily: "system-ui, -apple-system, sans-serif",
                                transition: "all 0.2s ease",
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor =
                                    "var(--color-background-neutral-subtle)";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor =
                                    "var(--color-background-input)";
                            }}
                        >
                            Restart All Animations
                        </button>
                    </div>

                    {/* Animations Grid */}
                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                            gap: "40px",
                            width: "100%",
                            maxWidth: "1000px",
                        }}
                    >
                        {/* Modal Interaction Animation */}
                        <AnimationWrapper
                            label="Modal Interaction"
                            description="Complex modal interaction sequence with cursor movement, selection frames, and button states"
                        >
                            <div key={`modal-interaction-${animationKey}`}>
                                <ModalInteraction isDarkMode={isDarkMode} />
                            </div>
                        </AnimationWrapper>
                    </div>
                </div>
            </main>
        </>
    );
}
