declare const onWheel: ({ event, setScale, scale, defaultValues }: {
    event: React.WheelEvent<HTMLDivElement>;
    setScale: (scale: number) => void;
    scale: number;
    defaultValues?: {
        scale?: number | undefined;
        position?: {
            x: number;
            y: number;
        } | undefined;
        lerpTime?: number | undefined;
        scaleStep?: number | undefined;
    } | undefined;
}) => void;
declare const onMouseDown: ({ event, setPosition, position, lerpTime }: {
    event: React.MouseEvent<HTMLDivElement>;
    setPosition: ({ x, y }: {
        x: number;
        y: number;
    }) => void;
    position: {
        x: number;
        y: number;
    };
    lerpTime: number;
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
