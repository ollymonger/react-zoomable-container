import React from "react"
import { useZoomableContext } from "../../utils";

// This is an example of a Control component which takes in a handleReset function and info object as props, 
// which is provided from the ZoomableContainer context.
const Controls = () => {
  const { handleReset, zoomIn, zoomOut, info } = useZoomableContext();
  
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
      <button onClick={zoomIn}>Zoom +</button>
      <button onClick={zoomOut}>Zoom -</button>
      <p className="scaleInfo">
        {`Scale: ${info.scale.toFixed(2)} | Position: x${info.position.x.toFixed(2)}, y${info.position.y.toFixed(2)}`}
      </p>        
    </div>
  )
}

export { Controls }

// Example of a custom control component
