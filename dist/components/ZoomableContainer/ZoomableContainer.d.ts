import React, { ReactElement } from 'react';
import './styles.css';
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
     *   scaleStep: 0.2
     *  }
     * ```
     **/
    defaultValues?: {
        scale?: number;
        position?: {
            x: number;
            y: number;
        };
        lerpTime?: number;
        scaleStep?: number;
    };
};
/**
 * A wrapper component that provides zooming and panning functionality for its child components.
 *
 * @component
 * @example
 * ```
 * <Wrapper>
 *   <div style={{ display: 'flex', width:'100%', height:'100%'}}>
 *    <img src="my-image.png" alt="My Image" />
 *   </div>
 * </Wrapper>
 * ```
 */
declare const ZoomableContainer: React.FC<ZoomableContainerProps>;
export { ZoomableContainer };
