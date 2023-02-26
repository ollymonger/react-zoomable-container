import React from "react"
import './styles.css'

export const Controls = ({handleReset, info } : { handleReset: () => void, info: { scale: number, position: { x: number, y: number }} } ) => {
  return (
    <div className="controls">
      <button onClick={handleReset}>Reset</button>
      <p className="scaleInfo">
        {`Scale: ${info.scale.toFixed(2)} | Position: x${info.position.x.toFixed(2)}, y${info.position.y.toFixed(2)}`}
      </p>        
    </div>
  )
}
