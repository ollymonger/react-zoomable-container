import React from "react"

export const Controls = ({handleReset, info } : { handleReset: () => void, info: { scale: number, position: { x: number, y: number }} } ) => {
  return (
    <div style={{
      position:'absolute',
      top:0,
      left:0,
      zIndex:1000,
      display:'flex',
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'center',
      padding:'1em'
    }}>
      <button onClick={handleReset}>Reset</button>
      <p style={{paddingLeft:'1em', color:"gray"}}>
        {`Scale: ${info.scale.toFixed(2)} | Position: x${info.position.x.toFixed(2)}, y${info.position.y.toFixed(2)}`}
      </p>        
    </div>
  )
}
