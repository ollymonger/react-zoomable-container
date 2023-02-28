import React from "react";

const Container = ({ scale, position, children } : { scale: number; position: { x: number; y: number }, children: React.ReactNode }) => {
  return (
    <div
      style={{
        transform: `scale(${scale}) translate(${position.x}px, ${position.y}px)`,
        transformOrigin: '50% 50%', // Make sure the scale is centered
        height:'100%',
        width:'100%'
      }}
    >
      {children}
    </div>
  );
}

export { Container };
