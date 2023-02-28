# 🔭 react-zoomable-container

## A react component which allows you to make anything zoomable, pannable and pinchable.

### Key Features

> 🔥 Fast, reliable solution to provide panning capabilities across all platforms.
>
> 🛠 Lightweight requiring no external dependencies.
>
> 🪁 Easy to use and customizable. Integrate your frontend with our context api.
>
> 👑 Ability to override default values, provide custom buttons to control zoomin/out/reset.

[[DEMO] ollymonger.github.io](https://ollymonger.github.io/ "Demo")

### Installation

> ``npm install react-zoomable-container``
> or....
> `yarn add react-zoomable-container`

### Usage

Please checkout the  `<Controls>` component for more advance usages.

> ```typescript
> import { ZoomableContainer } from 'react-zoomable-container';
>
> const App = () => {
>   return (  
>    <ZoomableContainer>
>     <div style={{width: '100%', height: '100%', backgroundColor: 'red'}}>
>      <h1>Zoomable Container</h1>
>     </div>
>    </ZoomableContainer>
>  )
> }
>
> // or providing custom controls and overrides and controls to lock/unlock pan and zoom! (all optional)
>  
> import { ZoomableContainer } from 'react-zoomable-container';
>
> const Controls = () => {
>   const { handleReset, zoomIn, zoomOut, info, controls: { pan: { locked: panLocked, setLocked: setPanLock }, zoom: { locked: zoomLocked, setLocked: setZoomLock } } } = useZoomableContext();
>
>   return (
>     <div style={{
>       position:'absolute',
>       top:0,
>       left:0,
>       zIndex:1000,
>       display:'flex',
>       flexDirection: "row",
>       alignItems:'center',
>       justifyContent:'center',
>       padding:'1em',
>     }}>
>       <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
>         <button onClick={handleReset}>Reset</button>
>         <button onClick={zoomIn}>Zoom In</button>
>         <button onClick={zoomOut}>Zoom Out</button>
>         <button onClick={() => setPanLock(!panLocked)}>
>           {panLocked ? 'Unlock Pan' : 'Lock Pan'}
>         </button>
>         <button onClick={() => setZoomLock(!zoomLocked)}>
>           {zoomLocked ? 'Unlock Zoom' : 'Lock Zoom'}
>         </button>
>       </div>
>       <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
>         <h5>Scale</h5>
>         <p>{info.scale.toFixed(2)}</p>
>         <h5>Position</h5>
>         <p>{`x: ${info.position.x.toFixed(2)}, y: ${info.position.y.toFixed(2)}`}</p>
>       </div>
>     </div>
>   )
> }
>
> const App = () => {
>   const overrides = {
>    scale: 0.8,
>    position: {
>      x: -0,
>      y: 0
>    },
>     lerpTime: 300,
>     scaleStep: 0.2,
>     minScale: 0.2,
>     maxScale: 2,
>    }
>   return (
>     <ZoomableContainer customControls={<Controls />} controlOverrides={overrides}>
>       <div style={{width: '100%', height: '100%', backgroundColor: 'red'}}>
>         <h1>Zoomable Container</h1>
>       </div>
>     </ZoomableContainer>
>   )
> }
>
> ```

### How does it work?

The parent holding the ZoomableContainer determines the Zoomable area and will stick within the parent.

You can also create your own Controls component to add.

### Roadmap:

> Integrate a pinch mechanic

### Available properties

| Property name     | Type                                                                                                                                                                                                                   | Default                                                                                                                                                                         |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| customControls?   | Optional ReactNode                                                                                                                                                                                                     | ./src/components/Controls.tsx                                                                                                                                                   |
| controlOverrides? | {<br />  scale?: number;<br />  position?: {<br />    x: number<br />    y: number<br />  };<br />  lerpTime?: number;<br />  scaleStep?: number;<br />  minScale?: number;<br />  maxScale?: number<br />} | {<br />  scale: 1,<br />  position: {<br />    x: 0, y: 0<br />  },<br />   lerpTime: 300,<br />   scaleStep: 0.2,<br />   minScale: 0,<br />   maxScale: 1<br />} |

## Development

Want to contribute? Great!

##### Building

1. Run the 'yarn' or 'npm install' command at the project root.

   ```
   yarn

   npm install
   ```
2. After dependancies have installed, run the command below which builds the package to: ./dist/. This uses Rollup to build the package.

   ```
   yarn build

   npm run build
   ```

### Local testing

1. Inside the project root, run either one of the commands below to link the project locally.

   ```
   yarn link

   npm link

   ```
2. Then inside of your other project (where you want to use this locally), run one of the commands below.

   ```
   yarn link react-zoomable-container

   npm link react-zoomable-container
   ```
3. This will now pickup every build change on the other project.
4. Make Pull request with your changes!

#### License

MIT
