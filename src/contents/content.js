import React from 'react'
import Tool from '../tools/tool';
import Canvas from './canvas';

export default class Content extends React.Component {

    render() {
        const draw = (ctx) => {
            ctx.font = "30px Arial";
            ctx.fillText("Hello World", 10, 50);
          }
        return (
            <div className="h-100">
                <Tool/>
                <Canvas draw={draw} />
            </div>
        );
    }
}