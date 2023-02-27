import React from "react";

export const Container = ({ scale, position, children } : { scale: number; position: { x: number; y: number }, children: React.ReactNode }) => {
  return (
    <div
      style={{
        transform: `scale(${scale}) translate(${position.x}px, ${position.y}px)`,
        transformOrigin: '0 0',
        height:'100%',
        width:'100%'
      }}
    >
      {children}
    </div>
  );
}
