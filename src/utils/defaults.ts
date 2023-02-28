/**
 * Default value passed into the onMouseDown handler for the lerpTime parameter
 * @type {number}
 * default: 300
 */
const DEFAULT_LERP_TIME: number = 300;

/**
 * Default value passed into the onMouseDown handler for the scale parameter
 * @type {number}
 * default: 0.8
 **/
const DEFAULT_SCALE: number = 0.8;

/**
 * Default value passed into the onMouseDown handler for the position parameter
 * @type {{x: number, y: number}}
 * default: { x: 0, y: 0 }
 * */
const DEFAULT_POSITION: { x: number, y: number } = { x: 0, y: 0 };

/**
 * Default value for the scale step
 * @type {number}
 * default: 0.2
 * */
const DEFAULT_SCALE_STEP: number = 0.2;

/**
 * Default value passed into the onMouseDown handler for the minScale parameter
 * @type {number}
 * default: 0.2
 */
const DEFAULT_MIN_SCALE: number = 0.2;

/**
 * Default value passed into the onMouseDown handler for the maxScale parameter
 * @type {number}
 * default: 1.8
 * */
const DEFAULT_MAX_SCALE: number = 1.8;

const DEFAULT_LOCK_STATE: boolean = false;

export {
  DEFAULT_LERP_TIME,
  DEFAULT_SCALE,
  DEFAULT_POSITION,
  DEFAULT_SCALE_STEP,
  DEFAULT_MIN_SCALE,
  DEFAULT_MAX_SCALE,
  DEFAULT_LOCK_STATE
}
