import React, { ReactElement } from 'react';
import { ControlOverridesType } from '../../utils/types';
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
    controlOverrides?: ControlOverridesType;
};
/**
 * A wrapper component that provides zooming and panning functionality for its child components.
 * This component scales to be 100% of the width and height of its parent container.
 * properties:
 * @param {React.ReactNode} children - The child components that will be rendered inside the `ZoomableContainer`.
 * @param {ReactElement<any, any> | null} customControls - Optional react component that will be rendered as the custom controls for the `ZoomableContainer`.
 * @param {ControlOverridesType} controlOverrides - Optional object that will override the default values for the `ZoomableContainer` component.
 *
 *
 * @example
 * ```
 * import { ZoomableContainer } from 'react-zoomable-container';
 *
 * const App = () => {
 *  return (
 *   <ZoomableContainer>
 *    <div style={{width: '100%', height: '100%', backgroundColor: 'red'}}>
 *     <h1>Zoomable Container</h1>
 *    </div>
 *  </ZoomableContainer>
 * )
 * }
 *
 * or providing custom controls and overrides
 *
 * import { ZoomableContainer, useZoomableContext } from 'react-zoomable-container';
 *
 * const Controls = () => {
 *  const { handleReset, zoomIn, zoomOut, info, controlOverrides } = useZoomableContext();
 *
    return (
      <div style={{
        position:'absolute',
        top:0,
        left:0,
        zIndex:1000,
        display:'flex',
        flexDirection: "row",
        alignItems:'center',
        justifyContent:'center',
        padding:'1em',
      }}>
        <button onClick={handleReset}>Reset</button>
        <p className="scaleInfo">
          {`Scale: ${info.scale.toFixed(2)} | Position: x${info.position.x.toFixed(2)}, y${info.position.y.toFixed(2)}`}
        </p>
      </div>
    )
  }
 *
 * const App = () => {
 *  const overrides = {
 *    scale: 0.8,
 *    position: {
 *      x: -0,
 *      y: 0
 *    },
 *    lerpTime: 300,
 *    scaleStep: 0.2,
 *    minScale: 0.2,
 *    maxScale: 2,
 *  }
 *  return (
 *    <ZoomableContainer customControls={<Controls />} controlOverrides={overrides}>
 *     <div style={{width: '100%', height: '100%', backgroundColor: 'red'}}>
 *      <h1>Zoomable Container</h1>
 *     </div>
 *    </ZoomableContainer>
 * )
 * }
 * ```
 */
declare function ZoomableContainer({ children, customControls, controlOverrides }: ZoomableContainerProps): JSX.Element;
export { ZoomableContainer };
