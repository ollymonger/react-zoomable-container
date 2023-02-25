declare const onWheel: ({ event, setScale, scale }: {
    event: React.WheelEvent<HTMLDivElement>;
    setScale: (scale: number) => void;
    scale: number;
}) => void;
declare const onMouseDown: ({ event, setPosition, position }: {
    event: React.MouseEvent<HTMLDivElement>;
    setPosition: ({ x, y }: {
        x: number;
        y: number;
    }) => void;
    position: {
        x: number;
        y: number;
    };
}) => void;
declare const onTouchStart: ({ event, setPosition, position }: {
    event: React.TouchEvent<HTMLDivElement>;
    setPosition: ({ x, y }: {
        x: number;
        y: number;
    }) => void;
    position: {
        x: number;
        y: number;
    };
}) => void;
export { onWheel, onMouseDown, onTouchStart };
