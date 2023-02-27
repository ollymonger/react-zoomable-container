/**
 * Default value passed into the onMouseDown handler for the lerpTime parameter
 * @type {number}
 * default: 300
 */
declare const DEFAULT_LERP_TIME: number;
/**
 * Default value passed into the onMouseDown handler for the scale parameter
 * @type {number}
 * default: 0.8
 **/
declare const DEFAULT_SCALE: number;
/**
 * Default value passed into the onMouseDown handler for the position parameter
 * @type {{x: number, y: number}}
 * default: { x: 0, y: 0 }
 * */
declare const DEFAULT_POSITION: {
    x: number;
    y: number;
};
/**
 * Default value for the scale step
 * @type {number}
 * default: 0.2
 * */
declare const DEFAULT_SCALE_STEP: number;
export { DEFAULT_LERP_TIME, DEFAULT_SCALE, DEFAULT_POSITION, DEFAULT_SCALE_STEP };
