# Modal Interaction Animation

A complex animation sequence demonstrating modal interaction patterns with cursor movement, selection frames, and button states.

## Animation Sequence

1. **Cursor Movement** - Cursor appears and moves to the interaction area
2. **Selection Frame** - Blue selection frame grows and snaps to elements
3. **Purple Selection** - Purple selection frame appears with resize handles
4. **Modal Movement** - Flag/modal element moves to new position
5. **Modal Slide-in** - Large white modal slides in from the left
6. **Button Interaction** - Cursor moves to button and demonstrates hover/press states
7. **Loading State** - Button shows loading spinner
8. **Reset** - Animation fades out and restarts

## File Structure

- `modal-interaction.tsx` - Main React component with Framer Motion animations
- `svg-paths.ts` - SVG path data for cursor and close icon
- `README.md` - This documentation file

## Key Features

### ADS Design Token Integration

- Uses CSS variables for all colors and backgrounds
- Automatically adapts to light/dark mode
- Follows ADS design system guidelines

### Animation Components

- **Cursor**: Animated cursor with shadow and arrow
- **SelectionFrame**: Dynamic selection rectangle with different states
- **Flag**: Modal element that moves between positions
- **WhiteModal**: Large modal that slides in with content
- **ButtonLoadingSpinner**: Loading animation for button states

### State Management

- Complex state management for animation phases
- Smooth transitions between different states
- Automatic restart functionality

## Usage

This animation is imported and displayed on the pictorial instructions page:

```tsx
import ModalInteraction from "../../animations/pictorial-instructions/modal-interaction/modal-interaction";

<AnimationWrapper label="Modal Interaction" description="Complex modal interaction sequence">
    <ModalInteraction />
</AnimationWrapper>;
```

## Technical Details

### Animation Phases

- `hidden` - No selection frame visible
- `resizing` - Selection frame grows with cursor
- `blue-snap` - Selection snaps to blue rectangle
- `purple-snap` - Selection snaps to purple rectangle
- `purple-moved` - Purple rectangle moves to new position

### Button States

- `normal` - Default button state
- `hover` - Button hover state
- `pressed` - Button pressed state
- `dark-pressed` - Button dark pressed state

### Timing

- Total animation duration: ~8 seconds
- Automatic restart with fade transition
- Smooth easing curves for natural movement

## Customization

To customize this animation:

1. Modify timing in the `useEffect` sequence
2. Adjust colors using ADS design tokens
3. Change animation easing curves
4. Add new interaction phases
5. Modify SVG paths for different cursors/icons
