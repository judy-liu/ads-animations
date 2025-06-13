"use client";

import { useEffect } from "react";
import SpacingFoundation from "../animations/spacing/spacing-foundation";
import TypographyFoundation from "../animations/typography/typography-foundation";
import IconsFoundation from "../animations/icons/icons-foundation";
import ColourFoundation from "../animations/colour/colour-foundation";

export default function Home() {
    useEffect(() => {
        // Restart animations by temporarily removing and re-adding animation classes
        const restartAnimations = () => {
            const animatedElements = document.querySelectorAll('[class*="foundation_"]');
            animatedElements.forEach((element) => {
                const htmlElement = element as HTMLElement;
                const originalClasses = htmlElement.className;
                htmlElement.className = htmlElement.className.replace(/\b\w*foundation_\w*\b/g, "");

                // Force reflow
                htmlElement.offsetHeight;

                // Restore classes to restart animations
                setTimeout(() => {
                    htmlElement.className = originalClasses;
                }, 10);
            });
        };

        // Restart animations after a short delay to ensure DOM is ready
        const timer = setTimeout(restartAnimations, 100);

        return () => clearTimeout(timer);
    }, []);

    return (
        <main>
            {/* Final Animations - Clean Layout */}
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "40px",
                    marginTop: "60px",
                    padding: "20px",
                    minHeight: "100vh",
                }}
            >
                <div style={{ flex: "0 0 auto" }}>
                    <ColourFoundation />
                </div>
                <div style={{ flex: "0 0 auto" }}>
                    <IconsFoundation />
                </div>
                <div style={{ flex: "0 0 auto" }}>
                    <SpacingFoundation />
                </div>
                <div style={{ flex: "0 0 auto" }}>
                    <TypographyFoundation />
                </div>
            </div>
        </main>
    );
}
