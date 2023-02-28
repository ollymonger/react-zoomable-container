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
    <div style={{ position: 'absolute', top: '10px', right: '10px', backgroundColor: '#ffffff', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)', borderRadius: '5px', padding: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h2 style={{ fontSize: '20px', margin: '0 0 10px' }}>Map Controls</h2>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <button style={{ 
          backgroundColor: '#007bff', 
          color: '#ffffff', 
          border: '2px solid #007bff', 
          borderRadius: '5px', 
          padding: '10px 20px', 
          fontSize: '16px', 
          marginBottom: '10px' 
        }} onClick={handleReset}>Reset</button>
        <button style={{ 
          backgroundColor: '#007bff', 
          color: '#ffffff', 
          border: '2px solid #007bff', 
          borderRadius: '5px', 
          padding: '10px 20px', 
          fontSize: '16px',
          marginBottom: '10px' 
        }} onClick={zoomIn} disabled={zoomInButtonDisabled}>Zoom In</button>
        <button style={{ 
          backgroundColor: '#007bff', 
          color: '#ffffff', 
          border: '2px solid #007bff', 
          borderRadius: '5px', 
          padding: '10px 20px', 
          fontSize: '16px', 
          marginBottom: '10px' 
        }} onClick={zoomOut} disabled={zoomOutButtonDisabled}>Zoom Out</button>
        <button style={{ 
          backgroundColor: '#007bff', 
          color: '#ffffff', 
          border: '2px solid #007bff', 
          borderRadius: '5px', 
          padding: '10px 20px', 
          fontSize: '16px', 
          marginBottom: '10px' 
        }} onClick={() => setPanLock(!panLocked)}>
          {panLocked ? 'Unlock Pan' : 'Lock Pan'}
        </button>
        <button style={{ 
          backgroundColor: '#007bff', 
          color: '#ffffff', 
          border: '2px solid #007bff', 
          borderRadius: '5px', 
          padding: '10px 20px', 
          fontSize: '16px', 
          marginBottom: '10px'
        }} onClick={() => setZoomLock(!zoomLocked)}>
          {zoomLocked ? 'Unlock Zoom' : 'Lock Zoom'}
        </button>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '10px' }}>
        <h5 style={{ fontSize: '16px', margin: '0' }}>Scale</h5>
        <p style={{ fontSize: '14px', margin: '0' }}>{info.scale.toFixed(2)}</p>
        <h5 style={{ fontSize: '16px', margin: '10px 0 0' }}>Position</h5>
        <p style={{ fontSize: '14px', margin: '0' }}>{`x: ${info.position.x.toFixed(2)}, y: ${info.position.y.toFixed(2)}`}</p>
      </div>
    </div>
  )
}

export { Controls }

// Example of a custom control component
