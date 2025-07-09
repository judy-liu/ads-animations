import React from "react";

interface BouncinessSliderCardProps {
    bounciness: number;
    setBounciness: (n: number) => void;
    isPlaying: boolean;
    onPlay: () => void;
    themeMode: string;
    getThemedColor: (light: string, dark: string, mode?: string) => string;
}

export default function BouncinessSliderCard({
    bounciness,
    setBounciness,
    isPlaying,
    onPlay,
    themeMode,
    getThemedColor,
}: BouncinessSliderCardProps) {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "8px",
                padding: "16px",
                backgroundColor: getThemedColor("#ffffff", "#22272b", themeMode),
                borderRadius: "8px",
                border: `1px solid var(--color-border)`,
                width: "468px",
            }}
        >
            <div
                style={{
                    fontSize: "14px",
                    color: getThemedColor("#6b778c", "#9fadbc", themeMode),
                    fontFamily: "system-ui, -apple-system, sans-serif",
                    marginBottom: "4px",
                    textAlign: "left",
                }}
            >
                Use the slider to adjust the bounciness of the animation. Higher values make the
                motion more playful and elastic.
            </div>
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    width: "100%",
                }}
            >
                <label
                    style={{
                        fontSize: "14px",
                        fontWeight: "600",
                        color: getThemedColor("#172b4d", "#e6fcff", themeMode),
                        fontFamily: "system-ui, -apple-system, sans-serif",
                        flex: "1",
                    }}
                >
                    Bounciness: {bounciness}%
                </label>
            </div>
            <input
                type="range"
                min="0"
                max="100"
                value={bounciness}
                onChange={(e) => setBounciness(Number(e.target.value))}
                style={{
                    width: "100%",
                    height: "6px",
                    borderRadius: "3px",
                    background: getThemedColor("#dfe1e6", "#3c4c5c", themeMode),
                    outline: "none",
                    cursor: "pointer",
                }}
            />
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                    fontSize: "12px",
                    color: getThemedColor("#6b778c", "#9fadbc", themeMode),
                    fontFamily: "system-ui, -apple-system, sans-serif",
                }}
            >
                <span>Smooth</span>
                <span>Bouncy</span>
            </div>
        </div>
    );
}
