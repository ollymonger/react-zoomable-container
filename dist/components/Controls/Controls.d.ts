/// <reference types="react" />
declare const Controls: ({ handleReset, info }: {
    handleReset: () => void;
    info: {
        scale: number;
        position: {
            x: number;
            y: number;
        };
    };
}) => JSX.Element;
export { Controls };
