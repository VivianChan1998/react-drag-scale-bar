# React Drag Scale Bar
✨ A simple draging bar that shows the scale. <br>
✨ Compatible for mouse clicking and screen touching<br>
✨ == new! == You can customize the color of the parts now! 

![](https://i.imgur.com/0ej1u7L.gif)

🎄 [github](https://github.com/VivianChan1998/react-drag-scale-bar/tree/master) 🎄

## How to use
- Add package to your project
```
npm install react-drag-scale-bar --save
```
- Import component into your code
```javascript
import DragScaleBar from 'react-drag-scale-bar'
```
## `<DragScaleBar />`
```javascript
import React from 'react';
import DragScaleBar from './components/DragScaleBar'

function App() {
  return (
    <div>
      <DragScaleBar />
    </div>
  );
}
```



### props
- `handleValue`: Takes the callback function whenever value of scale bar changes.
    - Example:
        This code will print the value of scale bar(0~100) on console everytime the bar gets toggled.
        ```js
        function App(){
            function print(num){
                console.log(num)
            }
            return(
                <div>
                    <DragScaleBar handleValue={num => print(num)} />
                </div>
            )
        }
        ```
- `width`: Takes an integer, for example: `width={300}`, sets the width of whole component to 300px.
    - The fill in part will be 300*0.9px width for this case.
    - Default value is 400.
- `initValue`: Takes a integer from 0~100. It will be the initial percentage of this scalebar.
- `outBorder`: default`true`, if there is outer border for the scalebar.
- `dragBorder`: default `true`, if there is border for the toggler.
- `fillBorder`: default `false`, if there is border for the inner filling bar.
### Color styling
- Each of these takes a color code ex: `#FF5151`
  - `dragColor`: the draggable circle's fill in color.
  - `fillColor`: the fill-in bar's color (you can put in `0` to make the bar invisible)
  - `outBorderColor`: the color of the outer border
- Example:
```javascript
<DragScaleBar 
    dragColor="#FFB5B5" //pink
    fillColor="#ACD6FF" //light blue
    outBorderColor="#004B97" //dark blue
/>
```
![](https://i.imgur.com/WdhM9th.png)


> This is actually my first time publishing packages, I am very welcome for any feedbacks :)
> New to the open source community and have a long way to go!!