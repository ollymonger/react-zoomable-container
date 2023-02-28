import { ControlOverridesType } from "./types";
/**
 * A function that handles the mouse wheel event.
 *
 * @param event The mouse wheel event.
 * @param setScale A function that sets the scale value.
 * @param scale The current scale value.
 * @param controlOverrides An object containing the control overrides.
 * @returns void
 * */
declare const onWheel: ({ event, setScale, scale, controlOverrides, zoomLock }: {
    event: React.WheelEvent<HTMLDivElement>;
    setScale: (scale: number) => void;
    scale: number;
    controlOverrides?: ControlOverridesType | undefined;
    zoomLock: boolean;
}) => void;
/**
 * A function that handles the mouse down event; used for panning.
 *
 * @param event The mouse down event.
 * @param setPosition A function that sets the position value.
 * @param position The current position value.
 * @param lerpTime The lerp time value.
 * @returns void
 * */
declare const onMouseDown: ({ event, setPosition, position, lerpTime, panLock }: {
    event: React.MouseEvent<HTMLDivElement>;
    setPosition: ({ x, y }: {
        x: number;
        y: number;
    }) => void;
    position: {
        x: number;
        y: number;
    };
    lerpTime: number;
    panLock: boolean;
}) => void;
/**
 * A function that handles the touch start event; used for panning on mobile devices.
 *
 * @param event The touch start event.
 * @param setPosition A function that sets the position value.
 * @param position The current position value.
 * @returns void
 * */
declare const onTouchStart: ({ event, setPosition, position, lerpTime, panLock }: {
    event: React.TouchEvent<HTMLDivElement>;
    setPosition: ({ x, y }: {
        x: number;
        y: number;
    }) => void;
    position: {
        x: number;
        y: number;
    };
    lerpTime: number;
    panLock: boolean;
}) => void;
declare const zoom: ({ inOrOut, setScale, scale, controlOverrides }: {
    inOrOut: 'in' | 'out';
    setScale: (scale: number) => void;
    scale: number;
    controlOverrides?: ControlOverridesType | undefined;
}) => void;
export { onWheel, onMouseDown, onTouchStart, zoom };
