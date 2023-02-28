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
> // or providing custom controls and overrides (both optional)
>  
> import { ZoomableContainer } from 'react-zoomable-container';
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
>     <ZoomableContainer customControls={<CustomControls />} controlOverrides={overrides}>
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
>
> Add buttons for zooming in/out by default

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
