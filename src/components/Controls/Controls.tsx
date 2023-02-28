import React from "react"
import { useZoomableContext } from "../../utils";

// This is an example of a Control component which takes in a handleReset function and info object as props, 
// which is provided from the ZoomableContainer context.
const Controls = () => {
  const { handleReset, zoomIn, zoomOut, info, controls: { pan: { locked: panLocked, setLocked: setPanLock }, zoom: { locked: zoomLocked, setLocked: setZoomLock } }, controlOverrides } = useZoomableContext();

  const zoomInButtonDisabled = React.useMemo(() => {
    if (controlOverrides && controlOverrides.maxScale) {
      return info.scale >= controlOverrides.maxScale;
    }
  },[controlOverrides, info.scale])

  const zoomOutButtonDisabled = React.useMemo(() => {
    if (controlOverrides && controlOverrides.minScale) {
      return info.scale <= controlOverrides.minScale;
    }
  },[controlOverrides, info.scale])

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
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <button onClick={handleReset}>Reset</button>
        <button onClick={zoomIn} disabled={zoomInButtonDisabled}>Zoom In</button>
        <button onClick={zoomOut} disabled={zoomOutButtonDisabled}>Zoom Out</button>
        <button onClick={() => setPanLock(!panLocked)}>
          {panLocked ? 'Unlock Pan' : 'Lock Pan'}
        </button>
        <button onClick={() => setZoomLock(!zoomLocked)}>
          {zoomLocked ? 'Unlock Zoom' : 'Lock Zoom'}
        </button>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <h5>Scale</h5>
        <p>{info.scale.toFixed(2)}</p>
        <h5>Position</h5>
        <p>{`x: ${info.position.x.toFixed(2)}, y: ${info.position.y.toFixed(2)}`}</p>
      </div>
    </div>
  )
}

export { Controls }

// Example of a custom control component
