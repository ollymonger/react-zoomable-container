import React, { useState, useRef, ReactElement, createContext, useContext } from 'react';
import { Container } from '../Container';
import { ZoomableContainerContext } from '../../utils/Context';
import { Controls } from '../Controls';
import { DEFAULT_LERP_TIME, DEFAULT_POSITION, DEFAULT_SCALE, DEFAULT_SCALE_STEP, onMouseDown, onTouchStart, onWheel } from '../../utils';
import './styles.css'

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
   *   scaleStep: 0.2
   *  }
   * ```
   **/
  defaultValues?: {
    scale?: number;
    position?: {
      x: number;
      y: number;
    },
    lerpTime?: number,
    scaleStep?: number
  }
}

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
const ZoomableContainer: React.FC<ZoomableContainerProps> = ({ children, customControls, defaultValues }) => {
  const [scale, setScale] = useState<number>(defaultValues?.scale || DEFAULT_SCALE);
  const [position, setPosition] = useState<{ x: number; y: number }>(defaultValues?.position || DEFAULT_POSITION);
  const ref = useRef<HTMLDivElement>(null);

  const handleWheel = (event: React.WheelEvent<HTMLDivElement>) => {
    onWheel({ event: event, setScale: setScale, scale: scale });
  };

  const handleMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
    onMouseDown({ event: event, setPosition: setPosition, position: position, lerpTime: defaultValues?.lerpTime || DEFAULT_LERP_TIME })
  };

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    onTouchStart({ event: event, setPosition: setPosition, position: position });
  };

  const handleReset = React.useCallback(() => {
    setScale(1);
    setPosition(defaultValues?.position || DEFAULT_POSITION);
  },[])


  const zoomIn = React.useCallback(() => {
    setScale(scale + (defaultValues?.scaleStep || DEFAULT_SCALE_STEP));
  },[scale])

  const zoomOut = React.useCallback(() => {
    setScale(scale - (defaultValues?.scaleStep || DEFAULT_SCALE_STEP));
  },[scale])

  return (
    <div 
      ref={ref}
      onWheel={handleWheel}
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
      className="container"
    >
      <ZoomableContainerContext.Provider value={{ handleReset, zoomIn, zoomOut, info: {scale, position} }}>
        {customControls ? customControls : <Controls handleReset={handleReset} info={{scale, position}} />}
        <Container scale={scale} position={position}>
          {children}
        </Container>
      </ZoomableContainerContext.Provider>
    </div>
  );
};

export { ZoomableContainer };
