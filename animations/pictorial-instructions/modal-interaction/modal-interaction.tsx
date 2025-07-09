import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import svgPaths from "./svg-paths";

// Helper function to get themed colors based on theme mode
function getThemedColor(lightColor: string, darkColor: string, themeMode?: string) {
    return themeMode === "dark" ? darkColor : lightColor;
}

interface CursorProps {
    x: number;
    y: number;
}

function Cursor({ x, y }: CursorProps) {
    return (
        <motion.div
            style={{
                position: "absolute",
                pointerEvents: "none",
                zIndex: 50,
                left: 0,
                top: 0,
            }}
            animate={{ x, y }}
            transition={{ duration: 1.2, ease: "easeOut" }}
        >
            <div style={{ position: "relative", width: "61.212px", height: "61.212px" }}>
                <div style={{ position: "absolute", inset: "-14.54%" }}>
                    <svg
                        style={{ display: "block", width: "100%", height: "100%" }}
                        fill="none"
                        preserveAspectRatio="none"
                        viewBox="0 0 80 80"
                    >
                        <g>
                            <path
                                d={svgPaths.cursorShadow}
                                fill="#000000"
                                style={{
                                    filter: "drop-shadow(0px 0px 8.9px rgba(0, 0, 0, 0.25))",
                                }}
                            />
                            <path
                                clipRule="evenodd"
                                d={svgPaths.cursorArrow}
                                fill="#FFFFFF"
                                fillRule="evenodd"
                            />
                        </g>
                    </svg>
                </div>
            </div>
        </motion.div>
    );
}

function Icon1({ themeMode }: { themeMode?: string }) {
    return (
        <div
            style={{
                backgroundColor: getThemedColor("#36b37e", "#36b37e", themeMode), // Success color is same in both themes
                width: "33.358px",
                height: "33.358px",
                borderRadius: "3.1273px",
                flexShrink: 0,
            }}
        />
    );
}

function Text({ themeMode }: { themeMode?: string }) {
    return (
        <div
            style={{
                backgroundColor: getThemedColor("#6b778c", "#9fadbc", themeMode),
                height: "6.255px",
                width: "101.116px",
                borderRadius: "3.1273px",
                flexShrink: 0,
            }}
        />
    );
}

function Text1({ themeMode }: { themeMode?: string }) {
    return (
        <div
            style={{
                backgroundColor: getThemedColor("#6b778c", "#9fadbc", themeMode),
                height: "6.255px",
                width: "100%",
                borderRadius: "3.1273px",
                flexShrink: 0,
            }}
        />
    );
}

function Header({ themeMode }: { themeMode?: string }) {
    return (
        <div style={{ position: "relative", flexShrink: 0, width: "156.365px" }}>
            <div
                style={{
                    boxSizing: "border-box",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    padding: 0,
                    position: "relative",
                    width: "156.365px",
                    gap: "12.509px",
                }}
            >
                <Text themeMode={themeMode} />
                <Text1 themeMode={themeMode} />
            </div>
        </div>
    );
}

function Text2({ themeMode }: { themeMode?: string }) {
    return (
        <div
            style={{
                backgroundColor: getThemedColor("#0052cc", "#4c9aff", themeMode),
                height: "6.255px",
                width: "58.376px",
                borderRadius: "3.1273px",
                flexShrink: 0,
            }}
        />
    );
}

function Actions({ themeMode }: { themeMode?: string }) {
    return (
        <div style={{ position: "relative", flexShrink: 0, height: "25.018px" }}>
            <div
                style={{
                    boxSizing: "border-box",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "flex-end",
                    justifyContent: "flex-start",
                    overflow: "clip",
                    padding: 0,
                    position: "relative",
                    height: "25.018px",
                    gap: "8.339px",
                }}
            >
                {[...Array(2).keys()].map((_, i) => (
                    <Text2 key={i} themeMode={themeMode} />
                ))}
            </div>
        </div>
    );
}

function Content({ themeMode }: { themeMode?: string }) {
    return (
        <div style={{ position: "relative", flexShrink: 0, width: "308.561px" }}>
            <div
                style={{
                    boxSizing: "border-box",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    overflow: "clip",
                    padding: 0,
                    position: "relative",
                    width: "308.561px",
                    gap: "4.17px",
                }}
            >
                <Header themeMode={themeMode} />
                <Actions themeMode={themeMode} />
            </div>
        </div>
    );
}

function Cross({ themeMode }: { themeMode?: string }) {
    return (
        <div
            style={{
                position: "absolute",
                left: "-2px",
                top: "4.17px",
                width: "16.679px",
                height: "16.679px",
            }}
        >
            <svg
                style={{ display: "block", width: "100%", height: "100%" }}
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 20 17"
            >
                <g id="Cross">
                    <rect
                        width="2.08487"
                        height="16.679"
                        rx="1.04244"
                        fill={getThemedColor("#6b778c", "#9fadbc", themeMode)}
                        transform="rotate(45 8.3395 8.3395)"
                    />
                    <rect
                        width="2.08487"
                        height="16.679"
                        rx="1.04244"
                        fill={getThemedColor("#6b778c", "#9fadbc", themeMode)}
                        transform="rotate(-45 8.3395 8.3395)"
                    />
                </g>
            </svg>
        </div>
    );
}

function Flag({ shouldMove, themeMode }: { shouldMove: boolean; themeMode?: string }) {
    return (
        <motion.div
            style={{
                position: "absolute",
                borderRadius: "10.4243px",
                backgroundColor: getThemedColor("#ffffff", "#22272b", themeMode),
                border: `2px solid ${getThemedColor("#dfe1e6", "#3c4c5c", themeMode)}`,
                width: "252.269px",
                height: "95.904px",
            }}
            animate={{
                left: shouldMove ? 329.789 : 107,
                top: shouldMove ? 29 : 59,
            }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
        >
            <div style={{ position: "relative", width: "100%", height: "100%" }}>
                <div
                    style={{
                        boxSizing: "border-box",
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "flex-start",
                        justifyContent: "flex-start",
                        overflow: "visible",
                        padding: "20.849px 16.679px",
                        position: "relative",
                        width: "100%",
                        height: "100%",
                        gap: "12.509px",
                    }}
                >
                    <Icon1 themeMode={themeMode} />
                    <Content themeMode={themeMode} />
                </div>
            </div>
        </motion.div>
    );
}

function SelectionFrame({
    phase,
    cursorPosition,
    purpleRect,
    themeMode,
}: {
    phase: "hidden" | "resizing" | "blue-snap" | "purple-snap" | "purple-moved";
    cursorPosition: { x: number; y: number };
    purpleRect: {
        initial: { left: number; top: number; width: number; height: number };
        moved: { left: number; top: number; width: number; height: number };
    };
    themeMode?: string;
}) {
    if (phase === "hidden") return null;

    const startX = 94.16;
    const startY = 31.18;

    // Blue selection position (matches Rec-13-980 dimensions)
    const blueSnapPosition = {
        left: 93.789,
        top: 31,
        width: 284,
        height: 139,
    };

    // Determine current position, styling and duration based on phase
    let animateProps;
    let borderColor;
    let backgroundColor;
    let duration;

    switch (phase) {
        case "resizing":
            animateProps = {
                opacity: 1,
                left: startX,
                top: startY,
                width: Math.max(8.9, cursorPosition.x - startX),
                height: Math.max(8.9, cursorPosition.y - startY),
            };
            borderColor = getThemedColor("#0052cc", "#4c9aff", themeMode);
            backgroundColor = getThemedColor(
                "rgba(0, 82, 204, 0.15)",
                "rgba(76, 154, 255, 0.15)",
                themeMode
            );
            duration = 1.2;
            break;
        case "blue-snap":
            animateProps = {
                opacity: 1,
                left: blueSnapPosition.left,
                top: blueSnapPosition.top,
                width: blueSnapPosition.width,
                height: blueSnapPosition.height,
            };
            borderColor = getThemedColor("#0052cc", "#4c9aff", themeMode);
            backgroundColor = getThemedColor(
                "rgba(0, 82, 204, 0.15)",
                "rgba(76, 154, 255, 0.15)",
                themeMode
            );
            duration = 0; // Instant
            break;
        case "purple-snap":
            animateProps = {
                opacity: 1,
                left: purpleRect.initial.left,
                top: purpleRect.initial.top,
                width: purpleRect.initial.width,
                height: purpleRect.initial.height,
            };
            borderColor = getThemedColor("#af59e1", "#9b8afb", themeMode);
            backgroundColor = "transparent";
            duration = 0; // Instant
            break;
        case "purple-moved":
            animateProps = {
                opacity: 1,
                left: purpleRect.moved.left,
                top: purpleRect.moved.top,
                width: purpleRect.moved.width,
                height: purpleRect.moved.height,
            };
            borderColor = getThemedColor("#af59e1", "#9b8afb", themeMode);
            backgroundColor = "transparent";
            duration = 0.6;
            break;
        default:
            return null;
    }

    const showHandles = phase === "purple-snap" || phase === "purple-moved";

    return (
        <motion.div
            style={{
                position: "absolute",
                pointerEvents: "none",
                backgroundColor,
                border: `4.45px solid ${borderColor}`,
            }}
            initial={{
                opacity: 0,
                left: startX,
                top: startY,
                width: 8.9,
                height: 8.9,
            }}
            animate={animateProps}
            transition={{
                duration,
                ease: phase === "resizing" ? "easeOut" : "easeInOut",
            }}
        >
            {/* Selection handles - only show for purple phases */}
            {showHandles &&
                [
                    { position: "top-left", style: { left: -8.902, top: -8.9 } },
                    { position: "top-right", style: { right: -8.901, top: -8.9 } },
                    { position: "bottom-left", style: { left: -8.902, bottom: -7.119 } },
                    { position: "bottom-right", style: { right: -8.901, bottom: -7.119 } },
                ].map((handle, i) => (
                    <div
                        key={i}
                        style={{
                            position: "absolute",
                            borderRadius: "2.225px",
                            width: "22.25px",
                            height: "22.25px",
                            ...handle.style,
                        }}
                    >
                        <div
                            style={{
                                overflow: "clip",
                                position: "relative",
                                width: "22.25px",
                                height: "22.25px",
                            }}
                        >
                            <div
                                style={{
                                    position: "absolute",
                                    inset: 0,
                                    backgroundColor: getThemedColor(
                                        "#ffffff",
                                        "#22272b",
                                        themeMode
                                    ),
                                }}
                            >
                                <div
                                    style={{
                                        position: "absolute",
                                        border: "4.45px solid",
                                        borderColor: getThemedColor(
                                            "#af59e1",
                                            "#9b8afb",
                                            themeMode
                                        ),
                                        inset: "-4.45px",
                                        pointerEvents: "none",
                                    }}
                                />
                            </div>
                        </div>
                        <div
                            style={{
                                position: "absolute",
                                border: "4.45px solid",
                                borderColor: getThemedColor("#af59e1", "#9b8afb", themeMode),
                                inset: 0,
                                pointerEvents: "none",
                                borderRadius: "2.225px",
                            }}
                        />
                    </div>
                ))}
        </motion.div>
    );
}

function ButtonLoadingSpinner({ isVisible }: { isVisible: boolean }) {
    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    style={{
                        position: "absolute",
                        inset: 0,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <motion.div
                        style={{
                            width: "40px",
                            height: "40px",
                            border: "8px solid rgba(255, 255, 255, 0.3)",
                            borderTop: "8px solid white",
                            borderRadius: "50%",
                        }}
                        animate={{ rotate: 360 }}
                        transition={{
                            duration: 1,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                    />
                </motion.div>
            )}
        </AnimatePresence>
    );
}

function WhiteModal({
    isVisible,
    buttonState,
    showLoading,
    themeMode,
}: {
    isVisible: boolean;
    buttonState: "normal" | "hover" | "pressed" | "dark-pressed";
    showLoading: boolean;
    themeMode?: string;
}) {
    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    style={{ position: "absolute", left: -2000, top: 0 }}
                    initial={{ x: 0, opacity: 1 }}
                    animate={{ x: 2000, opacity: 1 }}
                    exit={{ x: 0, opacity: 0 }}
                    transition={{
                        duration: 1.2,
                        ease: [0.25, 0.1, 0.25, 1],
                        opacity: { duration: 0.3 },
                    }}
                >
                    {/* Main white modal */}
                    <div
                        style={{
                            position: "absolute",
                            left: "-1557.24px",
                            borderRadius: "13.35px",
                            top: "-233.149px",
                            width: "1780px",
                            backgroundColor: getThemedColor("#ffffff", "#22272b", themeMode),
                        }}
                    >
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "flex-end",
                                overflow: "clip",
                                position: "relative",
                                width: "100%",
                                height: "100%",
                            }}
                        >
                            <div
                                style={{
                                    boxSizing: "border-box",
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "71.2px",
                                    alignItems: "flex-end",
                                    justifyContent: "flex-start",
                                    padding: "106.8px",
                                    position: "relative",
                                    width: "1780px",
                                }}
                            >
                                {/* Text content */}
                                <div
                                    style={{
                                        height: "712px",
                                        position: "relative",
                                        flexShrink: 0,
                                        width: "1561.95px",
                                    }}
                                >
                                    <div
                                        style={{
                                            boxSizing: "border-box",
                                            display: "flex",
                                            flexDirection: "column",
                                            gap: "106.8px",
                                            height: "712px",
                                            alignItems: "flex-start",
                                            justifyContent: "flex-start",
                                            padding: 0,
                                            position: "relative",
                                            width: "1561.95px",
                                        }}
                                    >
                                        <div
                                            style={{
                                                height: "26.7px",
                                                borderRadius: "13.35px",
                                                flexShrink: 0,
                                                width: "315.95px",
                                                backgroundColor: getThemedColor(
                                                    "#6b778c",
                                                    "#9fadbc",
                                                    themeMode
                                                ),
                                            }}
                                        />
                                        <div
                                            style={{
                                                height: "560.7px",
                                                overflow: "clip",
                                                position: "relative",
                                                flexShrink: 0,
                                                width: "1561.95px",
                                            }}
                                        >
                                            <div
                                                style={{
                                                    position: "absolute",
                                                    height: "1094.7px",
                                                    left: 0,
                                                    right: 0,
                                                    top: 0,
                                                }}
                                            >
                                                {[...Array(9).keys()].map((_, i) => (
                                                    <div
                                                        key={i}
                                                        style={{
                                                            position: "absolute",
                                                            display: "flex",
                                                            height: "26.7px",
                                                            alignItems: "center",
                                                            justifyContent: "center",
                                                            left: 0,
                                                            right: 0,
                                                            top: `${i * 133.5}px`,
                                                        }}
                                                    >
                                                        <div
                                                            style={{
                                                                borderRadius: "13.35px",
                                                                width: "100%",
                                                                height: "100%",
                                                                backgroundColor: getThemedColor(
                                                                    "#f4f5f7",
                                                                    "#1d2125",
                                                                    themeMode
                                                                ),
                                                            }}
                                                        />
                                                    </div>
                                                ))}
                                            </div>
                                            <div
                                                style={{
                                                    position: "absolute",
                                                    bottom: "-0.3px",
                                                    height: "26.7px",
                                                    left: 0,
                                                    right: 0,
                                                    backgroundColor: getThemedColor(
                                                        "#ffffff",
                                                        "#22272b",
                                                        themeMode
                                                    ),
                                                }}
                                            >
                                                <div
                                                    style={{
                                                        position: "absolute",
                                                        height: "26.7px",
                                                        left: 0,
                                                        right: "60%",
                                                        borderRadius: "13.35px",
                                                        top: "50%",
                                                        transform: "translateY(-50%)",
                                                        backgroundColor: getThemedColor(
                                                            "#f4f5f7",
                                                            "#1d2125",
                                                            themeMode
                                                        ),
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Actions */}
                                <div style={{ position: "relative", flexShrink: 0 }}>
                                    <div
                                        style={{
                                            boxSizing: "border-box",
                                            display: "flex",
                                            flexDirection: "row",
                                            gap: "35.6px",
                                            alignItems: "center",
                                            justifyContent: "flex-start",
                                            overflow: "clip",
                                            padding: 0,
                                            position: "relative",
                                        }}
                                    >
                                        <div
                                            style={{
                                                backgroundColor: "transparent",
                                                height: "142.4px",
                                                position: "relative",
                                                borderRadius: "13.35px",
                                                flexShrink: 0,
                                            }}
                                        >
                                            <div
                                                style={{
                                                    display: "flex",
                                                    flexDirection: "row",
                                                    alignItems: "center",
                                                    position: "relative",
                                                    width: "100%",
                                                    height: "100%",
                                                }}
                                            >
                                                <div
                                                    style={{
                                                        boxSizing: "border-box",
                                                        display: "flex",
                                                        flexDirection: "row",
                                                        height: "142.4px",
                                                        alignItems: "center",
                                                        justifyContent: "flex-start",
                                                        padding: "26.7px 53.4px",
                                                        position: "relative",
                                                    }}
                                                >
                                                    <div
                                                        style={{
                                                            height: "26.7px",
                                                            borderRadius: "13.35px",
                                                            flexShrink: 0,
                                                            width: "195.8px",
                                                            backgroundColor: getThemedColor(
                                                                "#f4f5f7",
                                                                "#1d2125",
                                                                themeMode
                                                            ),
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <motion.div
                                            style={{
                                                height: "142.4px",
                                                position: "relative",
                                                borderRadius: "13.35px",
                                                flexShrink: 0,
                                                width: "271.45px",
                                            }}
                                            animate={{
                                                backgroundColor: showLoading
                                                    ? getThemedColor(
                                                          "#0052cc",
                                                          "#4c9aff",
                                                          themeMode
                                                      )
                                                    : buttonState === "dark-pressed"
                                                      ? getThemedColor(
                                                            "#0052cc",
                                                            "#4c9aff",
                                                            themeMode
                                                        )
                                                      : buttonState === "pressed"
                                                        ? getThemedColor(
                                                              "#0052cc",
                                                              "#4c9aff",
                                                              themeMode
                                                          )
                                                        : buttonState === "hover"
                                                          ? getThemedColor(
                                                                "#0052cc",
                                                                "#4c9aff",
                                                                themeMode
                                                            )
                                                          : getThemedColor(
                                                                "#f4f5f7",
                                                                "#1d2125",
                                                                themeMode
                                                            ),
                                            }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <div
                                                style={{
                                                    position: "absolute",
                                                    height: "26.7px",
                                                    borderRadius: "13.35px",
                                                    transform: "translate(-50%, -50%)",
                                                    width: "195.8px",
                                                    top: "calc(50% - 0.199607px)",
                                                    left: "calc(50% - 4.17265px)",
                                                    backgroundColor: "rgba(9,30,66,0.13)",
                                                }}
                                            />
                                        </motion.div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            style={{
                                position: "absolute",
                                border: "8.9px solid",
                                borderColor: getThemedColor("#dfe1e6", "#3c4c5c", themeMode),
                                inset: 0,
                                pointerEvents: "none",
                                borderRadius: "13.35px",
                            }}
                        />
                    </div>

                    {/* Blue button that slides in */}
                    <motion.div
                        style={{
                            position: "absolute",
                            height: "84.55px",
                            left: "-177.74px",
                            borderRadius: "13.35px",
                            top: "105.051px",
                            width: "356px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            overflow: "hidden",
                        }}
                        animate={{
                            backgroundColor: showLoading
                                ? getThemedColor("#0052cc", "#4c9aff", themeMode)
                                : buttonState === "dark-pressed"
                                  ? getThemedColor("#0052cc", "#4c9aff", themeMode)
                                  : buttonState === "pressed"
                                    ? getThemedColor("#0747a6", "#2c3e5d", themeMode)
                                    : buttonState === "hover"
                                      ? getThemedColor("#0052cc", "#4c9aff", themeMode)
                                      : getThemedColor("#0052cc", "#4c9aff", themeMode),
                        }}
                        transition={{ duration: 0.2 }}
                    >
                        {!showLoading && (
                            <div
                                style={{
                                    position: "absolute",
                                    height: "26.7px",
                                    borderRadius: "13.35px",
                                    transform: "translate(-50%, -50%)",
                                    width: "195.8px",
                                    top: "calc(50% - 0.273631px)",
                                    left: "calc(50% - 4.45157px)",
                                    backgroundColor: "rgba(9,30,66,0.13)",
                                }}
                            />
                        )}

                        <ButtonLoadingSpinner isVisible={showLoading} />
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

export default function ModalInteraction({ isDarkMode }: { isDarkMode?: boolean }) {
    const themeMode = isDarkMode ? "dark" : "light";
    const [animationState, setAnimationState] = useState(0);
    const [cursorPosition, setCursorPosition] = useState({ x: 94.16, y: 31.18 });
    const [selectionPhase, setSelectionPhase] = useState<
        "hidden" | "resizing" | "blue-snap" | "purple-snap" | "purple-moved"
    >("hidden");
    const [modalShouldMove, setModalShouldMove] = useState(false);
    const [whiteModalVisible, setWhiteModalVisible] = useState(false);
    const [buttonState, setButtonState] = useState<"normal" | "hover" | "pressed" | "dark-pressed">(
        "normal"
    );
    const [showLoading, setShowLoading] = useState(false);
    const [globalOpacity, setGlobalOpacity] = useState(1);

    const PURPLE_RECT_DIMENSIONS = {
        width: 251,
        height: 95, // Same as flag height - border is drawn outside the content area
    };

    const purpleRect = {
        initial: {
            left: 107,
            top: 59,
            width: PURPLE_RECT_DIMENSIONS.width,
            height: PURPLE_RECT_DIMENSIONS.height,
        },
        moved: {
            left: 329.789,
            top: 29,
            width: PURPLE_RECT_DIMENSIONS.width,
            height: PURPLE_RECT_DIMENSIONS.height,
        },
    };

    const endCursorPosition = { x: 378, y: 170 };

    useEffect(() => {
        const sequence = async () => {
            // Initial state - cursor at blue rectangle corner
            await new Promise((resolve) => setTimeout(resolve, 1000));

            // Phase 1: Start resizing - show selection and begin resizing simultaneously
            setSelectionPhase("resizing");
            setCursorPosition(endCursorPosition);
            await new Promise((resolve) => setTimeout(resolve, 1200));

            // Phase 2: Snap to blue
            setSelectionPhase("blue-snap");
            await new Promise((resolve) => setTimeout(resolve, 300));

            // Phase 3: INSTANT snap to purple
            setSelectionPhase("purple-snap");
            await new Promise((resolve) => setTimeout(resolve, 800));

            // Phase 4: Move everything together
            setSelectionPhase("purple-moved");
            setModalShouldMove(true);
            setWhiteModalVisible(true);
            await new Promise((resolve) => setTimeout(resolve, 1200));

            // Move cursor to blue button
            setCursorPosition({ x: 105.79, y: 147 });
            await new Promise((resolve) => setTimeout(resolve, 800));

            // Button interactions
            setButtonState("hover");
            await new Promise((resolve) => setTimeout(resolve, 400));

            setButtonState("pressed");
            await new Promise((resolve) => setTimeout(resolve, 200));

            setShowLoading(true);
            await new Promise((resolve) => setTimeout(resolve, 1500));

            // Fade out and reset
            setGlobalOpacity(0);
            await new Promise((resolve) => setTimeout(resolve, 800));

            // Reset everything
            setButtonState("normal");
            setShowLoading(false);
            setWhiteModalVisible(false);
            setSelectionPhase("hidden");
            setModalShouldMove(false);
            setCursorPosition({ x: 94.16, y: 31.18 });

            setGlobalOpacity(1);
            await new Promise((resolve) => setTimeout(resolve, 800));

            // Restart
            setAnimationState((prev) => prev + 1);
        };

        sequence();
    }, [animationState]);

    return (
        <motion.div
            style={{
                position: "relative",
                overflow: "hidden",
                width: "468px",
                height: "220px",
                backgroundColor: getThemedColor("#f4f5f7", "#1d2125", themeMode),
            }}
            animate={{ opacity: globalOpacity }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
        >
            <Flag shouldMove={modalShouldMove} themeMode={themeMode} />
            <SelectionFrame
                phase={selectionPhase}
                cursorPosition={cursorPosition}
                purpleRect={purpleRect}
                themeMode={themeMode}
            />
            <WhiteModal
                isVisible={whiteModalVisible}
                buttonState={buttonState}
                showLoading={showLoading}
                themeMode={themeMode}
            />
            <Cursor x={cursorPosition.x} y={cursorPosition.y} />
        </motion.div>
    );
}
