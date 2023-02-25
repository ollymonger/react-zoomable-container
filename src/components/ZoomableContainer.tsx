import React, { useState, useRef, ReactElement, createContext, useContext } from 'react';
import { Container } from './Container';
import { ZoomableContainerContext } from './Context';
import { Controls } from './Controls';
import { onMouseDown, onTouchStart, onWheel } from './utils';

type ZoomableContainerProps= {
  children: React.ReactNode;
  /**
  * A React element that will be rendered as the custom controls for the `Wrapper`.
  */
  customControls?: ReactElement<any, any> | null;
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
const ZoomableContainer: React.FC<ZoomableContainerProps> = ({ children, customControls }) => {
  const [scale, setScale] = useState<number>(0.8);
  const [position, setPosition] = useState<{ x: number; y: number }>({ x: -98, y: 129 });
  const ref = useRef<HTMLDivElement>(null);

  const handleWheel = (event: React.WheelEvent<HTMLDivElement>) => {
    onWheel({ event: event, setScale: setScale, scale: scale });
  };

  const handleMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
    onMouseDown({ event: event, setPosition: setPosition, position: position })
  };

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    onTouchStart({ event: event, setPosition: setPosition, position: position});
  };

  const handleReset = React.useCallback(() => {
    setScale(1);
    setPosition({ x: 0, y: 0 });
  },[])

  const zoomIn = React.useCallback(() => {
    setScale(scale + 0.2);
  },[scale])

  const zoomOut = React.useCallback(() => {
    setScale(scale - 0.2);
  },[scale])

  return (
    <div 
    ref={ref}
    onWheel={handleWheel}
    onMouseDown={handleMouseDown}
    onTouchStart={handleTouchStart}

    style={{
      height:'100%',
      width:'100%'
    }}>
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
