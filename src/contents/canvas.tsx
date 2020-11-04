import React, { useEffect, useRef } from 'react'
import { connect } from 'react-redux';

const mapStateToProps = (state: any) => ({
  width: state.canvasReducer.width,
  height: state.canvasReducer.height
})

function Canvas(props: any) {
  
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
      const ctx = canvasRef?.current?.getContext("2d");
      if (ctx) {
        ctx.font = "40px Arial"
        ctx.fillText("Hello world", 40, 60);
      }
  }, [])

  return (
    <div className="d-flex align-items-center justify-content-center" style={{height: 'calc(100% - 50px)'}}>
      <canvas ref={canvasRef} width={props.width} height={props.height} />
    </div>
  )
}

export default connect(mapStateToProps)(Canvas)