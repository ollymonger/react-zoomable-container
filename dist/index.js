var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
define("Container", ["require", "exports", "react"], function (require, exports, react_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Container = void 0;
    react_1 = __importDefault(react_1);
    const Container = ({ scale, position, children }) => {
        return (react_1.default.createElement("div", { style: {
                transform: `scale(${scale}) translate(${position.x}px, ${position.y}px)`,
                transformOrigin: '0 0',
                height: '100%',
                width: '100%'
            } }, children));
    };
    exports.Container = Container;
});
define("Context", ["require", "exports", "react"], function (require, exports, react_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.useZoomableContext = exports.ZoomableContainerContext = void 0;
    exports.ZoomableContainerContext = (0, react_2.createContext)({ handleReset: () => { }, zoomIn: () => { }, zoomOut: () => { }, info: { scale: 0, position: { x: 0, y: 0 } } });
    /**
     * A hook that provides access to the current `ZoomableContainerContext` values.
     *
     * @returns An object containing the current `handleReset` function and `info` object.
     * The `handleReset` function can be called to reset the zoom and pan values to their defaults,
     * and the `info` object contains the current zoom and pan values.
     */
    const useZoomableContext = () => (0, react_2.useContext)(exports.ZoomableContainerContext);
    exports.useZoomableContext = useZoomableContext;
});
define("Controls", ["require", "exports", "react"], function (require, exports, react_3) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Controls = void 0;
    react_3 = __importDefault(react_3);
    const Controls = ({ handleReset, info }) => {
        return (react_3.default.createElement("div", { style: {
                position: 'absolute',
                top: 0,
                left: 0,
                zIndex: 1000,
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '1em'
            } },
            react_3.default.createElement("button", { onClick: handleReset }, "Reset"),
            react_3.default.createElement("p", { style: { paddingLeft: '1em', color: "gray" } }, `Scale: ${info.scale.toFixed(2)} | Position: x${info.position.x.toFixed(2)}, y${info.position.y.toFixed(2)}`)));
    };
    exports.Controls = Controls;
});
define("utils", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.onTouchStart = exports.onMouseDown = exports.onWheel = void 0;
    const onWheel = ({ event, setScale, scale }) => {
        const delta = event.deltaY;
        const newScale = scale - delta / 1000;
        setScale(newScale);
    };
    exports.onWheel = onWheel;
    const onMouseDown = ({ event, setPosition, position }) => {
        const startX = event.pageX - position.x;
        const startY = event.pageY - position.y;
        const handleMouseMove = (event) => {
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
    exports.onMouseDown = onMouseDown;
    const onTouchStart = ({ event, setPosition, position }) => {
        const startX = event.touches[0].pageX - position.x;
        const startY = event.touches[0].pageY - position.y;
        const handleTouchMove = (event) => {
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
    exports.onTouchStart = onTouchStart;
});
define("ZoomableContainer", ["require", "exports", "react", "Container", "Context", "Controls", "utils"], function (require, exports, react_4, Container_1, Context_1, Controls_1, utils_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ZoomableContainer = void 0;
    react_4 = __importStar(react_4);
    /**
     * A wrapper component that provides zooming and panning functionality for its child components.
     *
     * @component
     * @example
     * ```
     * <Wrapper>
     *   <div style={{ display: 'flex', width:'100%', height:'100%'}}>
     *    <img src="my-image.png" alt="My Image" />
     *   </div>
     * </Wrapper>
     * ```
     */
    const ZoomableContainer = ({ children, customControls }) => {
        const [scale, setScale] = (0, react_4.useState)(0.8);
        const [position, setPosition] = (0, react_4.useState)({ x: -98, y: 129 });
        const ref = (0, react_4.useRef)(null);
        const handleWheel = (event) => {
            (0, utils_1.onWheel)({ event: event, setScale: setScale, scale: scale });
        };
        const handleMouseDown = (event) => {
            (0, utils_1.onMouseDown)({ event: event, setPosition: setPosition, position: position });
        };
        const handleTouchStart = (event) => {
            (0, utils_1.onTouchStart)({ event: event, setPosition: setPosition, position: position });
        };
        const handleReset = react_4.default.useCallback(() => {
            setScale(1);
            setPosition({ x: 0, y: 0 });
        }, []);
        const zoomIn = react_4.default.useCallback(() => {
            setScale(scale + 0.2);
        }, [scale]);
        const zoomOut = react_4.default.useCallback(() => {
            setScale(scale - 0.2);
        }, [scale]);
        return (react_4.default.createElement("div", { ref: ref, onWheel: handleWheel, onMouseDown: handleMouseDown, onTouchStart: handleTouchStart, style: {
                height: '100%',
                width: '100%'
            } },
            react_4.default.createElement(Context_1.ZoomableContainerContext.Provider, { value: { handleReset, zoomIn, zoomOut, info: { scale, position } } },
                customControls ? customControls : react_4.default.createElement(Controls_1.Controls, { handleReset: handleReset, info: { scale, position } }),
                react_4.default.createElement(Container_1.Container, { scale: scale, position: position }, children))));
    };
    exports.ZoomableContainer = ZoomableContainer;
});
