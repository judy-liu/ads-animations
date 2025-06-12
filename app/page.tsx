import React from "react";
import SpacingFoundationV4 from "../animations/spacing/spacing-foundation-v4";
import TypographyFoundationV3 from "../animations/typography/typography-foundation-v3";
import IconsFoundationV3 from "../animations/icons/icons-foundation-v3";
import ColourFoundationV4 from "../animations/colour/colour-foundation-v4";

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
                    <ColourFoundationV4 />
                </div>
                <div style={{ flex: "0 0 auto" }}>
                    <IconsFoundationV3 />
                </div>
                <div style={{ flex: "0 0 auto" }}>
                    <SpacingFoundationV4 />
                </div>
                <div style={{ flex: "0 0 auto" }}>
                    <TypographyFoundationV3 />
                </div>
            </div>
        </main>
    );
}
