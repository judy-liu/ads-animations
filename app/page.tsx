import React from "react";
import SpacingFoundation from "../animations/spacing/spacing-foundation";
import TypographyFoundation from "../animations/typography/typography-foundation";
import IconsFoundation from "../animations/icons/icons-foundation";
import ColourFoundation from "../animations/colour/colour-foundation";

export default function Page() {
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
