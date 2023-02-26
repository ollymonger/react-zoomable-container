const onWheel = ({ event, setScale, scale} : { event: React.WheelEvent<HTMLDivElement>, setScale: (scale: number) => void, scale: number }) => {
  const delta = event.deltaY;
  const newScale = scale - delta / 1000;
  setScale(newScale);
};

const onMouseDown = ({ event, setPosition, position, lerpTime } : { event: React.MouseEvent<HTMLDivElement>, setPosition: ({x, y}: { x: number, y: number }) => void, position: { x: number, y: number }, lerpTime: number }) => {
  const startX = event.pageX - position.x;
  const startY = event.pageY - position.y;

  const startTime = performance.now();

  const handleMouseMove = (event: MouseEvent) => {
    const timeElapsed = performance.now() - startTime;
    const progress = Math.min(timeElapsed / lerpTime, 1); // animate over 300 milliseconds
    const x = lerp(position.x, event.pageX - startX, progress);
    const y = lerp(position.y, event.pageY - startY, progress);
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

// lerp function
const lerp = (start: number, end: number, t: number) => {
  return start * (1 - t) + end * t;
};

export { onWheel, onMouseDown, onTouchStart };
