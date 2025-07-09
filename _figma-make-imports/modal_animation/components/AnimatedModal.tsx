import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import svgPaths from "../imports/svg-am77wxwh5r";
import flagSvgPaths from "../imports/svg-2p5uoz3529";

interface CursorProps {
  x: number;
  y: number;
}

function Cursor({ x, y }: CursorProps) {
  return (
    <motion.div
      className="absolute pointer-events-none z-50"
      animate={{ x, y }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      style={{ left: 0, top: 0 }}
    >
      <div className="relative size-[61.212px]">
        <div className="absolute inset-[-14.54%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 80 80"
          >
            <g>
              <path
                d={svgPaths.p39e7f640}
                fill="#292A2E"
                style={{
                  filter: "drop-shadow(0px 0px 8.9px rgba(0, 0, 0, 0.25))"
                }}
              />
              <path
                clipRule="evenodd"
                d={svgPaths.p94cd900}
                fill="white"
                fillRule="evenodd"
              />
            </g>
          </svg>
        </div>
      </div>
    </motion.div>
  );
}

function Icon1() {
  return (
    <div
      className="rounded-[3.1273px] shrink-0 size-[33.358px]"
      style={{ backgroundColor: 'var(--color-bg-success-bold)' }}
    />
  );
}

function Text() {
  return (
    <div
      className="h-[6.255px] rounded-[3.1273px] shrink-0 w-[101.116px]"
      style={{ backgroundColor: 'var(--color-bg-neutral)' }}
    />
  );
}

function Text1() {
  return (
    <div
      className="h-[6.255px] rounded-[3.1273px] shrink-0 w-full"
      style={{ backgroundColor: 'var(--color-text-subtle)' }}
    />
  );
}

function Header() {
  return (
    <div className="relative shrink-0 w-[156.365px]">
      <div className="box-border content-stretch flex flex-col gap-[12.509px] items-start justify-start p-0 relative w-[156.365px]">
        <Text />
        <Text1 />
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div
      className="h-[6.255px] rounded-[3.1273px] shrink-0 w-[58.376px]"
      style={{ backgroundColor: 'var(--color-bg-brand-bold)' }}
    />
  );
}

function Actions() {
  return (
    <div className="h-[25.018px] relative shrink-0">
      <div className="box-border content-stretch flex flex-row gap-[8.339px] h-[25.018px] items-end justify-start overflow-clip p-0 relative">
        {[...Array(2).keys()].map((_, i) => (
          <Text2 key={i} />
        ))}
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="relative shrink-0 w-[308.561px]">
      <div className="box-border content-stretch flex flex-col gap-[4.17px] items-start justify-start overflow-clip p-0 relative w-[308.561px]">
        <Header />
        <Actions />
      </div>
    </div>
  );
}

function Cross() {
  return (
    <div className="absolute left-0 size-[16.679px] top-[4.17px]">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 17 17"
      >
        <g id="Cross">
          <rect fill="white" height="16.679" width="16.679" />
          <path
            d={flagSvgPaths.p10347800}
            fill="var(--color-icon-subtle)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function CloseButton() {
  return (
    <div className="h-[25.018px] relative shrink-0 w-[16.679px]">
      <Cross />
    </div>
  );
}

function Flag({ shouldMove }: { shouldMove: boolean }) {
  return (
    <motion.div
      className="absolute rounded-[10.4243px] w-[252.269px]"
      style={{ backgroundColor: 'var(--color-surface)' }}
      animate={{
        left: shouldMove ? 329.789 : 106.789,
        top: shouldMove ? 29 : 59,
      }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-row gap-[16.679px] items-start justify-start overflow-clip px-[16.679px] py-[20.849px] relative size-full">
          <Icon1 />
          <Content />
          <CloseButton />
        </div>
      </div>
      <div 
        className="absolute border-[2.08487px] border-solid inset-0 pointer-events-none rounded-[10.4243px]" 
        style={{ borderColor: 'var(--color-border)' }}
      />
    </motion.div>
  );
}

function SelectionFrame({ 
  phase,
  cursorPosition,
  purpleRect
}: { 
  phase: 'hidden' | 'resizing' | 'blue-snap' | 'purple-snap' | 'purple-moved';
  cursorPosition: { x: number; y: number };
  purpleRect: { 
    initial: { left: number; top: number; width: number; height: number };
    moved: { left: number; top: number; width: number; height: number };
  };
}) {
  if (phase === 'hidden') return null;

  const startX = 94.16;
  const startY = 31.18;
  
  // Blue selection position (matches Rec-13-980 dimensions)
  const blueSnapPosition = {
    left: 93.789,
    top: 31,
    width: 284,
    height: 139
  };

  // Determine current position, styling and duration based on phase
  let animateProps;
  let borderColor;
  let backgroundColor;
  let duration;
  
  switch (phase) {
    case 'resizing':
      animateProps = {
        opacity: 1,
        left: startX,
        top: startY,
        width: Math.max(8.9, cursorPosition.x - startX),
        height: Math.max(8.9, cursorPosition.y - startY)
      };
      borderColor = 'var(--color-border-brand)';
      backgroundColor = 'rgba(56, 139, 255, 0.15)';
      duration = 1.2;
      break;
    case 'blue-snap':
      animateProps = {
        opacity: 1,
        left: blueSnapPosition.left,
        top: blueSnapPosition.top,
        width: blueSnapPosition.width,
        height: blueSnapPosition.height
      };
      borderColor = 'var(--color-border-brand)';
      backgroundColor = 'rgba(56, 139, 255, 0.15)';
      duration = 0.6;
      break;
    case 'purple-snap':
      animateProps = {
        opacity: 1,
        left: purpleRect.initial.left,
        top: purpleRect.initial.top,
        width: purpleRect.initial.width,
        height: purpleRect.initial.height
      };
      borderColor = '#AF59E1';
      backgroundColor = 'transparent';
      duration = 0; // Instant
      break;
    case 'purple-moved':
      animateProps = {
        opacity: 1,
        left: purpleRect.moved.left,
        top: purpleRect.moved.top,
        width: purpleRect.moved.width,
        height: purpleRect.moved.height
      };
      borderColor = '#AF59E1';
      backgroundColor = 'transparent';
      duration = 0.6;
      break;
    default:
      return null;
  }

  const showHandles = phase === 'purple-snap' || phase === 'purple-moved';

  return (
    <motion.div
      className="absolute pointer-events-none"
      style={{
        backgroundColor,
        border: `4.45px solid ${borderColor}`
      }}
      initial={{ 
        opacity: 0, 
        left: startX,
        top: startY,
        width: 8.9,
        height: 8.9
      }}
      animate={animateProps}
      transition={{ 
        duration,
        ease: phase === 'resizing' ? "easeOut" : "easeInOut"
      }}
    >
      {/* Selection handles - only show for purple phases */}
      {showHandles && [
        { position: "top-left", style: { left: -8.902, top: -8.9 } },
        { position: "top-right", style: { right: -8.901, top: -8.9 } },
        { position: "bottom-left", style: { left: -8.902, bottom: -7.119 } },
        { position: "bottom-right", style: { right: -8.901, bottom: -7.119 } }
      ].map((handle, i) => (
        <div
          key={i}
          className="absolute rounded-[2.225px] size-[22.25px]"
          style={handle.style}
        >
          <div className="overflow-clip relative size-[22.25px]">
            <div 
              className="absolute inset-0"
              style={{ backgroundColor: 'var(--color-surface)' }}
            >
              <div 
                className="absolute border-[4.45px] border-solid inset-[-4.45px] pointer-events-none" 
                style={{ borderColor: '#AF59E1' }}
              />
            </div>
          </div>
          <div 
            className="absolute border-[4.45px] border-solid inset-0 pointer-events-none rounded-[2.225px]" 
            style={{ borderColor: '#AF59E1' }}
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
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="size-10 border-8 border-white/30 border-t-white rounded-full"
            animate={{ rotate: 360 }}
            transition={{ 
              duration: 1, 
              repeat: Infinity, 
              ease: "linear" 
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function WhiteModal({ isVisible, buttonState, showLoading }: { 
  isVisible: boolean; 
  buttonState: 'normal' | 'hover' | 'pressed' | 'dark-pressed';
  showLoading: boolean;
}) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="absolute"
          style={{ left: -2000, top: 0 }}
          initial={{ x: 0, opacity: 1 }}
          animate={{ x: 2000, opacity: 1 }}
          exit={{ x: 0, opacity: 0 }}
          transition={{ 
            duration: 1.2, 
            ease: [0.25, 0.1, 0.25, 1],
            opacity: { duration: 0.3 }
          }}
        >
          {/* Main white modal */}
          <div 
            className="absolute left-[-1557.24px] rounded-[13.35px] top-[-233.149px] w-[1780px]"
            style={{ backgroundColor: 'var(--color-surface)' }}
          >
            <div className="flex flex-col items-end overflow-clip relative size-full">
              <div className="box-border content-stretch flex flex-col gap-[71.2px] items-end justify-start p-[106.8px] relative w-[1780px]">
                {/* Text content */}
                <div className="h-[712px] relative shrink-0 w-[1561.95px]">
                  <div className="box-border content-stretch flex flex-col gap-[106.8px] h-[712px] items-start justify-start p-0 relative w-[1561.95px]">
                    <div 
                      className="h-[26.7px] rounded-[13.35px] shrink-0 w-[315.95px]" 
                      style={{ backgroundColor: 'var(--color-text-subtle)' }}
                    />
                    <div className="h-[560.7px] overflow-clip relative shrink-0 w-[1561.95px]">
                      <div className="absolute h-[1094.7px] left-0 right-0 top-0">
                        {[...Array(9).keys()].map((_, i) => (
                          <div
                            key={i}
                            className="absolute flex h-[26.7px] items-center justify-center left-0 right-0"
                            style={{ top: `${i * 133.5}px` }}
                          >
                            <div 
                              className="rounded-[13.35px] size-full" 
                              style={{ backgroundColor: 'var(--color-bg-neutral-subtle)' }}
                            />
                          </div>
                        ))}
                      </div>
                      <div 
                        className="absolute bottom-[-0.3px] h-[26.7px] left-0 right-0"
                        style={{ backgroundColor: 'var(--color-surface)' }}
                      >
                        <div 
                          className="absolute h-[26.7px] left-0 right-[60%] rounded-[13.35px] top-1/2 translate-y-[-50%]" 
                          style={{ backgroundColor: 'var(--color-bg-neutral-subtle)' }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Actions */}
                <div className="relative shrink-0">
                  <div className="box-border content-stretch flex flex-row gap-[35.6px] items-center justify-start overflow-clip p-0 relative">
                    <div className="bg-transparent h-[142.4px] relative rounded-[13.35px] shrink-0">
                      <div className="flex flex-row items-center relative size-full">
                        <div className="box-border content-stretch flex flex-row h-[142.4px] items-center justify-start px-[53.4px] py-[26.7px] relative">
                          <div 
                            className="h-[26.7px] rounded-[13.35px] shrink-0 w-[195.8px]" 
                            style={{ backgroundColor: 'var(--color-bg-neutral-subtle)' }}
                          />
                        </div>
                      </div>
                    </div>
                    <motion.div
                      className="h-[142.4px] relative rounded-[13.35px] shrink-0 w-[271.45px]"
                      animate={{
                        backgroundColor: showLoading
                          ? 'var(--color-bg-brand-bold)' // Return to original blue during loading
                          : buttonState === 'dark-pressed'
                          ? 'var(--color-bg-brand-bold-pressed)'
                          : buttonState === 'pressed' 
                          ? 'var(--color-bg-brand-bold-hovered)'
                          : buttonState === 'hover'
                          ? 'var(--color-bg-brand-bold)'
                          : 'var(--color-bg-brand-subtlest)'
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      <div
                        className="absolute h-[26.7px] rounded-[13.35px] translate-x-[-50%] translate-y-[-50%] w-[195.8px]"
                        style={{ 
                          top: "calc(50% - 0.199607px)", 
                          left: "calc(50% - 4.17265px)",
                          backgroundColor: 'rgba(9,30,66,0.13)'
                        }}
                      />
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
            <div 
              className="absolute border-[8.9px] border-solid inset-0 pointer-events-none rounded-[13.35px]" 
              style={{ borderColor: 'var(--color-border)' }}
            />
          </div>
          
          {/* Blue button that slides in */}
          <motion.div
            className="absolute h-[84.55px] left-[-177.74px] rounded-[13.35px] top-[105.051px] w-[356px] flex items-center justify-center overflow-hidden"
            animate={{
              backgroundColor: showLoading
                ? 'var(--color-bg-brand-bold)' // Return to original blue during loading
                : buttonState === 'dark-pressed'
                ? 'var(--color-bg-brand-bold-pressed)'
                : buttonState === 'pressed' 
                ? 'var(--color-bg-brand-bold-hovered)'
                : buttonState === 'hover'
                ? 'var(--color-bg-brand-bold)'
                : 'var(--color-bg-brand-bold)'
            }}
            transition={{ duration: 0.2 }}
          >
            {!showLoading && (
              <div
                className="absolute h-[26.7px] rounded-[13.35px] translate-x-[-50%] translate-y-[-50%] w-[195.8px]"
                style={{ 
                  top: "calc(50% - 0.273631px)", 
                  left: "calc(50% - 4.45157px)",
                  backgroundColor: 'rgba(9,30,66,0.13)'
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

export default function AnimatedModal() {
  const [animationState, setAnimationState] = useState(0);
  const [cursorPosition, setCursorPosition] = useState({ x: 98.61, y: 35.63 });
  const [selectionPhase, setSelectionPhase] = useState<'hidden' | 'resizing' | 'blue-snap' | 'purple-snap' | 'purple-moved'>('hidden');
  const [modalShouldMove, setModalShouldMove] = useState(false);
  const [whiteModalVisible, setWhiteModalVisible] = useState(false);
  const [buttonState, setButtonState] = useState<'normal' | 'hover' | 'pressed' | 'dark-pressed'>('normal');
  const [showLoading, setShowLoading] = useState(false);
  const [globalOpacity, setGlobalOpacity] = useState(1);

  // FIXED: Purple rectangle dimensions - calculated once to exactly match Flag's rendered size
  // Flag dimensions: 252.269px width (set by w-[252.269px])
  // Flag height calculation:
  // - Top padding: 20.849px (py-[20.849px])
  // - Icon1: 33.358px (size-[33.358px])  
  // - Content height: 
  //   - Header: Text (6.255px) + gap (12.509px) + Text1 (6.255px) = 24.019px
  //   - Gap: 4.17px
  //   - Actions: 25.018px
  //   - Total content: 33.358 + 24.019 + 4.17 + 25.018 = 86.565px
  // - Bottom padding: 20.849px
  // - Total height: 20.849 + 86.565 + 20.849 = 128.263px
  // Note: borders are visual only and don't affect the purple rectangle size
  
  const PURPLE_RECT_DIMENSIONS = {
    width: 252.269, // Exact Flag width
    height: 100.05   // Empirically measured to match Flag's actual rendered height
  };

  const purpleRect = {
    initial: {
      left: 106.789, // Flag initial position
      top: 59,        // Flag initial position
      width: PURPLE_RECT_DIMENSIONS.width,
      height: PURPLE_RECT_DIMENSIONS.height
    },
    moved: {
      left: 329.789, // Flag moved position  
      top: 29,        // Flag moved position
      width: PURPLE_RECT_DIMENSIONS.width,  // IDENTICAL to initial
      height: PURPLE_RECT_DIMENSIONS.height // IDENTICAL to initial
    }
  };

  const endCursorPosition = { x: 378, y: 170 };

  useEffect(() => {
    const sequence = async () => {
      // Initial state - cursor hovering
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Phase 1: Start resizing - show selection and begin resizing simultaneously
      setSelectionPhase('resizing');
      setCursorPosition(endCursorPosition);
      await new Promise(resolve => setTimeout(resolve, 1200));
      
      // Phase 2: Snap to blue
      setSelectionPhase('blue-snap');
      await new Promise(resolve => setTimeout(resolve, 300));
      
      // Phase 3: INSTANT snap to purple
      setSelectionPhase('purple-snap');
      await new Promise(resolve => setTimeout(resolve, 800));
      
      // Phase 4: Move everything together
      setSelectionPhase('purple-moved');
      setModalShouldMove(true);
      setWhiteModalVisible(true);
      await new Promise(resolve => setTimeout(resolve, 1200));
      
      // Move cursor to blue button
      setCursorPosition({ x: 105.79, y: 147 });
      await new Promise(resolve => setTimeout(resolve, 800));
      
      // Button interactions
      setButtonState('hover');
      await new Promise(resolve => setTimeout(resolve, 400));
      
      setButtonState('pressed');
      await new Promise(resolve => setTimeout(resolve, 100));
      
      setButtonState('dark-pressed');
      await new Promise(resolve => setTimeout(resolve, 300));
      
      setShowLoading(true);
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Fade out and reset
      setGlobalOpacity(0);
      await new Promise(resolve => setTimeout(resolve, 800));
      
      // Reset everything
      setButtonState('normal');
      setShowLoading(false);
      setWhiteModalVisible(false);
      setSelectionPhase('hidden');
      setModalShouldMove(false);
      setCursorPosition({ x: 98.61, y: 35.63 });
      
      setGlobalOpacity(1);
      await new Promise(resolve => setTimeout(resolve, 800));
      
      // Restart
      setAnimationState(prev => prev + 1);
    };

    sequence();
  }, [animationState]);

  return (
    <motion.div 
      className="relative w-[468px] h-[220px] overflow-hidden"
      style={{
        backgroundColor: 'var(--color-surface-sunken)'
      }}
      animate={{ opacity: globalOpacity }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <Flag shouldMove={modalShouldMove} />
      <SelectionFrame 
        phase={selectionPhase}
        cursorPosition={cursorPosition}
        purpleRect={purpleRect}
      />
      <WhiteModal 
        isVisible={whiteModalVisible} 
        buttonState={buttonState} 
        showLoading={showLoading}
      />
      <Cursor 
        x={cursorPosition.x} 
        y={cursorPosition.y} 
      />
    </motion.div>
  );
}