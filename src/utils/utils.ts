const onWheel = ({ event, setScale, scale} : { event: React.WheelEvent<HTMLDivElement>, setScale: (scale: number) => void, scale: number }) => {
  const delta = event.deltaY;
  const newScale = scale - delta / 1000;
  setScale(newScale);
};

const onMouseDown = ({ event, setPosition, position} : { event: React.MouseEvent<HTMLDivElement>, setPosition: ({x, y}: { x: number, y: number }) => void, position: { x: number, y: number } }) => {
  const startX = event.pageX - position.x;
  const startY = event.pageY - position.y;

  const handleMouseMove = (event: MouseEvent) => {
    const x = event.pageX - startX;
    const y = event.pageY - startY;
    setPosition({ x, y });
  };

  const handleMouseUp = () => {
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
  };

  document.addEventListener('mousemove', handleMouseMove);
  document.addEventListener('mouseup', handleMouseUp);
};

const onTouchStart = ({ event, setPosition, position} : { event: React.TouchEvent<HTMLDivElement>, setPosition: ({x, y}: { x: number, y: number }) => void, position: { x: number, y: number } })  => {
  const startX = event.touches[0].pageX - position.x;
  const startY = event.touches[0].pageY - position.y;

  const handleTouchMove = (event: TouchEvent) => {
    const x = event.touches[0].pageX - startX;
    const y = event.touches[0].pageY - startY;
    setPosition({ x, y });
  };

  const handleTouchEnd = () => {
    document.removeEventListener('touchmove', handleTouchMove);
    document.removeEventListener('touchend', handleTouchEnd);
  };

  document.addEventListener('touchmove', handleTouchMove);
  document.addEventListener('touchend', handleTouchEnd);
};


export { onWheel, onMouseDown, onTouchStart };
