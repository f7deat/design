import React from 'react';
import { Stage } from "react-konva";

function Canvas() {

  return (
    <div className="m-4 bg-white border border-primary">
      <Stage width={window.innerWidth - 458} height={window.innerHeight}>

      </Stage>
    </div>
  )
}

export default Canvas