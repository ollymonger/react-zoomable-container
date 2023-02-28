
/**
 * ControlOverridesType is a type that defines the properties that can be passed into the controlOverrides prop of the ZoomableContainer component.
 * 
 * @typedef {Object} ControlOverridesType
 */
export type ControlOverridesType = {
    /**
     * The default scale factor for zooming.
     * @type {number}
     * default: 0.8
     * */
    scale?: number;
    /**
     * The default x and y positions for panning.
     * @type {{x: number, y: number}}
     * default: { x: 0, y: 0 }
     * */
    position?: {
      x: number;
      y: number;
    },
    /**
     * The default value in MS passed into the onMouseDown handler for the lerpTime parameter
     * @type {number}
     * default: 300
     * */
    lerpTime?: number,
    /**
     * The default value passed into the onMouseDown handler for the scale parameter
     * @type {number}
     * default: 0.2
     * */
    scaleStep?: number,
    /**
     * The default value passed into the onMouseDown handler for the minScale parameter
     * @type {number}
     * default: 0.2
     * */
    minScale?: number,
    /**
     * The default value passed into the onMouseDown handler for the maxScale parameter
     * @type {number}
     * default: 1.8
     * */
    maxScale?: number,
    /**
     * Disables the zoom functionality
     * @type {boolean}
     * default: false
     * */
    disableZoom?: boolean,
    /**
     * Disables the pan functionality
     * @type {boolean}
     * default: false
     * */
    disablePan?: boolean
}
