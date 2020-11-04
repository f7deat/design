import React from 'react'
import Tool from '../tools/tool';
import Canvas from './canvas';

export default class Content extends React.Component {

    render() {
        return (
            <div className="h-100">
                <Tool/>
                <Canvas />
            </div>
        );
    }
}