import React, { ReactElement } from 'react';
type ZoomableContainerProps = {
    children: React.ReactNode;
    /**
    * A React element that will be rendered as the custom controls for the `Wrapper`.
    */
    customControls?: ReactElement<any, any> | null;
    /**
     * The default values for the `Wrapper` component.
     *
     * @default
     * ```js
     *  {
     *    scale: 0.8, // Default scale value
     *    position: {
     *      x: -0, // Default x position
     *      y: 0 // Default y position
     *    },
     *   lerpTime: 300,
     *   scaleStep: 0.2,
     *   minScale: 0.2,
     *   maxScale: 2,
     *
     *  }
     * ```
     **/
    defaultValues?: DefaultValues;
};
/**
 * A wrapper component that provides zooming and panning functionality for its child components.
 *
 */
declare function ZoomableContainer({ children, customControls, defaultValues }: ZoomableContainerProps): JSX.Element;
export { ZoomableContainer };
