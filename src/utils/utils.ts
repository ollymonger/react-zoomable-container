import { DEFAULT_LERP_TIME, DEFAULT_MAX_SCALE, DEFAULT_MIN_SCALE, DEFAULT_SCALE_STEP } from "./defaults";


/**
 * A function that handles the mouse wheel event.
 * 
 * @param event The mouse wheel event.
 * @param setScale A function that sets the scale value.
 * @param scale The current scale value.
 * @param controlOverrides An object containing the control overrides.
 * @returns void
 * */
const onWheel = ({ event, setScale, scale, controlOverrides } : { event: React.WheelEvent<HTMLDivElement>, setScale: (scale: number) => void, scale: number, controlOverrides?: ControlOverridesType }) => {
  const targetScale = scale - (event.deltaY * 0.01 * (controlOverrides && controlOverrides.scaleStep ? controlOverrides.scaleStep : DEFAULT_SCALE_STEP));
  const duration = controlOverrides && controlOverrides.lerpTime ? controlOverrides.lerpTime : DEFAULT_LERP_TIME; // Duration of the animation in milliseconds
  const startTime = performance.now(); // Time when the animation starts

  const animateScroll = (currentTime: number) => {
    const elapsedTime = currentTime - startTime; // Time elapsed since the animation started
    const progress = Math.min(elapsedTime / duration, 1); // Progress of the animation (0 to 1)

    const currentScale = Math.max(controlOverrides && controlOverrides.minScale ? controlOverrides.minScale : DEFAULT_MIN_SCALE, Math.min(controlOverrides && controlOverrides.maxScale ? controlOverrides.maxScale : DEFAULT_MAX_SCALE, scale + ((targetScale - scale) * progress))); // Calculate the current scale based on the progress

    setScale(currentScale);

    if (progress < 1) {
      // If the animation is not finished, request another animation frame
      requestAnimationFrame(animateScroll);
    }
  };

  requestAnimationFrame(animateScroll);
};

/**
 * A function that handles the mouse down event; used for panning.
 * 
 * @param event The mouse down event.
 * @param setPosition A function that sets the position value.
 * @param position The current position value.
 * @param lerpTime The lerp time value.
 * @returns void
 * */
const onMouseDown = ({ event, setPosition, position, lerpTime } : { event: React.MouseEvent<HTMLDivElement>, setPosition: ({x, y}: { x: number, y: number }) => void, position: { x: number, y: number }, lerpTime: number }) => {
  const startX = event.pageX - position.x;
  const startY = event.pageY - position.y;

  const startTime = performance.now(); // Time when the animation starts

  const handleMouseMove = (event: MouseEvent) => {
    const currentTime = performance.now();
    const elapsedTime = currentTime - startTime;
    const progress = Math.min(elapsedTime / lerpTime, 1);

    const x = lerp(position.x, event.pageX - startX, progress);
    const y = lerp(position.y, event.pageY - startY, progress);
    setPosition({ x, y });
  };

  const handleMouseUp = () => {
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
  };

  document.addEventListener('mousemove', handleMouseMove);
  document.addEventListener('mouseup', handleMouseUp);
};

/**
 * A function that handles the touch start event; used for panning on mobile devices.
 * 
 * @param event The touch start event.
 * @param setPosition A function that sets the position value.
 * @param position The current position value.
 * @returns void
 * */
const onTouchStart = ({ event, setPosition, position} : { event: React.TouchEvent<HTMLDivElement>, setPosition: ({x, y}: { x: number, y: number }) => void, position: { x: number, y: number } })  => {
  const startX = event.touches[0].pageX - position.x;
  const startY = event.touches[0].pageY - position.y;

  const handleTouchMove = (event: TouchEvent) => {
    const x = event.touches[0].pageX - startX;
    const y = event.touches[0].pageY - startY;
    setPosition({ x, y });
  };

  const handleTouchEnd = () => {
    document.removeEventListener('touchmove', handleTouchMove);
    document.removeEventListener('touchend', handleTouchEnd);
  };

  document.addEventListener('touchmove', handleTouchMove);
  document.addEventListener('touchend', handleTouchEnd);
};


/**
 * A function that linearly interpolates between two numbers.
 *  
 * @param start The start value.
 * @param end The end value.
 * @param t The interpolation value.
 * @returns The interpolated value.
 * */
const lerp = (start: number, end: number, t: number) => {
  return start * (1 - t) + end * t;
};

export { onWheel, onMouseDown, onTouchStart };
