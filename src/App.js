import React from 'react';
import DragScaleBar from './components/DragScaleBar'

function App() {
  return (
    <div>
      <DragScaleBar 
          //width={440}
          //handleValue={num => print(num)}
          //outBorder
          //fillBorder
          //dragBorder
          //initValue={30}
          dragColor="#FFB5B5" //pink
          fillColor="#ACD6FF" //light blue
          outBorderColor="#004B97" //dark blue
      />
    </div>
  );
}

export default App;
