import React from 'react'
import { useSelector } from 'react-redux';
import Tool from '../tools/tool';
import Canvas from './canvas';
import Draw from './draw';

export default function Content() {

    const currentMenu = useSelector((state: any) => state.menuReducer.currentMenu);

    function displayContent(name: string) {
        console.log(name)
        if (name === "Draw") {
            return <Draw/>
        } else {
            return <Canvas/>
        }
    }

    return (
        <div className="h-100">
            <Tool />
            {displayContent(currentMenu)}
        </div>
    );
}