import React, { useEffect, useRef } from 'react'

function Canvas() {
  
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
      const ctx = canvasRef?.current?.getContext("2d");
      if (ctx) {
        ctx.fillText("haha", 10, 20)
      }
  }, [canvasRef])

  return (
    <div className="p-4">
      <canvas ref={canvasRef} />
    </div>
  )
}

export default Canvas