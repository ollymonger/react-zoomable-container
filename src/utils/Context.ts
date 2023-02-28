import { createContext, useContext } from "react";
import { DEFAULT_LERP_TIME, DEFAULT_MAX_SCALE, DEFAULT_MIN_SCALE, DEFAULT_POSITION, DEFAULT_SCALE, DEFAULT_SCALE_STEP } from "./defaults";
import { ControlOverridesType } from "./types";

/**
 * An object describing the values available in the `WrapperContext`.
 * 
 * - `handleReset`: A function that resets the zoom and pan values to their defaults.
 * - `info`: An object containing the current zoom and pan values.
 *   - `scale`: The current scale factor for zooming.
 *   - `position`: The current x and y positions for panning.
 *   - `controlOverrides`: An object containing the values that will be used to override the default values for the `ZoomableContainer` component.
 */
type WrapperContextType = {
  /**
  * A function that resets the zoom and pan values to their defaults.
  */
  handleReset: () => void;
  /**
   * A function that zooms in.
   */
  zoomIn: () => void;
  /**
   * A function that zooms out.
   */
  zoomOut: () => void;
  /**
  * An object containing the current zoom and pan values.
  */
  info: {
    scale: number;
    position: { x: number; y: number };
  },

  controlOverrides?: ControlOverridesType
}


const ZoomableContainerContext = createContext<WrapperContextType>({ 
  handleReset: () => {}, 
  zoomIn: () => {}, 
  zoomOut: () => {}, 
  info: { 
    scale: 0, 
    position: { x: 0, y: 0 } 
  }, 
  controlOverrides: { 
    scale: DEFAULT_SCALE, 
    position: { 
      x: DEFAULT_POSITION.x, 
      y: DEFAULT_POSITION.y 
    }, 
    lerpTime: DEFAULT_LERP_TIME, 
    scaleStep: DEFAULT_SCALE_STEP,
    minScale: DEFAULT_MIN_SCALE,
    maxScale: DEFAULT_MAX_SCALE
  }   
});

/**
 * A hook that provides access to the current `ZoomableContainerContext` values.
 * 
 * @returns An object containing the current `handleReset` function and `info` object.
 * The `handleReset` function can be called to reset the zoom and pan values to their defaults,
 * and the `info` object contains the current zoom and pan values.
 */
const useZoomableContext = () => useContext(ZoomableContainerContext);

export { ZoomableContainerContext, useZoomableContext };
