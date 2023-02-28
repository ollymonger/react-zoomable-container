import React, { ReactElement } from 'react';
declare type ZoomableContainerProps = {
    children: React.ReactNode;
    /**
    * A React element that will be rendered as the custom controls for the `Wrapper`.
    */
    customControls?: ReactElement<any, any> | null;
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
