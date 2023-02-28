import React, { useState, useRef, ReactElement } from 'react';
import { Container } from '../Container';
import { ZoomableContainerContext } from '../../utils/Context';
import { Controls } from '../Controls';
import { DEFAULT_LERP_TIME, DEFAULT_POSITION, DEFAULT_SCALE, DEFAULT_SCALE_STEP, onMouseDown, onTouchStart, onWheel } from '../../utils';
import styles from './styles'
import { ControlOverridesType } from '../../utils/types';

type ZoomableContainerProps= {
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
}

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
 * import { ZoomableContainer } from 'react-zoomable-container';
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
 *    <ZoomableContainer customControls={<CustomControls />} controlOverrides={overrides}>
 *     <div style={{width: '100%', height: '100%', backgroundColor: 'red'}}>
 *      <h1>Zoomable Container</h1>
 *     </div>
 *    </ZoomableContainer>
 * )
 * }
 * ```
 */
function ZoomableContainer({ children, customControls, controlOverrides }: ZoomableContainerProps) {
  const [scale, setScale] = useState<number>(controlOverrides && controlOverrides.scale ? controlOverrides?.scale : DEFAULT_SCALE);
  const [position, setPosition] = useState<{ x: number; y: number }>(controlOverrides && controlOverrides.position ? controlOverrides?.position : DEFAULT_POSITION);
  const ref = useRef<HTMLDivElement>(null);

  // Handle scroll events
  const handleWheel = (event: React.WheelEvent<HTMLDivElement>) => {
    onWheel({ event: event, setScale: setScale, scale: scale, controlOverrides });
  };

  // Handle mouse down
  const handleMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
    onMouseDown({ event: event, setPosition: setPosition, position: position, lerpTime: controlOverrides && controlOverrides.lerpTime ? controlOverrides.lerpTime : DEFAULT_LERP_TIME })
  };

  // Handle touch start
  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    onTouchStart({ event: event, setPosition: setPosition, position: position });
  };

  // Reset button handler
  const handleReset = React.useCallback(() => {
    setScale(1);
    setPosition(controlOverrides?.position || DEFAULT_POSITION);
  },[])


  const zoomIn = React.useCallback(() => {
    setScale(scale + (controlOverrides && controlOverrides.scaleStep ? controlOverrides?.scaleStep : DEFAULT_SCALE_STEP));
  },[scale])

  const zoomOut = React.useCallback(() => {
    setScale(scale - (controlOverrides && controlOverrides.scaleStep ? controlOverrides?.scaleStep : DEFAULT_SCALE_STEP));
  },[scale])

  return (
    <div 
      ref={ref}
      onWheel={handleWheel}
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
      style={styles.container}
    >
      <ZoomableContainerContext.Provider value={{ handleReset, zoomIn, zoomOut, info: {scale, position}, controlOverrides }}>
        {customControls ? customControls : <Controls handleReset={handleReset} info={{scale, position}} />}
        <Container scale={scale} position={position}>
          {children}
        </Container>
      </ZoomableContainerContext.Provider>
    </div>
  );
};

export { ZoomableContainer };
