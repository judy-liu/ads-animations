import React from "react";
import SpacingFoundationV1 from "../animations/spacing/spacing-foundation-v1";
import SpacingFoundationV2 from "../animations/spacing/spacing-foundation-v2";
import SpacingFoundationV3 from "../animations/spacing/spacing-foundation-v3";
import SpacingFoundationV4 from "../animations/spacing/spacing-foundation-v4";
import TypographyFoundationV1 from "../animations/typography/typography-foundation-v1";
import TypographyFoundationV2 from "../animations/typography/typography-foundation-v2";
import TypographyFoundationV3 from "../animations/typography/typography-foundation-v3";
import IconsFoundationV1 from "../animations/icons/icons-foundation-v1";
import IconsFoundationV2 from "../animations/icons/icons-foundation-v2";
import IconsFoundationV3 from "../animations/icons/icons-foundation-v3";
import ColourFoundationV2 from "../animations/colour/colour-foundation-v2";
import ColourFoundationV3 from "../animations/colour/colour-foundation-v3";
import ColourFoundationV4 from "../animations/colour/colour-foundation-v4";

export default function Page() {
    return (
        <main>
            <table style={{ border: "2px solid black", borderCollapse: "collapse", width: "100%" }}>
                <tbody>
                    <tr>
                        <td style={{ border: "1px solid black", padding: "20px" }}>
                            <ColourFoundationV3 />
                        </td>
                        <td style={{ border: "1px solid black", padding: "20px" }}>
                            <SpacingFoundationV1 />
                        </td>
                        <td style={{ border: "1px solid black", padding: "20px" }}>
                            <TypographyFoundationV1 />
                        </td>
                        <td style={{ border: "1px solid black", padding: "20px" }}>
                            <IconsFoundationV1 />
                        </td>
                    </tr>
                    <tr>
                        <td style={{ border: "1px solid black", padding: "20px" }}>
                            <ColourFoundationV4 />
                        </td>
                        <td style={{ border: "1px solid black", padding: "20px" }}>
                            <SpacingFoundationV2 />
                        </td>
                        <td style={{ border: "1px solid black", padding: "20px" }}>
                            <TypographyFoundationV2 />
                        </td>
                        <td style={{ border: "1px solid black", padding: "20px" }}>
                            <IconsFoundationV2 />
                        </td>
                    </tr>
                    <tr>
                        <td style={{ border: "1px solid black", padding: "20px" }}></td>
                        <td style={{ border: "1px solid black", padding: "20px" }}>
                            <SpacingFoundationV3 />
                        </td>
                        <td style={{ border: "1px solid black", padding: "20px" }}>
                            <TypographyFoundationV3 />
                        </td>
                        <td style={{ border: "1px solid black", padding: "20px" }}>
                            <IconsFoundationV3 />
                        </td>
                    </tr>
                    <tr>
                        <td style={{ border: "1px solid black", padding: "20px" }}>
                            {/* Additional column for future colour content */}
                        </td>
                        <td style={{ border: "1px solid black", padding: "20px" }}>
                            <SpacingFoundationV4 />
                        </td>
                        <td style={{ border: "1px solid black", padding: "20px" }}>
                            {/* Additional column for future typography content */}
                        </td>
                        <td style={{ border: "1px solid black", padding: "20px" }}>
                            {/* Additional column for future icons content */}
                        </td>
                    </tr>
                </tbody>
            </table>

            {/* Finished Animations - Inline Layout */}
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "40px",
                    marginTop: "60px",
                    padding: "20px",
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
