"use client";

import { useState, useEffect } from "react";

export default function EasingDemo() {
    const [globalAnimationKey, setGlobalAnimationKey] = useState(0);
    const [hoverAnimationKeys, setHoverAnimationKeys] = useState<{ [key: string]: number }>({
        "ease-in": 0,
        "ease-out": 0,
        "ease-in-out": 0,
    });
    const [isHovering, setIsHovering] = useState<{ [key: string]: boolean }>({
        "ease-in": false,
        "ease-out": false,
        "ease-in-out": false,
    });

    const startAnimation = () => {
        setGlobalAnimationKey((prev) => prev + 1);

        // Reset global animation after it completes (2.6s total: 2s animation + 0.6s fade)
        setTimeout(() => {
            setGlobalAnimationKey(0);
        }, 2600);
    };

    const handleMouseEnter = (easing: string) => {
        if (!isHovering[easing] && globalAnimationKey === 0) {
            setIsHovering((prev) => ({ ...prev, [easing]: true }));
            setHoverAnimationKeys((prev) => ({ ...prev, [easing]: prev[easing] + 1 }));
        }
    };

    const handleMouseLeave = (easing: string) => {
        setIsHovering((prev) => ({ ...prev, [easing]: false }));
        // Trigger immediate reset
        setHoverAnimationKeys((prev) => ({ ...prev, [easing]: prev[easing] + 1 }));
    };

    // CSS for animations
    useEffect(() => {
        const style = document.createElement("style");
        style.textContent = `
            .ball-track {
                position: relative;
                width: 200px;
                height: 50px;
                background-color: #f5f5f5;
                border-radius: 25px;
                overflow: hidden;
                border: 2px solid #e0e0e0;
            }
            
            .ball {
                width: 30px;
                height: 30px;
                background-color: #1868DB;
                border-radius: 50%;
                position: absolute;
                top: 50%;
                left: 10px;
                transform: translateY(-50%) translateX(0px);
                box-shadow: 0 2px 8px rgba(24, 104, 219, 0.3);
            }
            
            .ball.global-animate.ease-in {
                animation: moveEaseIn 2s ease-in forwards, fadeOutAndReset 0.6s ease-out 2s forwards;
            }
            
            .ball.global-animate.ease-out {
                animation: moveEaseOut 2s ease-out forwards, fadeOutAndReset 0.6s ease-out 2s forwards;
            }
            
            .ball.global-animate.ease-in-out {
                animation: moveEaseInOut 2s ease-in-out forwards, fadeOutAndReset 0.6s ease-out 2s forwards;
            }
            
            .ball.hover-cycle.ease-in {
                animation: moveEaseIn 2s ease-in forwards, fadeOutAndReset 0.6s ease-out 2s forwards;
            }
            
            .ball.hover-cycle.ease-out {
                animation: moveEaseOut 2s ease-out forwards, fadeOutAndReset 0.6s ease-out 2s forwards;
            }
            
            .ball.hover-cycle.ease-in-out {
                animation: moveEaseInOut 2s ease-in-out forwards, fadeOutAndReset 0.6s ease-out 2s forwards;
            }
            
            .ball.hover-reset {
                animation: fadeOutAndReset 0.6s ease-out forwards;
            }
            
            @keyframes moveEaseIn {
                from { transform: translateY(-50%) translateX(0px); }
                to { transform: translateY(-50%) translateX(150px); }
            }
            
            @keyframes moveEaseOut {
                from { transform: translateY(-50%) translateX(0px); }
                to { transform: translateY(-50%) translateX(150px); }
            }
            
            @keyframes moveEaseInOut {
                from { transform: translateY(-50%) translateX(0px); }
                to { transform: translateY(-50%) translateX(150px); }
            }
            
            @keyframes fadeOutAndReset {
                0% { 
                    opacity: 1; 
                    transform: translateY(-50%) translateX(150px); 
                }
                50% { 
                    opacity: 0; 
                    transform: translateY(-50%) translateX(150px); 
                }
                51% { 
                    opacity: 0; 
                    transform: translateY(-50%) translateX(0px); 
                }
                100% { 
                    opacity: 1; 
                    transform: translateY(-50%) translateX(0px); 
                }
            }
        `;
        document.head.appendChild(style);

        return () => {
            document.head.removeChild(style);
        };
    }, []);

    // Easing curve SVG paths
    const easingCurves = {
        "ease-in": "M0,100 C0,100 50,100 100,0",
        "ease-out": "M0,100 C50,0 100,0 100,0",
        "ease-in-out": "M0,100 C0,100 25,100 50,50 C75,0 100,0 100,0",
    };

    const EasingDemo = ({
        title,
        easing,
        description,
    }: {
        title: string;
        easing: string;
        description: string;
    }) => {
        const isCurrentlyHovering = isHovering[easing];
        const isGlobalAnimating = globalAnimationKey > 0;
        const hoverKey = hoverAnimationKeys[easing];

        return (
            <div
                style={{
                    backgroundColor: "#f8f9fa",
                    borderRadius: "8px",
                    padding: "16px",
                    boxShadow:
                        "inset 0 2px 4px rgba(0, 0, 0, 0.1), inset 0 -1px 0 rgba(255, 255, 255, 0.5)",
                    border: "1px solid rgba(0, 0, 0, 0.08)",
                    width: "220px",
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                }}
                onMouseEnter={() => handleMouseEnter(easing)}
                onMouseLeave={() => handleMouseLeave(easing)}
                onMouseOver={(e) => {
                    e.currentTarget.style.backgroundColor = "#f0f2f5";
                    e.currentTarget.style.boxShadow =
                        "inset 0 3px 6px rgba(0, 0, 0, 0.15), inset 0 -1px 0 rgba(255, 255, 255, 0.3)";
                }}
                onMouseOut={(e) => {
                    e.currentTarget.style.backgroundColor = "#f8f9fa";
                    e.currentTarget.style.boxShadow =
                        "inset 0 2px 4px rgba(0, 0, 0, 0.1), inset 0 -1px 0 rgba(255, 255, 255, 0.5)";
                }}
            >
                <h3
                    style={{
                        fontSize: "16px",
                        fontWeight: "600",
                        color: "#1F1F21",
                        margin: "0 0 6px 0",
                        fontFamily: "system-ui, -apple-system, sans-serif",
                    }}
                >
                    {title}
                </h3>
                <p
                    style={{
                        fontSize: "12px",
                        color: "#666",
                        margin: "0 0 12px 0",
                        fontFamily: "system-ui, -apple-system, sans-serif",
                        lineHeight: "1.3",
                    }}
                >
                    {description}
                </p>

                {/* Easing curve visualization */}
                <div style={{ marginBottom: "4px" }}>
                    <div
                        style={{
                            fontSize: "10px",
                            color: "#666",
                            marginBottom: "3px",
                            fontFamily: "system-ui, -apple-system, sans-serif",
                        }}
                    >
                        Timing Curve:
                    </div>
                    <svg
                        width="100%"
                        height="100%"
                        viewBox="0 0 120 135"
                        style={{
                            aspectRatio: "1",
                            height: "220px",
                        }}
                    >
                        {/* Grid lines */}
                        <defs>
                            <pattern
                                id={`grid-${easing}`}
                                width="20"
                                height="20"
                                patternUnits="userSpaceOnUse"
                            >
                                <path
                                    d="M 20 0 L 0 0 0 20"
                                    fill="none"
                                    stroke="#e0e0e0"
                                    strokeWidth="0.5"
                                />
                            </pattern>
                        </defs>
                        <rect
                            x="10"
                            y="10"
                            width="100"
                            height="100"
                            fill={`url(#grid-${easing})`}
                        />

                        {/* Axes */}
                        <line x1="10" y1="110" x2="110" y2="110" stroke="#999" strokeWidth="1" />
                        <line x1="10" y1="10" x2="10" y2="110" stroke="#999" strokeWidth="1" />

                        {/* Easing curve - adjusted for padding */}
                        <path
                            d={easingCurves[easing as keyof typeof easingCurves].replace(
                                /(\d+)/g,
                                (match) => {
                                    const num = parseInt(match);
                                    return (num + 10).toString();
                                }
                            )}
                            fill="none"
                            stroke="#1868DB"
                            strokeWidth="2"
                        />

                        {/* Labels */}
                        <text x="60" y="122" textAnchor="middle" fontSize="8" fill="#666">
                            Time
                        </text>
                        <text
                            x="5"
                            y="60"
                            textAnchor="middle"
                            fontSize="8"
                            fill="#666"
                            transform="rotate(-90 5 60)"
                        >
                            Progress
                        </text>
                    </svg>
                </div>

                {/* Animation track */}
                <div className="ball-track" style={{ margin: "8px auto 0 auto" }}>
                    {/* Moving ball */}
                    <div
                        key={`ball-${easing}-${hoverKey}-${globalAnimationKey}`}
                        className={`ball ${isGlobalAnimating ? "global-animate" : ""} ${isCurrentlyHovering && hoverKey > 0 ? "hover-cycle" : ""} ${easing}`}
                    />
                </div>

                {/* Easing function name */}
                <div
                    style={{
                        marginTop: "16px",
                        fontSize: "10px",
                        fontFamily: "monospace",
                        color: "#1868DB",
                        backgroundColor: "#f0f7ff",
                        padding: "3px 6px",
                        borderRadius: "3px",
                        textAlign: "center",
                    }}
                >
                    transition: transform 2s {easing}
                </div>
            </div>
        );
    };

    return (
        <main
            style={{
                minHeight: "100vh",
                padding: "40px 20px",
                fontFamily: "system-ui, -apple-system, sans-serif",
                backgroundColor: "#f5f5f5",
            }}
        >
            <div
                style={{
                    maxWidth: "900px",
                    margin: "0 auto",
                    backgroundColor: "#ffffff",
                    borderRadius: "12px",
                    padding: "40px",
                    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
                    border: "1px solid rgba(0, 0, 0, 0.05)",
                }}
            >
                {/* Header */}
                <div style={{ textAlign: "center", marginBottom: "40px" }}>
                    <h1
                        style={{
                            fontSize: "32px",
                            fontWeight: "700",
                            color: "#1F1F21",
                            margin: "0 0 16px 0",
                        }}
                    >
                        CSS Easing Functions Demo 📈☄️✨
                    </h1>
                    <p
                        style={{
                            fontSize: "16px",
                            color: "#666",
                            margin: "0 140px 32px 140px",
                            lineHeight: "1.5",
                            textAlign: "left",
                        }}
                    >
                        Compare how the 3 most common easing functions affect animation timing and
                        feel. Hover over a card to view that specific easing animation.
                    </p>

                    {/* Control button */}
                    <button
                        onClick={startAnimation}
                        style={{
                            padding: "12px 24px",
                            fontSize: "16px",
                            fontWeight: "600",
                            color: "#ffffff",
                            backgroundColor: "#1868DB",
                            border: "none",
                            borderRadius: "8px",
                            cursor: "pointer",
                            transition: "all 0.2s ease",
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
                        ▶ Play all animations
                    </button>
                </div>

                {/* Easing demos */}
                <div
                    style={{
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "center",
                        gap: "24px",
                        marginBottom: "40px",
                    }}
                >
                    <EasingDemo
                        title="Ease-In"
                        easing="ease-in"
                        description="Starts slow and accelerates. Good for elements entering the screen or beginning an action."
                    />
                    <EasingDemo
                        title="Ease-Out"
                        easing="ease-out"
                        description="Starts fast and decelerates. Perfect for elements settling into place or completing an action."
                    />
                    <EasingDemo
                        title="Ease-In-Out"
                        easing="ease-in-out"
                        description="Starts slow, speeds up in the middle, then slows down. Creates smooth, natural-feeling transitions."
                    />
                </div>

                {/* Navigation back
                <div style={{ textAlign: "center", marginTop: "40px" }}>
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
                        ← Back to ADS Foundations
                    </a>
                </div> */}
            </div>
        </main>
    );
}
