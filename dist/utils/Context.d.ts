/// <reference types="react" />
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
        position: {
            x: number;
            y: number;
        };
    };
    controlOverrides?: ControlOverridesType;
    /**
     * Provides the ability to lock the pan and zoom controls.
     * */
    controls: {
        pan: {
            locked: boolean;
            setLocked: (boolean: boolean) => void;
        };
        zoom: {
            locked: boolean;
            setLocked: (boolean: boolean) => void;
        };
    };
};
declare const ZoomableContainerContext: import("react").Context<WrapperContextType>;
/**
 * A hook that provides access to the current `ZoomableContainerContext` values.
 *
 * @returns An object containing the current `handleReset` function and `info` object.
 * The `handleReset` function can be called to reset the zoom and pan values to their defaults,
 * and the `info` object contains the current zoom and pan values.
 */
declare const useZoomableContext: () => WrapperContextType;
export { ZoomableContainerContext, useZoomableContext };
